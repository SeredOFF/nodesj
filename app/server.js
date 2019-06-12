'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {

    console.log('Incoming connection...');

    let urlObj = url.parse(req.url, true);
    
    if (urlObj.pathname === '/test' && urlObj.query.mess) {

        let message = 'Hello, world!\n' +
            'Method: ' + req.method + '\n' +
            'Message: ' + urlObj.query.mess;

        res.end(message);

    } else if (urlObj.pathname === '/get-json') {

        fs.readFile('./node_libraries/json/ru.json', {encoding: 'utf-8'}, (err, info) => {
            
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.end('Error');
            }

            res.end(info);
        });

    } else {

        res.statusCode = 404;

        res.end('Page not found');

    }

}).listen({port: 8000});

console.log('Server running at http://127.0.0.1:8000');
