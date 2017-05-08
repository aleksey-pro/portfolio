function jTabsModule() {
    
    let $wrapper = $('.admin-wrapper'),
      $allTabs = $wrapper.find('.tabs-content > div'),
      $tabMenu = $wrapper.find('.tabs-nav > div');
    
    function hideOtherTabs() {
      $allTabs.not(':first-of-type').hide();
    }
    
    function addActiveClass() {
      $wrapper.find('.tabs-nav > div:first-child').addClass('active');
    }
    
    function addDataAttr() {
      $tabMenu.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
      });
      $allTabs.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
      })
    }
    
    function setUpListeners() {
      $tabMenu.on('click', function(e) {
        let dataTab = $(this).data('tab');
        $getWrapper = $(this).closest($wrapper);
        $getWrapper.find($tabMenu).removeClass('active');
        $(this).addClass('active');
        $getWrapper.find($allTabs).hide('slow');
        $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show('slow');
        e.preventDefault();
      });
    }
  
  
    this.init = function() {
      hideOtherTabs();
      addActiveClass();
      addDataAttr();
      setUpListeners();
    };
}

module.exports = jTabsModule;