'use strict';

var myModule = require('./myModule');
var jTabsModule = require('./jTabs');
var rotateModule = require('./rotate');
var initMap = require('./map');
var loadSVG = require('./loadSVG');


var loadSVGs = new loadSVG();
var myModuleInstance = new myModule();
var jQueryTabs = new jTabsModule();
var flipLogin = new rotateModule();
var myMapsModule = new initMap();

myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'

loadSVGs.init();
jQueryTabs.init();
flipLogin.init();
myMapsModule.init();