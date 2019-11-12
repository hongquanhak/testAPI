'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser') //trich xuat toan bo noi dung cua request den va hien thi no tren do
require('dotenv').config() //su dung environment variables
// Set options as a parameter, environment variable, or rc file.

const port = process.env.PORT || 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./api/routes.js') //importing route - load tat ca routes da duoc khai bao trong file
routes(app)

app.get('/products/:date', (req, res) => {
    res.send('' + req.params.date);
})

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
})


app.listen(port)

console.log('RESTful API server started on: ' + port)