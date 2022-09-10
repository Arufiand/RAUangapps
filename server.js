const http = require('http');
const moment = require('moment');
const app = require('./app');
const port = process.env.port || 3000
const server = http.createServer(app);

server.listen(port, ()=>{console.log(`Server running on port ${port} at ${moment().format()}`);});