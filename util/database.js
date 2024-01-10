const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Lucy:<password>@cluster0.urseqhr.mongodb.net/Election_Result')

.then(() =>{
  console.log('mongodb connected');
})
.catch(() =>{
  console.log('failed to connect');
})

module.exports = collection