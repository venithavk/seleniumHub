const path = require('path');
const { config } = require('./wdio.shared.conf');

config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
    path.join(process.cwd(), './test/mobileSuite.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: 'Android', 
    'appium:deviceName':'OPPO CPH2269', 
    'appium:platformVersion':'12', 
    'appium:automationName':'UIAutomator2', 
    'appium:udid': 'PR4DBAHMBEGEJREA', 
    "appium:appPackage": "com.jio.media.ondemand",
    "appium:appActivity": "com.v18.voot.features.home.ui.JVHomeActivity",
    "appium:autoGrantPermissions":true
  }
]


config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './'
}]];

exports.config = config;