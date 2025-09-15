/*!
 * Custom Freelancer.js
 * Handles smooth scrolling, navbar collapse, and Scrollspy
 */

(function($) {
  "use strict";

  // -------------------------
  // Smooth scrolling with jQuery Easing
  // -------------------------
  $(document).on("click", ".page-scroll a", function(event) {
    var $anchor = $(this);
    var targetSelector = $anchor.attr("href");

    // If the link is "#page-top", scroll to very top
    if (targetSelector === "#page-top" || targetSelector === "#") {
      $("html, body").stop().animate(
        { scrollTop: 0 },
        1500,
        "easeInOutExpo"
      );
      event.preventDefault();
      return;
    }

    // Scroll to the target section with offset for navbar
    var $target = $(targetSelector);
    if ($target.length) {
      var navHeight = $(".navbar").outerHeight();

      $("html, body").stop().animate(
        {
          scrollTop: $target.offset().top - navHeight
        },
        1500,
        "easeInOutExpo"
      );
      event.preventDefault();
    }
  });

  // -------------------------
  // Highlight the top nav as scrolling occurs (Scrollspy)
  // -------------------------
  $("body").scrollspy({
    target: ".navbar",
    offset: $(".navbar").outerHeight() + 1
  });

  // -------------------------
  // Closes the Responsive Menu on Menu Item Click
  // -------------------------
  $(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggle:visible").click();
  });

})(jQuery);
