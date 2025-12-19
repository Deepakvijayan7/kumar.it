
$(document).ready(function () {




  window.addEventListener('scroll', function () {
    const header = document.querySelector('#top_header');
    const scrollPosition = window.scrollY;
    const hideThreshold = 80; // Adjust this value to hide the element after scrolling 200px

    if (scrollPosition > hideThreshold) {
      $('#top_header').slideUp(450);
      // $('.navbar-custom').addClass('fixed-header-class')
    } else {
      $('#top_header').slideDown(450);
      // $('.navbar-custom').removeClass('fixed-header-class')
    }
  });

});
