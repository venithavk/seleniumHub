const path = require('path');
const { config } = require('./wdio.shared.conf');

config.maxInstances = 1,

config.capabilities= [
 
   {
        browserName: 'chrome',
        hostname : '192.168.52.106',
        port:21095,
        path : '/wd/hub',
        specs: [path.join(process.cwd(), './test/webSuite.js')],

  }, {

        platformName: 'Android', // or "iOS"
        'appium:deviceName':'OPPO CPH2269', // or "iPhone Simulator"
        'appium:platformVersion':'12', // or "16.2" (for running iOS v16)
        'appium:automationName':'UIAutomator2', // or "XCUITest"
        'appium:udid': 'PR4DBAHMBEGEJREA', //
        "appium:appPackage": "com.jio.media.ondemand",
        "appium:appActivity": "com.v18.voot.features.home.ui.JVHomeActivity",
        "appium:autoGrantPermissions":true,
        hostname : '0.0.0.0',
        port: 4725,
        specs:[ path.join(process.cwd(), './test/mobileSuite.js')],
       
      
    }
  //   ,  {
        
  //       platformName: "Android",
  //       "appium:deviceName": "KD-43X8000G",
  //       "appium:automationName": "UiAutomator2",
  //       "appium:udid": "192.168.53.49:5555",
  //       "appium:platformVersion": "9",
  //       "appium:appPackage": "com.jio.media.stb.ondemand",
  //       "appium:appActivity": "com.v18.voot.ui.JVHomeActivity",
  //       hostname : '0.0.0.0',
  //       port: 4726,
  //       specs:[ path.join(process.cwd(), './test/androidFireSuite.js')],
       
      
  //   }
  //   , {
       
  //       platformName: "Android",
  //       "appium:deviceName": "KD-43X8000G",
  //       "appium:automationName": "UiAutomator2",
  //       "appium:udid": "192.168.53.49:5555",
  //       "appium:platformVersion": "9",
  //       "appium:appPackage": "com.jio.media.stb.ondemand",
  //       "appium:appActivity": "com.v18.voot.ui.JVHomeActivity",
  //       hostname : '0.0.0.0',
  //       port: 4727,
  //       path : '/wd/hub',
  //       specs:[ path.join(process.cwd(), './test/androidFireSuite.js')],
       
  //  }
],

config.services = [['appium', {
    args: {
      address: 'localhost',
      port: 4723,
      path : 'wd/hub'
    },
    logPath: './'
  }]];

config.baseUrl= 'https://www.jiocinema.com/'

exports.config = config;

