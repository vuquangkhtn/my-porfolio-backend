const { experiences } = require('../db');

const getAll = () => experiences.list();

module.exports = {
    getAll,
}