const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('src'))

app.listen(port, function () {
  console.log('konoby-lp listening on port 3000!')
})