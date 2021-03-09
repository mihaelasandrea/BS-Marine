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