import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // 分頁、左右箭頭、滾動條若有使用則必需設定
  // 分頁
  pagination: {
    el: ".swiper-pagination",
  },
  //   autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: false,
  //   },
  slidesPerView: 1.1,
  spaceBetween: 24,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  //   effect: "coverflow",
  perspective: true,
  mousewheel: {
    forceToAxis: true,
  },

  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      console.log(index);
      console.log(className);
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
      // coverflowEffect: {
      //   stretch: -60,
      // },
    },
    1200: {
      slidesPerView: 1.7,
      // coverflowEffect: {
      //   stretch: -100,
      // },
    },
  },
});
