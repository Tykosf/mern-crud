const employees = require('./employees');
const express = require('express');

const app = express();
employees(app);

module.exports = app;