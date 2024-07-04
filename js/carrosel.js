jQuery(document).ready(function() {
     var owl = jQuery('#carrosel .owl-carousel');
     owl.owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          margin: 10,
          responsiveClass: true,
          responsive: {
               0: { items: 1, nav: true},
               500: { items: 2, nav: false},
               600: { items: 3, nav: false},
               1000: { items: 5, nav: true}
          }
     });

     jQuery('#carrosel .play').on('click',function(){
          owl.trigger('play.owl.autoplay',[5000]);
          jQuery('#carrosel .play').addClass("esse");
          jQuery('#carrosel .stop').removeClass("esse");
     });

     jQuery('#carrosel .stop').on('click',function(){
          owl.trigger('stop.owl.autoplay');
          jQuery('#carrosel .play').removeClass("esse");
          jQuery('#carrosel .stop').addClass("esse");
     })
});
