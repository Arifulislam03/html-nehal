



(function ($) {
  "use strict";
  /*
------------------------  
Preloader
--------------------------
*/
  $(window).on('load', function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(10);
  });
  /*
  ------------------------  
  Sticky Header 
  --------------------------
  */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 0) {
      $(".header-bottombar").addClass("header-sticky");
    } else {
      $(".header-bottombar").removeClass("header-sticky");
    }
  });

   /*  Active Class*/
   $('.header-cart,.sidebar-close').on('click', function() {
    $("#sidebar-navbar-area").toggleClass('active');
    $("body").toggleClass('sidebar-before-bg');
});
  /*
  ------------------------  
  Mobile Menu 
  --------------------------
  */
  $(".mobile-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".toggle-menu-class").slideToggle();
  });
  $(".toggle").on("click", function () {
    if ($(this).text().includes("-")) {
      $(this).text("+")
    } else {
      $(this).text("-")
    }
    $(this).parent().siblings(".submenu").slideToggle();
  });


  /*
  ------------------------  
  Fitvids Video
  --------------------------
  */
  $(".container-video, .video-container").fitVids();
   /*
  ------------------------  
  Accordion
  --------------------------
  */

 


  /*
  ------------------------  
  AOS Animation
  --------------------------
  */
  AOS.init({
    offset: 50,
    delay: 0,
    duration: 400,
    easing: 'ease-in-out',
    debounceDelay: 20,
    throttleDelay: 50,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
 

  $($('.accordion .accordion-section-title')[0]).addClass('active');
  $($('.accordion .accordion-section-content')[0]).slideDown().addClass('open');

  function close_accordion_section() {
      $('.accordion .accordion-section-title').removeClass('active');
      $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  $('.accordion-section-title').click(function (e) {
      var currentAttrValue = $(this).attr('href');

      if ($(e.target).is('.active')) {
          //close_accordion_section();
      } else {
          close_accordion_section();
          $(this).addClass('active');
          $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
      }

      e.preventDefault();
  });

  
}(jQuery));



















