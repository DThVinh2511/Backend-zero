const express = require('express');
const path = require('path');
require('dotenv').config();
const viewEngine = require('./config/viewEngine');
const WebRouter = require('./routers/web');
const apirouter = require('./routers/api');
const fileUpload = require('express-fileupload');
const connection = require('./config/database');
const {
  default: mongoose
} = require('mongoose');
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
//config file upload
app.use(fileUpload());
//Khai bao router
app.use('/', WebRouter);
app.use('/v1/api/', apirouter);

//test connection
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log("error connect to db", error);
  }
})()
// create the connection to database


// simple query