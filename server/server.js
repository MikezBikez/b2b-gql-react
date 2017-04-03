const path = require('path')
const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema');

// Create a new Express application
const app = express();

// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://admin:admin@ds127260.mlab.com:27260/lyrics-db';

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;

// Connect to the mongoDB instance and log a message
// on success or failure
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

// Instruct Express to pass on any request made to the '/graphql' route
// to the GraphQL instance.
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

// Webpack runs as a middleware.  If any request comes in for the root route ('/')
// Webpack will respond with the output of the webpack process: an HTML file and
// a single bundle.js output of all of our client side Javascript

console.log(`Using NODE_ENV environment as: ${process.env.NODE_ENV}`)

if (process.env.NODE_ENV !== 'production') {
  console.log('DEV: using webpack middleware')
  const webpackMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config')
  app.use(webpackMiddleware(webpack(webpackConfig)))
} else {
  console.log('PROD: using built assets')
  app.use(express.static('dist'))
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'dist/index.html'))
  })
}

module.exports = app;
