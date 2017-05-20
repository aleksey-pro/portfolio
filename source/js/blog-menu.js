function blogModule() {
  
  var label = $('.tail');
  var aside = $('.blog-nav');
  var link = $('.blog-items__link');
  
  function _push() {
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
  
  function _toSection(e) {
    e.preventDefault();
    var $article = $('.article');
    var source = $(this).attr('href');
    window.location.hash = source;

    var articlePOs = $article.offset().top;
    var scrolled = $(window).scrollTop();
    
    
    // console.log(articlePOs);
    // var reqPos = scrollTo.offset().top;
    //
    // $('body, html').animate({scrollTop: reqPos}, 500);
  }
  
  
  function init() {
    _stickyMenu();
    link.on('click', _toSection);
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
