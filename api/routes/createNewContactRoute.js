'use strict';
module.exports = function(app) {
  var contacts = require('../controllers/contactsController');

  // todoList Routes
  app.route('/contacts')
      .get(contacts.list_all_contacts)
      .post(contacts.create_a_contact);

  app.route('/contacts/:_id')
      .get(contacts.get_contact_by_id);

  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
