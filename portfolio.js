$(document).ready(function() {
    $('nav a').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

<script>
    function initMap() {
        var mapOptions = {
            center: {lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE}, // Replace with your desired coordinates
            zoom: 10 // Adjust zoom level as needed
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
</script>


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".navbar").addClass("navbar-scrolled");
        } else {
            $(".navbar").removeClass("navbar-scrolled");
        }
    });
});
