$(document).ready(function(){
    $(".header-slider").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 600,
        margin: 5
    });

    $('.slider-next').click(function() {
        $(".header-slider").trigger('next.owl.carousel');
    });
    $('.slider-prev').click(function() {
        $(".header-slider").trigger('prev.owl.carousel');
    });

    // Fancybox
    Fancybox.bind("[data-fancybox]", {
        Thumbs: false,
        Toolbar: {
            display: {
              left: ["infobar"],
              middle: [
                "zoomIn",
                "zoomOut",
                "toggle1to1",
                "rotateCCW",
                "rotateCW",
                "flipX",
                "flipY",
              ],
              right: ["slideshow", "thumbs", "close"],
            },
          },
      });
  });