'use strict';

$(function() {
  $.validate({
    modules: 'toggleDisabled',
    disabledFormFilter: '#submitForm',
    form: '#submitForm'
  });

  $('form').submit(function() {
    var self = this;
    $(':submit', self).prop('disabled', true);
    setTimeout(function() {
      $(':submit', self).prop('disabled', false);
    }, 60000);
  });




  // self validate

  // function isChecked() {
  //   if($('#plan1').prop('checked') || $('#plan2').prop('checked') || $('#plan3').prop('checked') || $('#plan4').prop('checked')) {
  //     $('#checkboxGroup').addClass('has-success');
  //     $('#checkboxGroup').removeClass('has-error');
  //     $('#errorBlock').css('display', 'none');
  //     if (!$('.form-group').hasClass('has-error')) {
  //       $('input[type=\"submit\"]').removeClass('disabled');
  //     }
  //   } else {
  //     $('#checkboxGroup').addClass('has-error');
  //     $('#checkboxGroup').removeClass('has-success');
  //     $('#errorBlock').css('display', 'block');
  //     $('input[type=\"submit\"]').addClass('disabled');
  //   }
  // }


  // $('#plan1').click(function() {
  //   isChecked();
  //   if (!$(this).prop('checked')) {
  //     changeCvValue('none');
  //   }
  // });
  //
  // $('#plan2').click(function() {
  //   isChecked();
  //   if (!$(this).prop('checked')) {
  //     changeCvValue('none');
  //   }
  // });
  //
  // $('#plan3').click(function() {
  //   isChecked();
  //   if (!$(this).prop('checked')) {
  //     changeCvValue('none');
  //   }
  // });
  //
  // $('#plan4').click(function() {
  //   isChecked();
  //   if (!$(this).prop('checked')) {
  //     changeCvValue('none');
  //   }
  // });


  // change for cv_type value
  function changeCvValue(value) {
    $('#cvCheck').val(value);
  }

  $('.cvButton01').click(function() {
    var value = $(this).data('cvtype');
    changeCvValue(value);
    $('#plan1').prop('checked', true);
  });
  $('.cvButton02').click(function() {
    var value = $(this).data('cvtype');
    changeCvValue(value);
    $('#plan2').prop('checked', true);
  });
  $('.cvButton03').click(function() {
    var value = $(this).data('cvtype');
    changeCvValue(value);
    $('#plan3').prop('checked', true);
  });
});
