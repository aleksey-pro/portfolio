'use strict';

var myModule = require('./myModule');
var colorPs = require('./colorPs');
var initMap = require('./map')

var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'

var myjQueryInstance = new colorPs();
myjQueryInstance.colorit();

var myMapsModule = new initMap();
myMapsModule.init();
