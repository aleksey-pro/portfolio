'use strict';

// const myModule = require('./myModule');
const jTabsModule = require('./jTabs');
const rotateModule = require('./rotate');
const parallaxModule = require('./parallax');
const initMap = require('./map');
const loadPolyfills = require('./loadPolyfills');
const blur = require('./blur');
const preload = require('./preload');
const slide = require('./slide-menu');
const works = require('./slider');
const blog = require('./blog-menu');
const water = require('../WebGL/index-water');
const arrow = require('./downArrow');
const form = require('./loginForm');
const auth = require('./authForm');


const loadPoly = new loadPolyfills();
// const myModuleInstance = new myModule();
const jQueryTabs = new jTabsModule();
const flipLogin = new rotateModule();
const parallax = new parallaxModule();
const myMapsModule = new initMap();
const blurEffect = new blur();
const slideMenu = new slide();
const preloader = new preload();
const slider = new works();
const blogMenu = new blog();
const WebGL = new water();
const arrowScroll = new arrow();
const formProcess = new form();
const authProcess = new auth();



//myModuleInstance.hello();  'hello!'
//myModuleInstance.goodbye();  'goodbye!'

loadPoly.init();
jQueryTabs.init();
slider.init();
WebGL.init();


arrowScroll.init();
formProcess.init();
authProcess.init();

if(document.body.classList.contains('hasMenu')) {
  blogMenu.init();
}

if(document.body.classList.contains('hasSlideMenu')) {
  slideMenu.init();
}

preloader.init();

if(document.body.classList.contains('hasBlur')) {
  blurEffect.init();
  window.onresize =function(){
    blurEffect.init();
  };
}

window.onscroll = function() {
  let wScroll = window.pageYOffset;
  parallax.init(wScroll);
};

flipLogin.init();

if(document.body.classList.contains('hasMap')) {
  myMapsModule.init();
}



