const userService = require('../../services/userService');
const contactService = require('../../services/contactService');

module.exports = {
  Mutation: {
    addContact: (obj, args) => {
      const newContactId = contactService.addContact(args);
      if (!newContactId) {
        throw new Error(`Couldn't add contact`);
      }
      return newContactId;
    },
  },
  Contact: {     
    user: (obj) => {
      const user = userService.getById(obj.userId);
      if (!user) {
        throw new Error(`Couldn't find user with id ${obj.userId}`);
      }
      return user;
    },
  }
};
