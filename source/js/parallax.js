function parallax() {
  
  var bg = document.querySelector('.header__bg'),
    title = document.querySelector('.header__title'),
    svgBG = document.querySelector('.header__svg-title');
  
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
      this.move(title, wScroll, 2);
      this.move(svgBG, wScroll, 30);
    }
  }
  
}

module.exports = parallax;
