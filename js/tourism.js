
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

// JavaScript for disabling form submissions if there are invalid fields
              (function() {
                'use strict';
                window.addEventListener('load', function() {
                  // Fetch all the forms we want to apply custom Bootstrap validation styles to
                  var forms = document.getElementsByClassName('needs-validation');
                  // Loop over them and prevent submission
                  var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                      if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                      }
                      form.classList.add('was-validated');
                    }, false);
                  });
                }, false);
              })();