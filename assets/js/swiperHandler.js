import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  centeredSlides: true,
  slidesOffsetBefore: -30,
  loop: true,
  grabCursor: true,
  // perspective: true,
  mousewheel: {
    forceToAxis: true,
  },
  effect: "coverflow",
  coverflowEffect: {
    // depth: 100,
    modifier: 2,
    rotate: 0,
    stretch: -24,
    slideShadows: false,
  },

  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      // console.log(index);
      // console.log(className);
      if (index < 3) {
        return `<span class="${className}"></span>`;
      } else {
        return "";
      }
    },
  },
  breakpoints: {
    768: {
      coverflowEffect: {
        stretch: -40,
      },
    },
    992: {
      coverflowEffect: {
        stretch: -48,
      },
    },
    1200: {
      slidesPerView: 1.7,
    },
  },
});
