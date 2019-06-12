'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    console.log('Incoming connection...');

    let urlObj = url.parse(req.url, true);
    
    if (urlObj.pathname === '/test' && urlObj.query.mess) {
        let message = 'Hello, world!\n' +
            'Method: ' + req.method + '\n' +
            'Message: ' + urlObj.query.mess;

        res.end(message);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }

}).listen({port: 8000});

console.log('Server running at http://127.0.0.1:8000');
