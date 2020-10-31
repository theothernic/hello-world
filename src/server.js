#! /usr/bin/env node

import express from 'express';

const app = express();
const SERVER_IP = process.env.SERVER_IP || '127.10.0.1';
const SERVER_PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello, world"
    });
});

app.listen(SERVER_PORT, SERVER_IP, () => {
    console.log('Application started.');
});

