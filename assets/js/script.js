
$(document).ready(function () {

  jQuery(document).ready(function ($) {
    function initOwlCarousel() {
      // Define the mobile breakpoint (e.g., 768px or less)
      var mobileWidth = 576;
      var checkWidth = $(window).width();
      var owl = $('.header-top');

      // Check if the current width is mobile and the carousel hasn't been initialized
      if (checkWidth <= mobileWidth && !owl.hasClass('owl-loaded')) {
        owl.owlCarousel({
          items: 1, // Display 1 item on mobile view
          loop: true,
          margin: 0,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 1700, // Time between slides in milliseconds
          autoplaySpeed: 700,
          // Add other mobile-specific options here
        });
      }
      // Check if the current width is desktop/tablet and the carousel is initialized
      else if (checkWidth > mobileWidth && owl.hasClass('owl-loaded')) {
        owl.owlCarousel('destroy'); // Destroy the carousel on larger screens
      }
    }

    // Initialize on document ready
    initOwlCarousel();

    // Re-initialize or destroy on window resize
    $(window).resize(function () {
      initOwlCarousel();
    });
  });

  var height = $('#top_header').height();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= height) {
      // $('.fixed-logo').addClass('fixed-header-class')
      $('.navbar-custom ').addClass('fixed-header-class')
      $('#navbarTogglerDemo02').removeClass('show')
      $('.navbar-toggler').attr("aria-expanded", "false")
    }
    else {
      // $('.fixed-logo').removeClass('fixed-header-class')
      $('.navbar-custom ').removeClass('fixed-header-class');
    }
  });


});

