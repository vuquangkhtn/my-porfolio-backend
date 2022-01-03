const userService = require('../../services/userService');
module.exports = {
    Query: {
      user: (obj, { id }, context, info) => {
        const user = userService.getById(id);
        if (!user) {
          throw new Error(`Couldn't find user with id ${id}`)
        }
        return user;
      },
      users: () => {
        const users = userService.getAll();
        if (!users) {
          throw new Error(`Couldn't find any users`)
        }
        return users;
      },
    },
  }
  