'use strict';


var myModule = require('./myModule');
var jTabsModule = require('./jTabs');
var initMap = require('./map')

var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'

var jQueryTabs = new jTabsModule();
jQueryTabs.init();

var myMapsModule = new initMap();
myMapsModule.init();
