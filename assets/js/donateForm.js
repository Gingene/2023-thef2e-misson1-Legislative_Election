const donateForm = document.querySelector("#donateForm");
const btns = document.querySelectorAll("#donateForm button[type='button']");

export default function handleDonateForm() {
  const donateMethods = document.querySelector("#donateMethods");
  const donateThank = document.querySelector("#donateThank");
  const donateThankBtn = document.querySelector("#donateThankBtn");
  const donateObj = { num: 0 };

  btns.forEach((item) => {
    item.addEventListener("click", (e) => {
      removeActive();
      donateObj.num = e.currentTarget.dataset.donate;
      e.currentTarget.classList.add("active");
      if (donateObj.num !== 0) {
        donateForm[4].removeAttribute("disabled");
      }
    });
  });
  donateForm[3].addEventListener("change", (e) => {
    if (Number(e.target.value) === 0) {
      //   console.log(donateObj.num);
      donateForm[4].setAttribute("disabled", true);
      return;
    } else {
      removeActive();
      donateObj.num = e.currentTarget.value;
      console.log(donateObj);
      donateForm[4].removeAttribute("disabled");
    }
  });
  donateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    donateThank.classList.remove("d-none");
    donateMethods.classList.add("d-none");
  });
  donateThankBtn.addEventListener("click", (e) => {
    donateThank.classList.add("d-none");
    donateMethods.classList.remove("d-none");
    removeActive();
  });
}

function removeActive() {
  btns.forEach((item) => {
    item.classList.remove("active");
  });
}
