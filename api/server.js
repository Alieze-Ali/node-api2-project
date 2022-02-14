// implement your server here

const express = require('express');

const server = express();

server.use(express.json());

// require your posts router and connect it here
const postRouter = require('./posts/posts-router');

// you need a base endpoint to start use server.get
server.get('/', (req, res) => {
    res.send('Your base API is working!!');
});

// you also need a base url route with server.use
server.use('/api/posts', postRouter);

module.exports = server;
