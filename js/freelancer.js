/*!
 * Custom Freelancer JS
 * Based on Start Bootstrap - Freelancer
 */

(function($) {
  "use strict";

  // -------------------------------
  // Smooth scrolling with jQuery Easing
  // -------------------------------
  $(document).on('click', '.page-scroll a', function(event) {
    var $anchor = $(this);
    var targetSelector = $anchor.attr('href');
    var $target = $(targetSelector);

    if ($target.length) {
      var navHeight = $('.navbar').outerHeight();

      $('html, body').stop().animate({
        scrollTop: $target.offset().top - navHeight
      }, 1500, 'easeInOutExpo');
    }

    event.preventDefault();
  });

  // -------------------------------
  // Floating label headings for forms
  // -------------------------------
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

  // -------------------------------
  // Activate Scrollspy
  // -------------------------------
  $('body').scrollspy({
    target: '.navbar',
    offset: $('.navbar').outerHeight()
  });

  // -------------------------------
  // Closes the responsive menu on nav item click
  // -------------------------------
  $(document).on('click', '.navbar-collapse ul li a', function() {
    $('.navbar-toggle:visible').click();
  });

  // -------------------------------
  // Shrink navbar on scroll
  // -------------------------------
  $(window).on('scroll', function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

})(jQuery);
