const experienceService = require('../../services/experienceService');
const userService = require('../../services/userService');
const historyService = require('../../services/historyService');

module.exports = {
    Query: {
      experiences: () => {
        const experiences = experienceService.getAll();
        if (!experiences) {
          throw new Error(`Couldn't find any experience`);
        }
        return experiences;
      },
    },
    Experience: {
      user: (obj) => {
        const user = userService.getById(obj.userId);
        if (!user) {
          throw new Error(`Couldn't find user with id ${obj.userId}`);
        }
        return user;
      },
      company: (obj) => {
        const company = historyService.getById(obj.companyId);
        if (!company) {
          throw new Error(`Couldn't find company with id ${obj.companyId}`);
        }
        return company;
      },
    }
  };
  