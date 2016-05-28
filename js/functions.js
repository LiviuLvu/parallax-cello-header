jQuery(document).ready(function($) {
   $(window).scroll(function() {
      var wScroll = $(this).scrollTop();
      $('.logo').css({
         'transform': 'translate(0px,' + wScroll / 2 + '%)'
      });
      $('.fore-cello').css({
         'transform': 'translateY(-' + wScroll / 30 + '%)'
      });
   });
});
