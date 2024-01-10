const path = require('path');
const hbs = require('hbs');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const User = require('./models/user');
const Details = require('./models/details');

const app = express();


app.set('view engine', 'hbs');
app.set('views', 'views');

const authRoutes = require('./routes/auth');
const detailsRoutes = require('./routes/details');
//const shopRoutes = require('./routes/shop');
app.use(express.json())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(authRoutes);
app.use(detailsRoutes);

// app.listen(3000, () => {
//   console.log('port connected!');
//   console.log(`Voting app is running on http://localhost:${3000}`);
// });
mongoose
  .connect('mongodb+srv://Lucy:2023@cluster0.urseqhr.mongodb.net/election_result')
  .then(result => {
    app.listen(3000);
    console.log('Database Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('database not connected.');
  });



//app.listen(3000, () => {
 // console.log('Server is running on http://localhost:3000');
//});

//Fetch Data from Mongodb

//User.find({})
  //.then((data) => {
   // console.log('Fetched data:', data);
  //})
  //.catch((err) => {
   // console.error('Error fetching data:', err);
 // });