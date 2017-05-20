function parallax() {
  
  var bg = document.querySelector('.header__bg'),
    title = document.querySelector('.header__title'),
    svgBG = document.querySelector('.svg-title');

  
  return {
    move: function (block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0, '+ strafe +' , 0)';
      
      var style = block.style;
      
      style.transform = transformString;
      style.webkitTransform = transformString;
      
    },
    
    init: function (wScroll) {
      this.move(bg, wScroll, -20);
      this.move(title, wScroll, 5);
      this.move(svgBG, wScroll, -7);
    }
  }
  
}

module.exports = parallax;
