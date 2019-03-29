'use strict';


//import contacts service.
const contactService = require('../service/contacts-service');
/**
 * Returns a list of contacts in JSON
 *
 * @param {response} {HTTP response object}
 */
exports.list_all_contacts = function (request, response) {
    response.header('Access-Control-Allow-Origin' , '*' );
    const resolve = (contacts) => {
        response.status(200);
        response.json(contacts);
    };
    contactService.contactsList({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};


let mongoose = require('mongoose');
let Contact = mongoose.model('Contacts');

// exports.list_all_contacts = function(req, res) {
//   Contact.find({}, function(err, contact) {
//     res.header('Access-Control-Allow-Origin' , '*' );
//     if (err)
//       res.send(err);
//     res.json(contact);
//   });
// };

exports.get_contact_by_id = function(req, res) {
  Contact.findOne({_id:req.params._id}, function(err, contact) {
    res.header('Access-Control-Allow-Origin' , '*' );
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.create_a_contact = function(req, res) {
  let new_task = new Contact(req.body);
  new_task.save(function(err, contact) {
    res.header('Access-Control-Allow-Origin' , '*' );
    if (err)
      res.send(err);
    res.json(contact);

  });
};

/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};