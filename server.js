const express = require('express'); 
const helmet = require('helmet');
const actionsRouter = require('./router/actions-router');
const projectsRouter = require('./router/projects-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

module.exports = server;