// import animation from "./assets/lottie/loading.json?url";
import animation from "../lottie/loading.json?url";
import lottie from "lottie-web/build/player/lottie.min.js";

export default function opening() {
  const loadingElement = document.querySelector(".loading-animation");

  const loading = lottie.loadAnimation({
    container: loadingElement, // the dom element that will contain the animation
    renderer: "svg",
    autoplay: true,
    path: animation, // the path to the animation json
    // animationData: animation, // the animation json
  });

  loading.addEventListener("loopComplete", () => {
    loading.destroy();
    loadingElement.style.display = "none";
  });
}
