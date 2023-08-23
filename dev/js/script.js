$(document).ready(function () {
    $(".navAllMenu").hover(function () {
        blurOverlay.style.display = 'block';
        blurOverlay.style.opacity = '1';
    }, function () {
        blurOverlay.style.opacity = '0';
        blurOverlay.style.display = 'none';
    });

    $("#navbarNavHover").hover(function () {
        document.getElementById('.carousel-hover').style.display = 'none';
    }, function () {
        document.getElementById('.carousel-hover').style.display = 'block';
    });
});