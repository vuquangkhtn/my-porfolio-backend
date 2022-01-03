const { skills } = require('../db');

const getAll = () => skills.list();

module.exports = {
    getAll,
}