/**
 * Contact endpoint route definitions.
 */

'use strict';
module.exports = function(app) {
  var contacts = require('../controllers/contacts-controller');

// Contact Routes for get all contacts and create.
  app.route('/contacts')
      .get(contacts.list_all_contacts)
      .post(contacts.create_a_contact);

// Contact Routes for get contact by id.
  app.route('/contacts/:_id')
      .get(contacts.get_contact_by_id);

};
