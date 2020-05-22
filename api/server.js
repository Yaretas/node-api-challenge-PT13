const express = require('express');

//Calling the route files file 
actionRouter = require("../app-route/routeAction.js");
projectRouter = require("../app-route/routeProject");

const server = express();
//middleware
server.use(express.json());


//API test if is running
server.get('/', (req, res) => {
    res.send(`
        <h1>API Running :)</h1>
    `);
});

//Router handler
server.use('/api/actions', actionRouter);
server.use('/api/project', projectRouter);


//Export server
module.exports = server;