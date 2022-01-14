require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const bodyParser = require('body-parser');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');
const emailService = require('./services/emailService');

const jsonParser = bodyParser.json();

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
}));
app.get('/download-resume', function (req, res) {
  const file = `${__dirname}/data/CV_NguyenVuQuang.pdf`;
  res.download(file, 'CV_NguyenVuQuang.pdf');
});
app.post('/contact', jsonParser, function (req, res) {
  const { name, email, description } = req.body;
  const owner = {
    email: process.env.SYSTEM_EMAIL_USERNAME,
    password: process.env.SYSTEM_EMAIL_PASSWORD
  };

  emailService.sendThankEmail(owner, { name, email })
    .then(() => {
      emailService.sendNotificationEmail({ name, email, description });
      return res.status(200).send({ message: "Thank you for getting in touch!" });
    }, () => {
      return res.status(400).send({ message: "Contact failed. Please use the telephone number instead" });
    });

});
app.listen(4000, () => console.log('Now browse to localhost:4000'));