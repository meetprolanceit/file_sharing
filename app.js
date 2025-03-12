const http = require('http');
const path = require('path');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const { setSocket } = require('./utils/socket');
setSocket(socketIo(server));

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(require('./routers/share.router'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
