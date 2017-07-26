#!/bin/bash -eux
case $1 in
	prod*)
		echo "Running in production..."
		echo -n "Are you sure? [y/N] "
		read yn
		case $yn in
			y|yes);;
			*) echo "Aborting"; exit ;;
		esac

		S3_BUCKET_NAME="code-check-landing-production"
		DISTRIBUTION_ID="E24QWSLFK5QPLW"
		;;
	*)
		echo "Running in development..."
		S3_BUCKET_NAME="code-check-landing-development"
		DISTRIBUTION_ID="E28AU053GTN5PW"
		;;
esac

gulp clean && \
  gulp build && \
  aws s3 sync dist/ s3://$S3_BUCKET_NAME/ --delete && \
  aws configure set preview.cloudfront true && \
  aws cloudfront create-invalidation --distribution-id=$DISTRIBUTION_ID --paths=/*
