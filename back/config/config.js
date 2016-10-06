var path = require('path')
    , rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    db: 'mongodb://test:test@widmore.mongohq.com:10000/db-name',
    root: rootPath,
    app: {
      name: 'App DEV'
    }
  },
  production: {
    db: 'mongodb://test:test@widmore.mongohq.com:10000/db-name',
    root: rootPath,
    app: {
      name: 'App PROD'
    }
  }
};