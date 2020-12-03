
AOS.init({
  startEvent: 'load',
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "#839DC1";
    document.getElementById("navbar").style.boxShadow = "2px 2px 5px #555";
  } else {
    document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.4)";
    document.getElementById("navbar").style.boxShadow = "0px 0px 0px #fff";
  }
};

var carouselContainer = $('.carousel');

$('.carousel').carousel({
    pause: "false"
});
