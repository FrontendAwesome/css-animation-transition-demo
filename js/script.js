//
//  Add a class to the .css-transition-2 div when you scroll to it
//

$(document).ready(function() {
  $(window).scroll(function(){  
    if($(window).scrollTop() + $(window).height() >= $('.css-transition-2').offset().top) {
      $( ".css-transition-2" ).addClass( "js-scroll-down" );
    };
    if($(window).scrollTop() + $(window).height() < $('.css-transition-2').offset().top) {
      $( ".css-transition-2" ).removeClass( "js-scroll-down" );
    };
  });
});