// const crypto = require('crypto');

const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',  
  });
}



exports.postLogin = (req,res,next) =>{
  const RegNo = req.body.RegNo;
  const PhoneNo = req.body.PhoneNo;

  User.findOne({ RegNo: RegNo})
    .then(user => {
      res.redirect('/home');
      if (!user) {
        return res.render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          errorMessage: 'Invalid RegNo or PhoneNo'
        });
      }
      })
  .catch(err => {
    console.log(err);
    res.redirect('/login');
  })
}

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup'
    })
}

exports.postSignup = (req, res, next) => {
  const RegNo = req.body.RegNo;
  const PhoneNo = req.body.PhoneNo;

  const user = new User({
    RegNo: RegNo,
    PhoneNo: PhoneNo
  });
  return user.save()
  .then(result => {
    console.log('You have been registered!');
    res.redirect('/login');
  })
  .catch(err => {
    console.log (err)
  });

}

//exports.getHome =
// (req , res, next) => {
 //res.render('auth/home', {
   // path: '/home',
    //pageTitle: 'Home',  
    //});
  
  // Fetch data from MongoDB
exports.gethome  = ( req, res, next ) => {
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

exports.postHome = (req, res, next) => {

}