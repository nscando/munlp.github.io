$(document).ready(function () {
  //    SLIDER

  $('#hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    autoplay: true,
    navText: ['PREV', 'SIG'],
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      600: {},
      1000: {},
    },
  })
})
