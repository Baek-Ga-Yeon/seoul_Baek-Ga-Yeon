
/*
$(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 5
                  }
                }
              })
            })
*/


$('.owl-carousel').owlCarosel({
//    animateOut: 'slideOutDown',
//    animateIn: 'flipInX',
//    stagePadding:30,
//    smartSpeen:450
    
    /*
    
    
    items:4,
    margin:30,
    loop: ture,
    
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
});

$('.play').on('click',Function(){
              $('.owl-carousel').trigger('play.owl.autoplay',[1000])
  })
  
$('.stop').on('click',Function(){
              $('.owl-carousel').trigger('play.owl.autoplay')
  })
    
*/
    
var $owl = $('.owl-carousel');

$owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
})

$owl.on('mousewheel', '.owl-stage', function(e) {
    e.prerventDefault();
    
    if (e.deltaY > 0) {
        $owl.trigger('next.owl');
    } else {
        $owl.trigger('prev.owl');
    }
});

