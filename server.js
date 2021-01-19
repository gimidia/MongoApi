const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes.js');
routes(app);


app.listen(3000,() => console.log('Server rodando na porta 3000'));