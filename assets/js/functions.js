
$(document).ready(function() {

  var heading_height = $(".heading.fixed-top").innerHeight(); //get width automaticly
  var footer_height = $("footer.fixed-bottom").innerHeight(); //get width automaticly

  $('#main-panel').css('padding-top', heading_height);
  $('#main-panel').css('padding-bottom', footer_height + 40);

  // $('.js-table-scroller').css('max-height', 100vh - heading_height;

});











$(document).ready(function(){

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.heading').innerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.heading').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.heading').removeClass('nav-up').addClass('nav-down');
          }
      }

      lastScrollTop = st;
  }
});




