'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactsSchema = new Schema({
  firstname: {
    type: String,
    required: 'Kindly enter the first name of the person'
  },
  lastname: {
    type: String,
    required: 'Kindly enter the last name of the person'
  },
  phonenumber: {
    type: String,
    required: 'Kindly enter the phone number of the person'
  },
  email: {
    type: String,
    required: 'Kindly enter the email of the person'
  }

});

module.exports = mongoose.model('Contacts', ContactsSchema);
