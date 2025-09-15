/*!
 * Robust Freelancer.js - smooth scrolling + scrollspy + nav behavior
 */

(function($) {
  "use strict";

  $(function() {

    // helper: current navbar height
    function navHeight() {
      return $('.navbar').outerHeight() || 0;
    }

    // Initialize Scrollspy with a correct offset
    if ($.fn.scrollspy) {
      $('body').scrollspy({
        target: '.navbar',
        offset: navHeight() + 1
      });
    }

    // Smooth scrolling (delegated) - handles nav links reliably
    $(document).on('click', '.page-scroll a', function(e) {
      var $anchor = $(this);
      var href = $anchor.attr('href');

      // ignore empty/invalid anchors
      if (!href || href === '#') {
        e.preventDefault();
        return;
      }

      // let bootstrap handle modal triggers
      if ($anchor.attr('data-toggle') === 'modal' || $anchor.data('toggle') === 'modal') {
        return;
      }

      // special-case #page-top -> scroll to very top
      if (href === '#page-top') {
        e.preventDefault();
        $('html, body').stop(true, true).animate({ scrollTop: 0 }, 900, 'easeInOutExpo', function() {
          try {
            if (history.replaceState) history.replaceState(null, null, '#page-top');
            if ($.fn.scrollspy) $('body').scrollspy('refresh');
          } catch (err) { /* ignore pushState errors */ }
        });
        return;
      }

      var $target = $(href);
      if (!$target.length) {
        // target not on this page — allow default behavior
        return;
      }

      e.preventDefault();

      var nh = navHeight();
      var targetTop = Math.round($target.offset().top - nh + 1);
      var currentTop = $(window).scrollTop();

      // If we're already essentially at the target, just ensure the URL hash is set without jumping
      if (Math.abs(currentTop - targetTop) <= 3) {
        try {
          if (history.replaceState) {
            if (location.hash !== href) history.pushState(null, null, href);
            else history.replaceState(null, null, href);
          } else {
            location.hash = href;
          }
        } catch (err) { /* ignore */ }
        return;
      }

      // animate to the exact position (subtracting navbar height)
      $('html, body').stop(true, true).animate(
        { scrollTop: targetTop },
        900,
        'easeInOutExpo',
        function() {
          // update URL without causing a re-jump
          try {
            if (history.replaceState) {
              if (location.hash !== href) history.pushState(null, null, href);
              else history.replaceState(null, null, href);
            } else {
              location.hash = href;
            }
          } catch (err) { /* ignore pushState errors */ }

          // refresh scrollspy offsets so active class matches
          if ($.fn.scrollspy) {
            $('body').scrollspy('refresh');
          }
        }
      );
    });

    // Close collapsed mobile nav on click (same behavior as before)
    $(document).on('click', '.navbar-collapse ul li a', function() {
      $('.navbar-toggle:visible').click();
    });

    // Optional: shrink navbar class (if you add the CSS for .navbar-shrink)
    $(window).on('scroll', function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("navbar-shrink");
      } else {
        $(".navbar").removeClass("navbar-shrink");
      }
    });

    // Recompute scrollspy offsets on resize (debounced)
    var resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if ($.fn.scrollspy) $('body').scrollspy('refresh');
      }, 150);
    });

  });

})(jQuery);
