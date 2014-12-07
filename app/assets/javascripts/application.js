// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.flexslider
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  $('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    touch: true
  });

  // parallax
  (function(){
    var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;
      window.onscroll = function(){
        [].slice.call(parallax).forEach(function(el,i){
          var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
          el.style.backgroundPosition = elBackgrounPos;
        });
      };
    })
  ();

  $(".menu-btn").click(function(){
    $(".shim").fadeIn();  
    $("nav").show().animate({ left: "0px" }, 500);
    $("body").css("overflow", "hidden");
  });

  $(".shim").click(function(){
    $(this).fadeOut();
    $("nav").animate({ left: "-40%" }, 500);
    $("body").css("overflow", "visible");
  });

  // $(".work-container").hover(function(){
  //   $(this).find(".work-img").fadeOut();
  //   $(this).find(".caption").fadeIn();
  // }, function() {
  //   $(this).find(".caption").fadeOut();
  //   $(this).find(".work-img").fadeIn();
  // });


});

