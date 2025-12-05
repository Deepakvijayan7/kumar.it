
     $( document ).ready(function() {


  window.addEventListener('scroll', function() {
  const header = document.querySelector('#top_header');
  const scrollPosition = window.scrollY;
  const hideThreshold = 80; // Adjust this value to hide the element after scrolling 200px

  if (scrollPosition > hideThreshold) {
   $('#top_header').slideUp(450);
  } else {
   $('#top_header').slideDown(450);
  }
});


  window.onscroll = function () { myFunction() };

  function myFunction() {
    var testDivFromTop = document.getElementById("div").offsetTop + 50;
    var pageHeight = window.innerHeight;
    if (document.body.scrollTop > testDivFromTop - pageHeight || document.documentElement.scrollTop > testDivFromTop - pageHeight) {

      $('#counter').addClass('counter');
      $('#counter1').addClass('counter');
      $('#counter2').addClass('counter');
    }
  }



});
  