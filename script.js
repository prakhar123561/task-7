const swiper = new Swiper('.swiper', {
   
    
  loop: true,
  freeMode: true,
  grabCursor: false,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },
  freeMode: true,
  speed: 2500,
  freeModeMomentum: true,
  watchSlidesProgress: true,
  
  
  
      breakpoints: {
        
        // when window width is >= 480px
        480: {
          slidesPerView: 1.5,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 800px
        800: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 3.5,
          spaceBetween: 60
        },
        // when window width is >= 11200px
        1280: {
          slidesPerView: 3.5,
          spaceBetween: 60
        },
        // when window width is >= 11200px
        1400: {
          slidesPerView: 4.5,
          spaceBetween: 60
        }
      }
  });

  const swiper1 = new Swiper('.sliding-text', {
   
    

    freeMode: true,
    loop: true,
    slidesPerView: 1.65,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
    freeMode: true,
    speed: 10000,
    freeModeMomentum: true,

    
    });

 // Get the button
let mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "flex";
    mybutton.style.justifyContent = "center";
    mybutton.style.alignItems = "center";
  } else {
    mybutton.style.display = "none";
    mybutton.style.justifyContent = "center";
    mybutton.style.alignItems = "center";
  }
}
