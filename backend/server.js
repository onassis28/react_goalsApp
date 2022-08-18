const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const testing = 2000;

const app = express();

app.listen(port, () => console.log(`Listening on port ${port}`));
