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
          window.location.href =
            "/FIT---Fitness-Apparel-Inventory-Tracker/system.html";
        }
        event.preventDefault();
        event.stopPropagation();
      },
      false
    );
  });
})();
