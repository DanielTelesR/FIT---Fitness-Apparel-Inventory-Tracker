// Bootstrap Form Validation

(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          createAccount();
          form.classList.remove("was-validated");
          window.location.href =
            "/FIT---Fitness-Apparel-Inventory-Tracker/login.html";
        }
        event.preventDefault();
        event.stopPropagation();
      },
      false
    );
  });
})();

/* Added event listeners to "password" and "confirm password" fields to implement custom validation for ensuring the password and its confirmation match.*/

const password = document.getElementById("password");
const confPassword = document.getElementById("confirm-password");
const passFeedback = document.getElementById("password-feedback");

confPassword.addEventListener("input", validatePassword);

function validatePassword() {
  if (password.value != confPassword.value) {
    confPassword.setCustomValidity("Password confirmation does not match.");
    passFeedback.innerText("Password confirmation does not match.");
    return false;
  } else {
    confPassword.setCustomValidity("");
    passFeedback.innerText("Please confirm your password.");
  }
  return true;
}

/* Added implementation for creating new accounts */

const btn_CreateAccount = document.getElementById("btn_signup");

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("db_Accounts")) ?? [];
}

function setLocalStorage(db_Accounts) {
  return localStorage.setItem("db_Accounts", JSON.stringify(db_Accounts));
}

function createAccount() {
  const account = {
    coName: document.getElementById("co-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    country: document.getElementById("country").value,
    username: document.getElementById("username").value,
    key: document.getElementById("password").value,
  };

  const db_Accounts = getLocalStorage();
  db_Accounts.push(account);
  setLocalStorage(db_Accounts);
}
