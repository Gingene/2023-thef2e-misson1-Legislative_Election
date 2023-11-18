const userForm = document.querySelector("#userForm");

let userObj = {};

export default function handleUserForm() {
  //   console.dir(userForm);
  const userMethods = document.querySelector("#userMethods");
  const userThank = document.querySelector("#userThank");
  const userThankBtn = document.querySelector("#userThankBtn");

  const inputs = document.querySelectorAll(
    "#userForm input",
    "#userForm textarea"
  );
  const textarea = document.querySelector("#userForm textarea");

  inputs.forEach((item) => {
    inputEvent(item);
  });
  inputEvent(textarea);

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let prop in userObj) {
      if (userObj[prop] === "") {
        return;
      }
    }

    userMethods.classList.add("d-none");
    userThank.classList.remove("d-none");
    userThankBtn.addEventListener("click", () => {
      userMethods.classList.remove("d-none");
      userThank.classList.add("d-none");
    });
    e.target.reset();
  });
}

function inputEvent(input) {
  input.addEventListener("change", (e) => {
    if (e.target.id === "useremail") {
      const regex = /(\w+)\@([a-zA-Z]+[mail]?)\.([a-zA-Z]{2,6})/g;
      if (!regex.test(e.target.value)) {
        e.target.focus();
        return;
      }
    }
    if (e.target.id === "userphone") {
      const regex = /^09[0-9]{8}/g;
      if (!regex.test(e.target.value)) {
        e.target.focus();
        return;
      }
    }
    if (e.target.value.trim() === "") {
      e.target.focus();
      return;
    } else {
      userObj[e.target.id] = e.target.value;
      const userInfo = Object.keys(userObj);
      if (userInfo.length === 4) {
        userForm[4].removeAttribute("disabled");
      }
    }
  });
}
