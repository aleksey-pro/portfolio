var $ = require('jquery');

function colorPs() {
    this.colorit = function() {
    setTimeout(function() {
      $('p').css('color', 'red');
    }, 1000);
  };
}

module.exports = colorPs;