var express = require('express');

var app = express();

app.use('/api/patients', patientsRoutes);

app.get('/api', (req, res) => res.send('Welcome to the e-Clinic!'));

module.exports = app;