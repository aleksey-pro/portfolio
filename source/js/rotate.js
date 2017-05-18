function rotateModule() {
  
  let button = document.querySelector('.welcome__auth');
  
  var _rotateIt = function() {
    let container = document.querySelector('.flip-container');
    container.classList.add('active');
    button.style.display = 'none';
  };
  
  var _setUpListeners = function() {
    if(button) {
      button.addEventListener('click', _rotateIt);
    }
  };
  
  this.init = function() {
    _setUpListeners();
  };
}


module.exports = rotateModule;
