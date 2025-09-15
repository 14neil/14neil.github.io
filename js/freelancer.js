// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    var target = $($anchor.attr('href'));

    // Prevent jumping if target is invalid or already active
    if (target.length && target.offset().top !== $(window).scrollTop()) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 50 // adjust offset for navbar height
      }, 1250, 'easeInOutExpo');
    }

    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 51
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});
