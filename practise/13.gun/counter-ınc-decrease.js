let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText.toLowerCase() == "decrease") count--;
    else if (e.target.innerText.toLowerCase() == "increase") count++;
    else count = 0;
    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else value.style.color = "black";
    value.innerHTML = count;
  });
});
