const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const morgan = require('morgan');
const db = require('./config/dbConnection');

const userGateway = require("./routes/UserGateway");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('tiny'));

app.use('/UserGateway',userGateway);
app.listen(port);