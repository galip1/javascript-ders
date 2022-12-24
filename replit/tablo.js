import { students } from "../assets/data/students.js";

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

/******** */
// const btnAdd = document.querySelector("#btnAdd");
// const letter = document.querySelector("#textInput");

// btnAdd.addEventListener("click", () => {
//   add();
// });

// const add = () => {
//   if (letter.value === ``) {
//     alert("Öğrenci adı yazınız");
//   } else {
//     students.push(letter.value);
//     tblStudentsTbody.innerHTML += `<td>${letter.value}</td>`;
//   }
// };
document.getElementById("btnAdd").addEventListener("click", () => {
  const newLi = document.createElement("td");
  newLi.innerHTML = letter.value;
  tblStudentsTbody.appendChild(newLi);
});

/* EVENTS */
