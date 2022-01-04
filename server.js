var express = require('express');
var cors = require('cors');
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
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
}));
app.get('/download-resume', function(req, res){
  const file = `${__dirname}/data/CV_NguyenVuQuang.pdf`;
  res.download(file, 'CV_NguyenVuQuang.pdf');
});
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));