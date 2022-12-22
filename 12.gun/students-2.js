import { students } from "../assets/data/students.js";

const tblStudentsTbody = document.querySelector("#tblStudents tbody");
const loadData = () => {
  let strHtml = "";
  students.forEach((student, index) => {
    strHtml += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${student.name}</td>
        <td class="score">${student.point}</td>
        <td><button class="btn-delete btn btn-danger">🗑️</button></td>
      </tr>`;
  });
  ///student point e bı class atayıp
  //asagıyada clss yazılır---tr td.score--
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

//.btn-delete quseAll sayesınde butun butonları getirir ama diiz seklınde.
//herbiirne ulaşmak için forEach kulanılır ve her birine clik ozelliği kazandırılır
document.querySelectorAll(".btn-delete").forEach((button) => {
  button.addEventListener("click", (e) => {
    //sil e tıklandıgnda name lere ulasmamız lazım.
    // closest tr ye ulas sonra td. ismede innertext ten ulasılır
    const name = e.target.closest("tr").querySelector("td").innerText;

    //result a gore bir işlem yaparız
    const result = confirm(`Are you sure to delete ${name}?`);
    if (result) {
      //silme işlemi
    }
  });
});
/* EVENTS */
