function blogModule() {
  
  var label = $('.tail');
  var aside = $('.blog-nav');
  var content = $('.articles');
  
  function _push() {
    content.toggleClass('articles--collapsed');
    aside.toggleClass('blog-nav--opened');
  }
  
  function _stickyMenu() {
    var navPos, scrolled;
    navPos = aside.offset().top;
    
    $(window).scroll(function(){
      scrolled = $(window).scrollTop();
      if( scrolled >= navPos) {
        aside.addClass('blog-nav--fixed');
      } else if (scrolled < navPos){
        aside.removeClass('blog-nav--fixed');
      }
    })
  }
  
  
  function init() {
    _stickyMenu();
    label.on('click', function(e) {
      e.preventDefault();
      _push();
    });
    $(window).resize(function() {
      if (  $(window).width() > 768 ) {
        aside.removeClass('blog-nav--opened');
      }
    });
  }

  return {
    init: init
  }
}

module.exports = blogModule;
