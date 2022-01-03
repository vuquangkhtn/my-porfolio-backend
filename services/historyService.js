const { histories } = require('../db');

const getAll = () => histories.list();
const getById = (id) => histories.get(id);

module.exports = {
    getAll,
    getById,
}