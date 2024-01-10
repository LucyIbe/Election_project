const express = require('express');
// const { check, body} = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

//const detailsController = require('..controllers/details');

//const Details = require('..models/details');


const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.get('/home' , authController.getHome);

router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignup);

router.post('/home' , authController.postHome);

//router.get('/upload', detailsController.getupload);

//router.post('/upload', detailsController.postupload);




module.exports = router;