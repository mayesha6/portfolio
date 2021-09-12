jQuery(document).ready(function($) {
//typed section
  var typed = new Typed('.bannerTxt', {
    strings: ["Designer", "Developer","Photographer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
  });

//counter section  
    $('.counti').counterUp({
        delay: 10,
        time: 1000
    });
//progressbar section
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
    $('#bar5').barfiller();
    $('#bar6').barfiller();

//mixitup section
  var mixer = mixitup('.portMix');

//owlCarouse section
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:50,
  nav:false,
  dots:true,
  autoplay:true,
  autoplayTimeout:10000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      992:{
          items:3
      }
  }
})
});
