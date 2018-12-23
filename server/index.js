const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/auth');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(cors());
router(app);

const PORT = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(PORT);
console.log("server is listening to 3090");