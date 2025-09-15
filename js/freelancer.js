/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
  "use strict";

  // -------------------------------
  // Smooth scrolling using jQuery Easing
  // -------------------------------
  $(function() {
    $('.page-scroll a').bind('click', function(event) {
      var $anchor = $(this);

      // Adjust for fixed navbar height (70px works well for your site)
      var navOffset = 70;

      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - navOffset
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    });
  });

  // -------------------------------
  // Floating label headings for forms
  // (Safe to keep even if you don’t use the contact form)
  // -------------------------------
  $(function() {
    $("body")
      .on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      })
      .on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      })
      .on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
  });

  // -------------------------------
  // Activate Scrollspy to highlight nav items on scroll
  // -------------------------------
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 70 // same value as navOffset above
  });

  // -------------------------------
  // Closes the responsive menu on nav item click
  // -------------------------------
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

})(jQuery);
