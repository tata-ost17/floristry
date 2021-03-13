$(function () {

   $('.menu__btn').on('click', function () {
      $('.menu__btn').toggleClass('menu__btn--active');
      $('.menu__list').toggleClass('menu__list--active');
   });

   $('.menu__list-link').on('click', function () {
      $('.menu__btn').removeClass('menu__btn--active');
      $('.menu__list').removeClass('menu__list--active');
   });

   $('.services__slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 520,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 960,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               settings: "unslick"
            }
         },
      ]
   });

   $('.page-wedding__slider').slick({
      prevArrow: false,
      nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="next"></button>',
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      //centerMode: true,
      //variableWidth: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 960,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               arrows: false,
            }
         },
        
         {
            breakpoint: 520,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               arrows: false,
            }
         },
      ]
   });




   new WOW().init();


});