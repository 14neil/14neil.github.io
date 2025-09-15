/*!
 * Freelancer.js - smooth scroll + scrollspy + navbar shrink
 */

(function($) {
  "use strict";

  $(function() {

    // Returns current navbar height
    function navHeight() {
      return $('.navbar').outerHeight() || 0;
    }

    // Initialize scrollspy
    if ($.fn.scrollspy) {
      $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: navHeight() + 1
      });
    }

    // Smooth scrolling for in-page nav links
    $(document).on('click', '.page-scroll a', function(e) {
      var $anchor = $(this);
      var href = $anchor.attr('href');

      // Only handle in-page anchors
      if (!href || href.charAt(0) !== '#') return;
      if (href === '#') { e.preventDefault(); return; }

      var $target = $(href);
      if (!$target.length) return;

      e.preventDefault();

      var nh = navHeight();
      var targetTop = Math.max(0, Math.round($target.offset().top - nh + 1));
      var currentTop = $(window).scrollTop();

      // Only animate if scroll position differs
      if (Math.abs(currentTop - targetTop) > 2) {
        $('html, body').stop(true, true).animate(
          { scrollTop: targetTop },
          900,
          'easeInOutExpo',
          function() {
            // Update URL hash without jump
            try {
              if (history.replaceState) {
                history.replaceState(null, null, href);
              } else {
                location.hash = href;
              }
              if ($.fn.scrollspy) $('body').scrollspy('refresh');
            } catch (err) {}
          }
        );
      }
    });

    // Close responsive menu on nav link click
    $(document).on('click', '.navbar-collapse ul li a', function() {
      $('.navbar-toggle:visible').click();
    });

    // Navbar shrink effect on scroll
    function checkNavbarShrink() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("navbar-shrink");
      } else {
        $(".navbar").removeClass("navbar-shrink");
      }
    }
    $(window).on('scroll', checkNavbarShrink);
    checkNavbarShrink(); // initial check

    // Refresh scrollspy on window resize
    var resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if ($.fn.scrollspy) $('body').scrollspy('refresh');
      }, 150);
    });

  });

})(jQuery);
