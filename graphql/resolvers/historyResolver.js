const userService = require('../../services/userService');
const historyService = require('../../services/historyService');
module.exports = {
  Query: {
    histories: () => {
      const histories = historyService.getAll();
      if (!histories) {
        throw new Error(`Couldn't find any history`);
      }
      return histories;
    },
  },
  History: {
    nextTime: (obj) => {
      if (!obj.nextTime) return null;
      const company = historyService.getById(obj.nextTime);
      if (!company) {
        throw new Error(`Couldn't find next company with id ${obj.nextTime}`);
      }
      return company;
    },
    user: (obj) => {
      const user = userService.getById(obj.userId);
      if (!user) {
        throw new Error(`Couldn't find user with id ${obj.userId}`);
      }
      return user;
    },
  }
};
  