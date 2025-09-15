/*!
 * Freelancer.js - robust smooth scroll + scrollspy
 */

(function($) {
  "use strict";

  $(function() {

    function navHeight() {
      return $('.navbar').outerHeight() || 0;
    }

    // Init scrollspy with navbar offset
    if ($.fn.scrollspy) {
      $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: navHeight() + 1
      });
    }

    // Smooth scrolling for nav links
    $(document).on('click', '.page-scroll a', function(e) {
      var $anchor = $(this);
      var href = $anchor.attr('href');

      if (!href || href.charAt(0) !== '#') return; // only handle in-page anchors
      if (href === '#') { e.preventDefault(); return; }

      var $target = $(href);
      if (!$target.length) return; // not found, let default work

      e.preventDefault();

      var nh = navHeight();
      var targetTop = Math.max(0, Math.round($target.offset().top - nh + 1));

      $('html, body').stop(true, true).animate(
        { scrollTop: targetTop },
        900,
        'easeInOutExpo',
        function() {
          // Update URL hash without jump
          try {
            if (history.replaceState) {
              if (location.hash !== href) history.pushState(null, null, href);
              else history.replaceState(null, null, href);
            } else {
              location.hash = href;
            }
          } catch (err) {}
          if ($.fn.scrollspy) $('body').scrollspy('refresh');
        }
      );
    });

    // Close responsive menu on nav click
    $(document).on('click', '.navbar-collapse ul li a', function() {
      $('.navbar-toggle:visible').click();
    });

    // Optional: navbar shrink on scroll
    $(window).on('scroll', function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("navbar-shrink");
      } else {
        $(".navbar").removeClass("navbar-shrink");
      }
    });

    // Recalculate offsets on resize
    var resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if ($.fn.scrollspy) $('body').scrollspy('refresh');
      }, 150);
    });

  });

})(jQuery);
