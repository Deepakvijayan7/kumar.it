
$(document).ready(function () {


  var height=$('#top_header').height();
  $(window).scroll(function(){
      if ($(window).scrollTop() >= height) {
      $('.fixed-logo').addClass('fixed-header-class')
      $('.navbar-custom ').addClass('fixed-header-class')
      }
      else {
      $('.fixed-logo').removeClass('fixed-header-class')
      $('.navbar-custom ').removeClass('fixed-header-class');
      }
  });


});

