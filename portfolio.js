$(document).ready(function() {
    $('nav a').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".navbar").addClass("navbar-scrolled");
        } else {
            $(".navbar").removeClass("navbar-scrolled");
        }
    });
});
