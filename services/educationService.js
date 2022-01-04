const { educations } = require('../db');

const getAll = () => educations.list();

module.exports = {
    getAll,
};