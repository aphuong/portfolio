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
// = require turbolinks
//= require_tree .

$(document).ready(function(){
 
  $(".home-flexslider").flexslider({
    animation: "slide",
    slideshow: false,
    touch: true,
    useCSS: true,
    directionNav: true
  });


  $(".home").click(function(e){
    e.preventDefault();
    $(".section").hide();
    $("#home").fadeIn("slow");
    $(".home.flexslider").flexslider({
      animation: "slide",
      slideshow: false,
      touch: true
    });
  });

  $(".about").click(function(e){
    e.preventDefault();
    $(".section").hide();
    $("#about").fadeIn("slow");
  });

  $(".about-btn").click(function(e){
    e.preventDefault();
    $("#home").hide();
    $("#about").fadeIn("slow");
  });

  $(".work").click(function(e){
    e.preventDefault();
    $(".section").hide();
    $("#work").fadeIn("slow");
    $(".flexslider").flexslider({
      animation: "slide",
      slideshow: false,
      touch: true
    });
  });

  $(".work-btn").click(function(e){
    e.preventDefault();
    $("#home").hide();
    $("#work").fadeIn("slow");
    $(".flexslider").flexslider({
      animation: "slide",
      slideshow: false,
      touch: true
    });
  });

  $(".blog").click(function(e){
    e.preventDefault();
    $(".section").hide();
    $("#blog").fadeIn("slow");
  });

  $(".blog-btn").click(function(e){
    e.preventDefault();
    $("#home").hide();
    $("#blog").fadeIn("slow");
  });

  $(".contact").click(function(e){
    e.preventDefault();
    $(".section").hide();
    $("#contact").fadeIn("slow");
  });

  $(".contact-btn").click(function(e){
    e.preventDefault();
    $("#home").hide();
    $("#contact").fadeIn("slow");
  });

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

 


});

