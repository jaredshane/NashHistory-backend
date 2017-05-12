'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')
const { knex } = require('./db/database');
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1', routes)

//catch 404 errors

app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

app.use( (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, () => {
  console.log(`listening in on port: ${port}`)
})


module.exports = app
