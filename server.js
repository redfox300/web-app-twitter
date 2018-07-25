"use strict";

const fs = require('fs');
const twitterProxyServer = require('twitter-proxy');
const proxyConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const serveHandler = require('serve-handler');
const http = require('http');

//Initialises twitter proxy using parameters in config.json
twitterProxyServer(proxyConfig);

const server = http.createServer((request, response) => {
    return serveHandler(request,response, {"public":"react-client/build"});
});

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});