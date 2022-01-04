const { users } = require('../db');

const getAll = () => users.list();
const getById = (id) => users.get(id);

module.exports = {
    getAll,
    getById,
};