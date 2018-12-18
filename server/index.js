// 'require -> Es5 syntax, import es6 syntax
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// dev purpose
const cors = require('cors');

const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect(
  'mongodb://localhost:27017/react_auth',
  { useNewUrlParser: true }
);

// dev purpose
app.use(cors());


//App setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

// ROUTER
router(app);

//Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`server is listening on: ${port}`);