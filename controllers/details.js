//const mongoose = require('mongoose');

//const { validationResult} = require('express-validator/check');

const Details = require('../models/details');
const User = require('../models/user')

exports.getDetails = (req, res, next) => {
    res.render('details/upload', {
      path: '/upload',
      pageTitle: 'Upload'
    });
};

exports.postDetails = ( req, res, next ) => {
    const name = req.body.name;
    const position = req.body.position;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;

    // console.log(position);

    const details =  new Details( {
      name: name,
      position: position,
      imageUrl: imageUrl,
      description: description
    });
     return details.save()
      .then(result => {
        console.log('Details Created')
        res.redirect('/upload');
      })
      .catch(err => {
        console.log(err);
      })

    res.render('details/upload', {
      pageTitle:'/upload',
      path: 'Upload',
      details: {
        name: name,
        position: position,
        imageUrl: imageUrl,
        description: description 
      }
    });
}
// Fetch data from MongoDB
exports.showDetails  = ( req, res, next ) => {
 Details.find().countDocuments()
  .then(() => {
   return Details.find()
 })
   .then(users => {
     console.log(users);
     res.render('auth/home', {
       users: users,
       pageTitle: 'Contestants',
       path: 'contestants',
     });
   })
   .catch(err => {
     const error = new Error(err);
     error.httpStatusCode = 500;
     return next(error);
   });
}