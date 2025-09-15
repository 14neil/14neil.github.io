/*!
 * Freelancer.js - smooth scroll + scrollspy + fixed navbar offset
 */

(function($) {
  "use strict";

  $(function() {
    var $body = $('body');
    var $window = $(window);
    var $navbar = $('.navbar-fixed-top');

    function navHeight() {
      return $navbar.outerHeight() || 0;
    }

    // Initialize scrollspy
    if ($.fn.scrollspy) {
      $body.scrollspy({
        target: '.navbar-fixed-top',
        offset: navHeight() + 1
      });
    }

    // Smooth scrolling for nav links
    $(document).on('click', '.page-scroll a', function(e) {
      var $anchor = $(this);
      var href = $anchor.attr('href');

      if (!href || href.charAt(0) !== '#') return;
      if (href === '#') { e.preventDefault(); return; }

      var $target = $(href);
      if (!$target.length) return;

      e.preventDefault();

      var nh = navHeight();
      var targetTop = Math.max(0, Math.round($target.offset().top - nh + 1));
      var currentTop = $window.scrollTop();

      // Only scroll if target is not current (threshold 2px)
      if (Math.abs(currentTop - targetTop) > 2) {

        // Temporarily disable scrollspy to prevent jumps
        if ($.fn.scrollspy) {
          $body.removeData('bs.scrollspy'); 
          $body.scrollspy({ target: '.navbar-fixed-top', offset: nh + 1 });
        }

        $('html, body').stop(true, true).animate(
          { scrollTop: targetTop },
          900,
          'easeInOutExpo',
          function() {
            // Refresh scrollspy after animation
            if ($.fn.scrollspy) $body.scrollspy('refresh');
          }
        );
      }
    });

    // Close responsive menu on nav link click
    $(document).on('click', '.navbar-collapse ul li a', function() {
      $('.navbar-toggle:visible').click();
    });

    // Navbar shrink effect
    function checkNavbarShrink() {
      if ($navbar.offset().top > 50) $navbar.addClass('navbar-shrink');
      else $navbar.removeClass('navbar-shrink');
    }
    $window.on('scroll', checkNavbarShrink);
    checkNavbarShrink();

    // Recalculate scrollspy on resize
    var resizeTimer;
    $window.on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if ($.fn.scrollspy) $body.scrollspy('refresh');
      }, 150);
    });

  });

})(jQuery);
