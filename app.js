var slackin = require('./dist/index');
var dotenv         = require('dotenv');

// configuration ===========================================

//load environment variables,
//either from .env files (development),
//heroku environment in production, etc...
dotenv.load();

if (!process.env.TOKEN || !process.env.ORG || !process.env.PORT) {
  console.log('Error: Specify TOKEN, ORG, and PORT in environment');
  process.exit(1);
}

slackin.default({
  token: process.env.TOKEN,
  interval: 10000,
  org: process.env.ORG,
  path: '/',
  silent: false
}).listen(process.env.PORT || 80);