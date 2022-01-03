const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   educations:store.collection('educations'),
   experiences:store.collection('experiences'),
   histories:store.collection('histories'),
   skills:store.collection('skills'),
   users:store.collection('users'),
   contacts:store.collection('contacts'),
};