import { students } from "../assets/data/students.js";

const tblStudentsTbody = document.querySelector("#tblStudents tbody");
const loadData = () => {
  let strHtml = "";
  students.forEach((student, index) => {
    strHtml += `<tr>
    <th scope="row">${index + 1}</th>
    <td>${student.name}</td>
    <td class="score" >${student.point}</td>
    <td><button class="btn btn-da>🗑️</button></td>
      </tr>`;
  });
  tblStudentsTbody.innerHTML = strHtml;
};
loadData();

document.querySelector("#btn-show-low-scores").addEventListener("click", () => {
  const lastTDs = document.querySelectorAll("tr td:last-child");
  lastTDs.forEach((td, index) => {
    if (td.innerText < 50) {
      //td.style.backgroundColor = "red";
      tblStudentsTbody.querySelector(
        `tr:nth-child(${index + 1})`
      ).style.backgroundColor = "red";
    }
  });
});
