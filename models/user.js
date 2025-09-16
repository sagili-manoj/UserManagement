const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  address:{
    type:String,
    required: true
  },
  number:{
    type:Number,
    required: true
  },
},
{ timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;

/*schema is the structure and the rule that is define so that data insert into it will be of that types
A database schema is a blueprint or architecture of how our data will look

in mongodb first it came database than collections then documents
where collection is like row in sql and documents fields is like column data in sql

where  Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
and finally exporting that User models which is later used to do CRUD operation*/