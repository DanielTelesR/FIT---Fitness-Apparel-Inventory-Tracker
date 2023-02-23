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
          form.classList.remove("was-validated");
          form.reset();
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
    passFeedback.innerText = "Password confirmation does not match.";
    return false;
  } else {
    confPassword.setCustomValidity("");
    passFeedback.innerText("Please confirm your password.");
  }
  return true;
}
