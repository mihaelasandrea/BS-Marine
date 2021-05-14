'use strict';
/* Autoclose navbar when click on link */

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

/* Copyright */

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();

// Scroll smooth
document.querySelectorAll('.nav-link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});