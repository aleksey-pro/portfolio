'use strict';

var myModule = require('./myModule');
var jTabsModule = require('./jTabs');
var rotateModule = require('./rotate');
var parallaxModule = require('./parallax');
var initMap = require('./map');
var loadSVG = require('./loadSVG');


var loadSVGs = new loadSVG();
var myModuleInstance = new myModule();
var jQueryTabs = new jTabsModule();
var flipLogin = new rotateModule();
var parallax = new parallaxModule();
var myMapsModule = new initMap();

myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'

loadSVGs.init();
jQueryTabs.init();

window.onscroll = function() {
  var wScroll = window.pageYOffset;
  parallax.init(wScroll);
};

//flipLogin.init();
//myMapsModule.init();