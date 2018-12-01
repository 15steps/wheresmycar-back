const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

require('./app/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(() => console.log(`Server started on port ${port}` ), port);