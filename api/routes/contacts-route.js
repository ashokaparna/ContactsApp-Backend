'use strict';
module.exports = function(app) {
  var contacts = require('../controllers/contacts-controller');


  app.route('/contacts')
      .get(contacts.list_all_contacts)
      .post(contacts.create_a_contact);

  app.route('/contacts/:_id')
      .get(contacts.get_contact_by_id);

};
