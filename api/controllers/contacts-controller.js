'use strict';


//import contacts service.
const contactService = require('../service/contacts-service');
/**
 * Returns a list of contacts in JSON
 *
 * @param {request} {HTTP request object}
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

/**
 * Returns a contact object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get_contact_by_id = function (request, response) {
    response.header('Access-Control-Allow-Origin' , '*' );
    const resolve = (contact) => {
        response.status(200);
        response.json(contact);
    };
    contactService.get(request.params._id)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new contact with the request JSON and
 * returns contact JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.create_a_contact = function (request, response) {
    const newContact = Object.assign({}, request.body);
    response.header('Access-Control-Allow-Origin' , '*' );
    const resolve = (sticky) => {
        response.status(200);
        response.json(sticky);
    };
    contactService.save(newContact)
        .then(resolve)
        .catch(renderErrorResponse(response));
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