const skillService = require('../../services/skillService');
const userService = require('../../services/userService');
module.exports = {
  Query: {
    skills: () => {
      const skills = skillService.getAll();
      if (!skills) {
        throw new Error(`Couldn't find any skills`);
      }
      return skills;
    },
  },
  Skill: {     
    user: (obj) => {
      const user = userService.getById(obj.userId);
      if (!user) {
        throw new Error(`Couldn't find user with id ${obj.userId}`);
      }
      return user;
    },
  }
};
