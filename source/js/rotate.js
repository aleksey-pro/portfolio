function rotateModule() {
  
  let button = document.querySelector('.welcome__auth');
  
  _rotateIt = function() {
    let container = document.querySelector('.flip-container');
    container.classList.add('active');
    button.style.display = 'none';
  };
  
  _setUpListeners = function() {
    button.addEventListener('click', _rotateIt);
  };
  
  this.init = function() {
    _setUpListeners();
  };
}


module.exports = rotateModule;
