const { contacts } = require('../db');

const addContact = (params) => contacts.create(params);

module.exports = {
    addContact,
}