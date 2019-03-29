/**
 * Service for contacts operations.
 */

'use strict';
let mongoose = require('mongoose');
let Contact = mongoose.model('Contacts');

/**
 * Returns an all contacts.
 *
 */
exports.contactsList = function() {
    const promise = Contact.find().exec();
    return promise;
}

/**
 * Saves and returns the new contact.
 *
 * @param {Object} contact {Contact object}
 */
exports.save = function (contact) {
    const newContact = new Contact(contact);
    const promise = newContact.save();
    return promise;
};

/**
 * Returns the contact object matching the id.
 *
 * @param {string} contactId {Id of the  contact object}
 */
exports.get = function (contactId) {
    const promise = Sticky.findById(contactId).exec();
    return promise
};
