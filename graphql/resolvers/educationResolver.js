const educationService = require('../../services/educationService');
const userService = require('../../services/userService');

module.exports = {
    Query: {
      educations: () => {
        const educations = educationService.getAll();
        if (!educations) {
          throw new Error(`Couldn't find any education`)
        }
        return educations;
      },
    },
    Education: {
      user: (obj, args, context, info) => {
        const user = userService.getById(obj.userId);
        if (!user) {
          throw new Error(`Couldn't find user with id ${id}`);
        }
        return user;
      },
    }
  }
  