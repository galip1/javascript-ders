import { students } from "../data/studentOrnek.js";

const tblStudentsTbody = document.querySelector("#tblStudents tbody");
const loadData = () => {
  let strHtml = "";
  students.forEach((student, index) => {
    strHtml += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${student.name}</td>
        <td onchange="showScore()" class="score">${student.point}</td>
       
        <td><button class="btn btn-düzenle "><i class="fa-solid fa-pen"></i></button>
        <button class="btn btn-ok d-none bg-warning"><i class="fa-solid fa-check"></i></button>
        <button class="btn btn-delete"><i class="fa-solid fa-trash"></i></button>
        <button class=" btn btn-cancel d-none"><i class="fa-solid fa-xmark"></i></button>
        </td>
        
      </tr>`;
  });
  tblStudentsTbody.innerHTML = strHtml;
};
loadData();

/* EVENTS */

//1-show delete
document.getElementById("btnShowLowScores").addEventListener("click", () => {
  const lastTDs = tblStudentsTbody.querySelectorAll("tr td.score");
  // console.log(lastTDs);
  lastTDs.forEach((td, index) => {
    if (td.innerText < 50) {
      //td.style.backgroundColor = "red";
      tblStudentsTbody.querySelector(
        `tr:nth-child(${index + 1})`
      ).style.backgroundColor = "red";
    }
  });
});

//2-delete
document.querySelectorAll(".btn-delete").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // olayın parent lara aktarılmasını engeller.

    const trEl = e.target.closest("tr");
    const name = trEl.querySelector("td").innerText;
    console.log(trEl);
    const result = confirm(`Are you sure to delete ${name}?`);
    if (result) {
      setTimeout(() => {
        trEl.remove();
      }, 1000);
    }
  });
});

///3-info
tblStudentsTbody.querySelectorAll("tr").forEach((tr) => {
  tr.addEventListener("click", (e) => {
    e.target.closest("tr").classList.toggle("table-info");
  });
});

//4-point butonu
document.querySelector("#btnPoint").addEventListener("click", () => {
  let point = document.getElementById("textInput").value;

  if (point) {
    let id = students.length + 1;
    students.unshift({ point: point });
    loadData();
  }
});

//5-add butonu

document.querySelector("#btnAdd").addEventListener("click", () => {
  let name = document.getElementById("textInput").value;

  if (name) {
    let id = students.length + 1;
    students.unshift({ name: name });

    loadData();
  }
});

//6-average
let average = students.reduce((x, y) => (x + y.point) / students.length, 0);
document.querySelector("#ortalama").innerHTML = average;

//7-ok ve cancel butonları ekle

document.querySelectorAll(".btn-düzenle").forEach((düzenle) => {
  düzenle.addEventListener("click", (e) => {
    const ok = document.querySelector(".btn-düzenle");
    e.stopPropagation(); // olayın parent lara aktarılmasını engeller.
    ok = e.target.classList.toggle("fa-check");
  });
});
