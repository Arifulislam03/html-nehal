/*
=====================
JS Table of Conttent 
=====================
01. Preloader
02. Sticky Header 
03. Mobile Menu 
04. AOS Animation
05. Cursor JS
06. Current Date
07. Gallery Popup
08. Live-auction Slider
09. Related Products Slider
10. Card Collection Slider
 11. Counterup
 12. Toggle Search
 13. Load More
 14. Creator Load More
 15. NFT Load More
 16. Explore-v2 Load More
 17. Collection Load More
 18. Categories Load More
 19. Collection Load More
 19. Wallet Load More
 20. Published Load More
 21. Clipboard
 23. Scroll to Top
 24. Modal-popup
 25. Tabs nav
 26. accordion tab
 27. Table 
*/
(function ($) {
    "use strict";
  
  
  
    /*
  ------------------------  
  01. Preloader
  --------------------------
  */
    $(window).on('load', function () {
      var preLoder = $(".preloader");
      preLoder.fadeOut(10);
    });
    /*
    ------------------------  
    02. Sticky Header
    --------------------------
    */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 150) {
        $(".header-bottombar").addClass("header-sticky");
      } else {
        $(".header-bottombar").removeClass("header-sticky");
      }
    });
    /*
    ------------------------  
    03. Mobile Menu 
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
 11. Counterup
  --------------------------
  */
  $('.counter-numbers').counterUp({
    delay: 10,
    time: 1000
  });
  


    
     /*
    ------------------------  
    04. AOS Animation
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
    /*
    ------------------------  
    05. Cursor JS
    --------------------------
    */
    var cursor = $(".cursor-direction");
    $(document).mousemove(function (e) {
      cursor.css({
        top: e.clientY - cursor.height() / 2,
        left: e.clientX - cursor.width() / 2
      });
    });
    $(document).mouseleave(function () {
      cursor.css({
        opacity: "0"
      });
    }).mouseenter(function () {
      cursor.css({
        opacity: "1"
      });
    });
    $(document).mousedown(function () {
      cursor.css({
        transform: "scale(.2)"
      });
    }).mouseup(function () {
      cursor.css({
        transform: "scale(1)"
      });
    });
    $("a,button,input,select,.multiple-select").mouseenter(function () {
      cursor.css({
        transform: "scale(3.2)"
      });
    }).mouseleave(function () {
      cursor.css({
        transform: "scale(1)"
      });
    });
    /*
    ------------------------  
    06. Current Date
    --------------------------
    */
    $('#spanYear').html(new Date().getFullYear());
    /*
    ------------------------  
    07. Portfolio Popup
    --------------------------
    */
    $('.open-popup-link').magnificPopup({
      type: 'inline',
      midClick: true,
      mainClass: 'mfp-fade'
    });
   
  
  
    let tabsContainer = document.querySelector("#tabs");
  
    let tabTogglers = tabsContainer.querySelectorAll("#tabs a");
    
    console.log(tabTogglers);
    
    tabTogglers.forEach(function(toggler) {
      toggler.addEventListener("click", function(e) {
        e.preventDefault();
    
        let tabName = this.getAttribute("href");
    
        let tabContents = document.querySelector("#tab-contents");
    
        for (let i = 0; i < tabContents.children.length; i++) {
          
          tabTogglers[i].parentElement.classList.remove( "add-background");  tabContents.children[i].classList.remove("hidden");
          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }
          tabContents.children[i].classList.add("hidden");
          
        }
        e.target.parentElement.classList.add( "add-background");
      });
    });
    
  
  
  
  
    $('.testimonial-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      fade: true,
      arrows: false,
      // prevArrow: "<span class='slick-left'> <i class='fa fa-angle-left'></i></span>",
      // nextArrow: "<span class='slick-right'><i class='fa fa-angle-right'></i></span>",
      autoplay: false,
      centerMode: false,
      infinite: true,
      focusOnSelect: true,
      centerPadding: '0px',
    });
  
  
    
    function scrolltop() {
      var wind = $(window);
      wind.on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 500) {
          $(".scroll-top").fadeIn("slow");
        } else {
          $(".scroll-top").fadeOut("slow");
        }
      });
      $(".scroll-top").on("click", function () {
        var bodyTop = $("html, body");
        bodyTop.animate({
          scrollTop: 0
        }, 800, "easeOutCubic");
      });
    }
    scrolltop();
  
    


 // Smothlyscroll
 var scrollsmoth = function() {
    $(document).on('click', '.navbar-nav a[href^="#"]', function (event) {
      event.preventDefault();

      var href = $.attr(this, 'href');

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 90
      }, 50, function() {
        // window.location.hash = href;
      }); 
    });
  };
  scrollsmoth();
  
  // SmothlyscrollActive
  var nav_sections = $('section');
  var main_nav = $('.navbar-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".navbar-nav li:first").addClass('active');
      }
    });
  });





  
  }(jQuery));




