var inputField = document.getElementById("input-field");
var button = document.getElementById("first-button");
var ul = document.getElementById("list");
let x = 0;
function inputLength() {
  return inputField.value.length;
}

function afterClick() {
  if (!inputLength()) {
    window.alert("enter a value first");
  }

  if (inputLength() > 0 && x < 8) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputField.value));
    ul.appendChild(li);
    inputField.value = "";
    x++;
  }

  if (x >= 8) {
    window.alert("Only there many to dos permitted");
  }
}

function afterEnter(event) {
  if (inputLength() > 0 && event.key === "Enter" && x < 8) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputField.value));
    ul.appendChild(li);
    inputField.value = "";
    x++;
  }
  console.log(x);
  if (x >= 8) {
    window.alert("Only there many to dos permitted");
  }
}

function afterClickd() {
  ul.textContent = "";
}

button.addEventListener("click", afterClick);

inputField.addEventListener("keypress", afterEnter);
document.querySelector("#second-button").addEventListener("click", afterClickd);
