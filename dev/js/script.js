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
    
    // Tambahkan event listener untuk mengatur visibilitas tombol navigasi
    $('#carouselItem').on('slid.bs.carousel', function () {
        var $this = $(this);

        // Cek apakah sedang pada slide pertama atau terakhir
        if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
            $this.find('.carousel-control-prev').hide();
            $this.find('.carousel-control-next').show();
        } else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
            $this.find('.carousel-control-prev').show();
            $this.find('.carousel-control-next').hide();
        } else {
            $this.find('.carousel-control-prev').show();
            $this.find('.carousel-control-next').show();
        }
    });

    // Sembunyikan tombol prev secara default
    $('.carousel-control-prev').hide();

    // Menonaktifkan swipe ke kiri saat di slide pertama
    $('#carouselItem').on('slide.bs.carousel', function (e) {
        if (e.direction == 'right' && $('.carousel-inner .carousel-item:first').hasClass('active')) {
            e.preventDefault();
        }
    });

    // Menonaktifkan swipe ke kanan saat di slide terakhir
    $('#carouselItem').on('slide.bs.carousel', function (e) {
        if (e.direction == 'left' && $('.carousel-inner .carousel-item:last').hasClass('active')) {
            e.preventDefault();
        }
    });
    
    window.addEventListener("resize", myFunction);
    function myFunction() {
        if (window.innerWidth < 992) {
            $("#navLink1").removeAttr("href");
            $("#navLink2").removeAttr("href");
            $("#navLink3").removeAttr("href");
            $("#navLink4").removeAttr("href");
        } else {
            $("#navLink1").attr("href","whiteboard.html");
            $("#navLink2").attr("href","whiteboard.html");
            $("#navLink3").attr("href","whiteboard.html");
            $("#navLink4").attr("href","whiteboard.html");
        }
    }
    
});