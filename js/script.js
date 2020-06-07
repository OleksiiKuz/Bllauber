
//partners slider 
$(document).ready(function () {
   $(".partners__slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               

            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow:3,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 410,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });
});


//partners slider arrow
$('#parents__arrow--prev').on('click', function (event) {
   event.preventDefault();

   $(".partners__slider").slick('slickPrev');
});

$('#parents__arrow--next').on('click', function (event) {
   event.preventDefault();

   $(".partners__slider").slick('slickNext');
}); 



//promo-slider
$(document).ready(function () {
   $(".promo__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: false,
               
            }
         },
      ]
   });
});

//Arrows for promo slider

$('#promo__arrow--prev').on('click', function (event) {
   event.preventDefault();

   $(".promo__slider").slick('slickPrev');
});

$('#promo__arrow--next').on('click', function (event) {
   event.preventDefault();

   $(".promo__slider").slick('slickNext');
}); 



//release slider
$(document).ready(function () {
$(".release__slider-photo").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   centerMode: true,
   variableWidth: true,
   dots: true,
   // asNavFor: ".release__slider-comment"
});
$(".release__slider-comment").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   centerMode: false,
   variableWidth: false,
   
   
});


   // var $status = $('.slider__numbers');
   // var $slickElement = $('.release__slider-comment');

   // $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
   //    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
   //    var i = (currentSlide ? currentSlide : 1) + 1;
   //    $status.text(i + '-' + slick.slideCount);
   // });

});

//Arrows for release slider

$('#release__arrow--prev').on('click', function (event) {
   event.preventDefault();

   $(".release__slider-comment").slick('slickPrev');
});

$('#release__arrow--next').on('click', function (event) {
   event.preventDefault();

   $(".release__slider-comment").slick('slickNext');
}); 





// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.work__tab-wrapper').hide();
$('.work__tab-wrapper:first').show();

// Click function
$('#tabs-nav li').click(function (event) {
   $('#tabs-nav li').removeClass('active');
   $(this).addClass('active');
   $('.work__tab-wrapper').hide();

   var activeTab = $(this).find('a').attr('href');
  
   $(activeTab).fadeIn();
   
   return false;
});


// Show the first tab and hide the rest
$('#tabs-nav2 li:first-child').addClass('active');
$('.work__tab-wrapper2').hide();
$('.work__tab-wrapper2:first').show();

// Click function
$('#tabs-nav2 li').click(function () {
   $('#tabs-nav2 li').removeClass('active');
   $(this).addClass('active');
   $('.work__tab-wrapper2').hide();

   var activeTab = $(this).find('a').attr('href');
   $(activeTab).fadeIn();
   return false;
});


// Show the first tab and hide the rest
$('#tabs-nav3 li:first-child').addClass('active');
$('.work__tab-wrapper3').hide();
$('.work__tab-wrapper3:first').show();

// Click function
$('#tabs-nav3 li').click(function () {
   $('li').removeClass('active');
   $(this).addClass('active');
   $('.work__tab-wrapper3').hide();

   var activeTab = $(this).find('a').attr('href');
   $(activeTab).fadeIn();
   return false;
});


// Burger button and menu

$('.header__burger').on('click', function (e) {
   e.preventDefault;
   $(this).toggleClass('header__burger-active')

});

$('.header__burger').on('click', function (e) {
   e.preventDefault;
   $('.header__menu--mobile').slideToggle();

});

$('.header__burger').on('click', function (e) {
   e.preventDefault;
   $('.header__menu--mobile').toggleClass('header__menu--mobile-active')

});

