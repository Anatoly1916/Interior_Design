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

      var number = document.querySelector('.number'),
      numberTop = number.getBoundingClientRect().bottom,
      start = +number.innerHTML, end = +number.dataset.max;
  
  window.addEventListener('scroll', function onScroll() {
          if(window.pageYOffset > numberTop - window.innerHeight) {
              this.removeEventListener('scroll', onScroll);
          var interval = setInterval(function() {
                  number.innerHTML = ++start;
              if(start == end) {
                      clearInterval(interval);
              }
          }, 25);
      }
  });
  
  
      var number2 = document.querySelector('.number2'),
      numberTop2 = number2.getBoundingClientRect().bottom,
     start2 = +number2.innerHTML, end2 = +number2.dataset.max;
  
  window.addEventListener('scroll', function onScroll() {
          if(window.pageYOffset > numberTop2 - window.innerHeight) {
              this.removeEventListener('scroll', onScroll);
          var interval = setInterval(function() {
                  number2.innerHTML = ++start2;
              if(start2 == end2) {
                      clearInterval(interval);
              }
          }, 5);
      }
  });
  });




