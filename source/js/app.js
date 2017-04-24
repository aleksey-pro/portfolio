'use strict';

var myModule = require('./myModule');
var colorPs = require('./colorPs');

var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'

var myScriptInstance = new colorPs();
myScriptInstance.colorit();
