const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

app.listen(process.env.poet || 4000, function() {
    console.log('server run')
});