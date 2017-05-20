var svg = require('svg4everybody');

function loadSVG() {
  function loadSVGs() {
    document.addEventListener("DOMContentLoaded", svg);
  }
  
  this.init = function() {
    loadSVGs()
  };
}

module.exports = loadSVG;
