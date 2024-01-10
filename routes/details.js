const express = require('express');
//const { check, body } = require('express-validator/check');

const detailsController = require('../controllers/details');

const Details = require('../models/details');

const router = express.Router();

router.get('/upload', detailsController.getDetails);

router.post('/upload', detailsController.postDetails);

router.get('/show', detailsController.showDetails);

module.exports = router;