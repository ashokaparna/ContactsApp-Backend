'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/**
 * Mongoose schema for contacts object.
 */
var ContactsSchema = new Schema({
  /**
   * First name of the person.
   */
  firstname: {
    type: String,
    required: 'Kindly enter the first name of the person'
  },
  /**
   * Last name of the person.
   */
  lastname: {
    type: String,
    required: 'Kindly enter the last name of the person'
  },
  /**
   * Phone number of the person.
   */
  phonenumber: {
    type: String,
    required: 'Kindly enter the phone number of the person'
  },
  /**
   * Email of the person.
   */
  email: {
    type: String
  }

});

module.exports = mongoose.model('Contacts', ContactsSchema);
