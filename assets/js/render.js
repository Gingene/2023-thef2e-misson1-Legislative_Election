import opening from "./lottieAnimation.js";
import "./swiperHandler.js";
import renderEventModals from "./eventModals";
import renderIssueModals from "./issueModals";

AOS.init();
if (!sessionStorage.getItem("op")) {
  const bottomNav = document.querySelector(".fixed-bottom");
  bottomNav.classList.add("d-none");
  opening();
}

renderEventModals();
renderIssueModals();
