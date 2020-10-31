#! /usr/bin/env node
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var SERVER_IP = process.env.SERVER_IP || '127.10.0.1';
var SERVER_PORT = 3000;

app.get('/', function (req, res) {
    res.json({
        message: "Hello, world"
    });
});

app.listen(SERVER_PORT, SERVER_IP, function () {
    console.log('Application started.');
});