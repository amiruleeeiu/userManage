const auth = require("json-server-auth");
const jsonServer = require("json-server");
const express = require("express");
const cors = require('cors')

const http = require("http");

const app = express();

app.use(cors())

const server = http.createServer(app);
const io = require("socket.io")(server);

global.io = io;

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

// Bind the router db to the app
app.db = router.db;


app.use(router);


server.listen(port);
