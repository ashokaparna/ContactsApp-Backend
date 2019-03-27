'use strict';


let mongoose = require('mongoose');
let Contact = mongoose.model('Contacts');

exports.list_all_contacts = function(req, res) {
  Contact.find({}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.get_contact_by_id = function(req, res) {
  Contact.findOne({_id:req.params._id}, function(err, contact) {
    res.header('Access-Control-Allow-Origin' , '*' );
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.create_a_contact = function(req, res) {
  var new_task = new Contact(req.body);
  new_task.save(function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);

  });
};

// exports.read_a_task = function(req, res) {
//     Task.findById(req.params.taskId, function(err, task) {
//       if (err)
//         res.send(err);
//       res.json(task);
//     });
//   };
  
  //
  // exports.update_a_task = function(req, res) {
  //   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
  //     if (err)
  //       res.send(err);
  //     res.json(task);
  //   });
  // };

//   exports.delete_a_task = function(req, res) {


//     Task.remove({
//       _id: req.params.taskId
//     }, function(err, task) {
//       if (err)
//         res.send(err);
//       res.json({ message: 'Task successfully deleted' });
//     });
//   };
  