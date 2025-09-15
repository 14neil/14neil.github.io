/*!
 * Start Bootstrap - Freelancer Bootstrap Theme
 * Code licensed under the Apache License v2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        var navbarHeight = $('.navbar-fixed-top').outerHeight(); // offset for fixed navbar
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - navbarHeight
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: $('.navbar-fixed-top').outerHeight() + 1 // ensures active link highlights correctly
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    if($('.navbar-toggle:visible').length) {
        $('.navbar-toggle').click();
    }
});
