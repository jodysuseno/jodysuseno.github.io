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

    function isMobile() {
        const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
    }
    
    if (isMobile()) {
    console.log("Mobile device detected");
    } else {
    console.log("Desktop device detected");
    }
});