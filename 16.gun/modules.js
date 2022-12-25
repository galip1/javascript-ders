import showAlert, { showConfirm } from "../assets/js/modules/message.js";

document.getElementById("btn1").addEventListener("click", () => {
  showAlert("hello js");
});

document.getElementById("btn2").addEventListener("click", () => {
  showAlert("Are you sure?");
});
