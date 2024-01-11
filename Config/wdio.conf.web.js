const path = require('path');
const { config } = require('./wdio.shared.conf');

config.runner = 'local';

config.specs = [
    path.join(process.cwd(), './test/webSuite.js'),    
];

config.capabilities = [
  {
    browserName: 'microsoftedge'
  }
]

exports.config = config;