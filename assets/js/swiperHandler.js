import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  // perspective: true,
  // mousewheel: {
  //   forceToAxis: true,
  // },
  effect: "coverflow",
  coverflowEffect: {
    depth: 200,
    rotate: 0,
    stretch: -20,
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
      slidesPerView: 1.3,
      coverflowEffect: {
        stretch: -60,
      },
    },
    1200: {
      slidesPerView: 1.7,
      coverflowEffect: {
        stretch: -60,
      },
    },
  },
});
