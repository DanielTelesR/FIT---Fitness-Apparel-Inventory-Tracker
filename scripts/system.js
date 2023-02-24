// Bootstrap form validation

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
          add();
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

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("db_clothes")) ?? [];
}

function setLocalStorage(db_clothes) {
  localStorage.setItem("db_clothes", JSON.stringify(db_clothes));
}

function cleanTable() {
  var element = document.querySelector("#table>tbody");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function updateTable() {
  // Adaptação da função atualizarTabela (5 pontos)
  cleanTable();
  const db_clothes = getLocalStorage();
  let index = 0;
  for (clothing of db_clothes) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${clothing.product}</td>
        <td>${clothing.code}</td>
        <td>${clothing.size}</td>
        <td>${clothing.color}</td>
        <td>${clothing.age}</td>
        <td>${clothing.gender}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="exclude(${index})">Remove</button>
        </td>
    `;
    document.querySelector("#table>tbody").appendChild(newRow);
    index++;
  }
}

function add() {
  // Adaptação da função inserir (10 pontos)
  const clothing = {
    product: document.getElementById("product").value,
    code: document.getElementById("code").value,
    size: document.getElementById("size").value,
    color: document.getElementById("color").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
  };
  const db_clothes = getLocalStorage();
  db_clothes.push(clothing);
  setLocalStorage(db_clothes);
  updateTable();
}

function exclude(index) {
  // Adaptação da função excluir (5 pontos)
  const db_clothes = getLocalStorage();
  db_clothes.splice(index, 1);
  setLocalStorage(db_clothes);
  updateTable();
}

function codeValidation() {
  // Adaptação da função validar (10 pontos)
  const db_clothes = getLocalStorage();
  for (clothing of db_clothes) {
    if (code.value == clothing.code) {
      code.setCustomValidity("This code has already been registered!");
      codeFeedback.innerText = "This code has already been registered!";
      return false;
    } else {
      code.setCustomValidity("");
      codeFeedback.innerText =
        "Enter a valid code. Each code contains one uppercase letter followed by two numbers.";
    }
  }
  return true;
}

updateTable();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const code = document.getElementById("code");
const codeFeedback = document.getElementById("codeFeedback");
code.addEventListener("input", codeValidation);
