import { students } from "../assets/data/students.js";

const letterInput = document.getElementById("textInput");
const btnAdd = document.getElementById("btnAdd");
const point = document.getElementById("btnPoint");
const tblStudentsTbody = document.querySelector("#tblStudents tbody");

const loadData = () => {
  let strHtml = "";
  students.forEach((student, index) => {
    strHtml += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${student.name}</td>
        <td class="score">${student.point}</td>
        <td><button class="btn-degistir btn btn-warning"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-add btn btn-warning d-none"><i class="fa-solid fa-check"></i></button>
        <button class="btn-delete btn btn-danger">🗑️</button>
        </button>
        <button class="btn-carpım btn btn-danger d-none"><i class="fa-solid fa-xmark"></i></button>
        </td>
      </tr>`;
  });
  tblStudentsTbody.innerHTML = strHtml;
};
loadData();

/* EVENTS */
document.getElementById("btnShowLowScores").addEventListener("click", () => {
  const lastTDs = tblStudentsTbody.querySelectorAll("tr td.score");
  console.log(lastTDs);
  lastTDs.forEach((td, index) => {
    if (td.innerText < 50) {
      //td.style.backgroundColor = "red";
      tblStudentsTbody.querySelector(
        `tr:nth-child(${index + 1})`
      ).style.backgroundColor = "red";
    }
  });
});
document.querySelectorAll(".btn-delete").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // olayın parent lara aktarılmasını engeller.
    const trEl = e.target.closest("tr");
    const name = trEl.querySelector("td").innerText;

    const result = confirm(`Are you sure to delete ${name}?`);

    if (result) {
      setTimeout(() => {
        trEl.remove();
      }, 1000);
    }
  });
});
tblStudentsTbody.querySelectorAll("tr").forEach((tr) => {
  tr.addEventListener("click", (e) => {
    e.target.closest("tr").classList.toggle("table-info");
  });
});

document.getElementById("btnAdd").addEventListener("click", () => {
  let index = document.getElementById("index");
  let name = document.getElementById("name");
  let point = document.getElementById("point");

  if (letterInput.value) {
    let id = students.length + 1;
    students.push({ name: name });
    //students.push({ point: point });
    loadData();
  }
});

/* EVENTS */
