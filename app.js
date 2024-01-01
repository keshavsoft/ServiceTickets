// let CommonForWebSocketStart = require("./Projects/KWSServer/EntryFile");
import { StartFunc as StartFuncPortListen } from "./PortListen.js";
// import { StartFunc as StartFuncKWSServer } from "./Projects/KWSServer/EntryFile.js";

// import { StartFunc as StartFuncKLowDb } from "./KLowDb/read.js";

import { router as routerImageUpload } from "./routes/ImageUpload.js";
import { router as routerlogin } from "./routes/login.js";
import { router as routerAdmin } from "./routes/admin.js";
import { router as routerProjects } from "./routes/Projects.js";

// require('dotenv').config();

// const express = require('express');
import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

// const http = require('http');
const app = express();
// var path = require('path');
// var cookieParser = require('cookie-parser');
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '3017');

app.use(cookieParser());

app.use(express.json({ limit: '100mb' }));

app.use('/', express.static(path.join(path.resolve(), 'public')))

app.get('/', (req, res) => {
    res.json("kkhhhhhhh")
});

app.get('/k1', (req, res) => {
    // StartFuncKLowDb().then();
    res.json("k1");
});

app.use('/profile', routerImageUpload);
app.use('/admin', routerAdmin);
app.use('/login', routerlogin);
app.use('/Projects', routerProjects);

// StartFuncKWSServer(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, StartFuncPortListen);
