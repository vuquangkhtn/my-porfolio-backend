var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

// const db = require('./db');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));