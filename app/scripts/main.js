console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

$(function () {

    var $html = $('html');
    var $body = $('body');
  
    /* Photos changing on hover */
    /* $('.js-production-menu').each(function () {
      var $list = $(this);
      var $images = $list.find('.js-production-menu-images');
      $list.find('[data-image-ref]').on('mouseenter', function () {
        var imageRef = $(this).data('image-ref');
        $images.find(`[data-image-item="${imageRef}"]`).addClass('active').siblings('.active').removeClass(
          'active');
      });
    }); */
  
  
    /* Scroll to element on click */
    $('[data-scroll-to]').on('click', function (e) {
      e.preventDefault();
      scrollToElement('#' + $(this).data('scroll-to'));
    });
  
    $('.js-navigation').each(function () {
      var $navigation = $(this);
      var $button = $navigation.find('.js-mobile-menu-button');
      console.log($button)
      $button.on('click', function(e) {
        e.preventDefault();
        $html.toggleClass('html-navigation-mobile-open');
      });
    });
  });