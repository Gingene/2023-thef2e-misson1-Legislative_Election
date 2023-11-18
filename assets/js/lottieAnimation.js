import animation from "../lottie/loading.json?url";
import lottie from "lottie-web";

export default function opening() {
  const animationDiv = document.querySelector(".animation");
  const loadingElement = document.querySelector(".loading-animation");
  const bottomNav = document.querySelector(".fixed-bottom");
  animationDiv.classList.remove("d-none");

  const loading = lottie.loadAnimation({
    container: loadingElement, // the dom element that will contain the animation
    renderer: "svg",
    autoplay: true,
    path: animation, // the path to the animation json
    // animationData: animation, // the animation json
  });

  loading.addEventListener("loopComplete", () => {
    loading.destroy();
    animationDiv.classList.add("d-none");
    bottomNav.classList.remove("d-none");
    sessionStorage.setItem("op", "completed");
  });
}
