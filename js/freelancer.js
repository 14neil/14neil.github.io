// Smooth scrolling using jQuery Easing
$(function() {
  $('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);
    var target = $($anchor.attr('href'));

    // Only animate if the target exists and it's not already in view
    if (target.length && target.offset().top !== $(window).scrollTop()) {
      $('html, body').stop().animate(
        {
          scrollTop: target.offset().top - 50 // offset for fixed navbar
        },
        1250,
        'easeInOutExpo'
      );
    }

    event.preventDefault();
  });
});

// Activate scrollspy to highlight nav items on scroll
$('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 51
});

// Close the responsive menu when a menu item is clicked
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});
