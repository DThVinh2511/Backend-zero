const express = require('express');
const path = require('path');
require('dotenv').config();
const viewEngine = require('./config/viewEngine');
const WebRouter = require('./routers/web');
const connection = require('./config/database');
const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;
//confix template engine
viewEngine(app);
//config req.body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//Khai bao router
app.use('/', WebRouter);

//test connection
// create the connection to database


// simple query

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})