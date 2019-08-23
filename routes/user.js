'use strict'

var express = require('express');

//var UserController = require('../controllers/user');

var api = express.Router();

//var md_auth = require('../middlewares/authenticated');

//api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);

api.get('/', async (req, res) => {
    res.sendFile('/public/index.html', { root: '.' });
  });

module.exports = api;