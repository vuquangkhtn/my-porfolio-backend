const contactService = require('../../services/contactService');
module.exports = {
  Mutation: {
    addContact: (obj, args, context, info) => {
      const newContactId = contactService.addContact(args);
      if (!newContactId) {
        throw new Error(`Couldn't add contact`)
      }
      return newContactId;
    },
  },
  Contact: {     
    user: (obj, args, context, info) => {
      const user = userService.getById(obj.userId);
      if (!user) {
        throw new Error(`Couldn't find user with id ${obj.userId}`);
      }
      return user;
    },
  }
}
