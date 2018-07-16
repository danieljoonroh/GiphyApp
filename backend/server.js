const express = require('express');
const app = express();
const dotenv = require('dotenv').load();
const cors = require('cors');


const PORT = 5000;

app.listen(PORT, function () {
    console.log(`Server is running on PORT: ${PORT}`);
})

app.use(cors())

const giphy = require('./routes/giphy');

app.use('/home', giphy);

module.exports = app;