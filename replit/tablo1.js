const students = [
  { id: 1, name: "Ayşe", point: 80 },
  { id: 2, name: "Veli", point: 32 },
  { id: 3, name: "Fatma", point: 56 },
  { id: 4, name: "Ahmet", point: 76 },
];

//const name = document.getElementById("textInput");
const btnAdd = document.getElementById("btnAdd");
const point = document.getElementById("btnPoint");
const tblStudentsTbody = document.querySelector("#tblStudents tbody");
const tblStudents = document.querySelector("#tblStudents");

const displayTableData = () => {
  let html = ` <table border="1|1" class="table"`;

  setTimeout(() => {
    html += ` <tr>`;
    html += ` <th>SNo.</th>`;
    // html + ` <th>id</th>`;
    html += ` <th>Name</th>`;
    html += ` <th>Point</th>`;

    html += ` </tr>`;

    for (let i = 0; i < students.length; i++) {
      let sno = i + 1;
      html += ` <tr>`;
      html += ` <th scope="row">${sno}</th>`;
      html += ` <td>${students[i].name}</td>`;
      html += ` <td class="point">${students[i].point}</td>`;
      html += `  <td><button class="btn-degistir btn btn-warning"><i class="fa-solid fa-pen"></i></button>

      <button class="btn-add btn btn-warning d-none"><i class="fa-solid fa-check"></i></button>

      <button class="btn-delete btn btn-danger"><i class="fa-solid fa-trash"></i></button>
     
      <button class="btn-carpım btn btn-danger d-none"><i class="fa-solid fa-xmark"></i></button>
     
      </td>
      `;
      html += ` </tr>`;
    }

    html += ` <tfoot>
    <tr>
      <td colspan="2">Average</td>
      <td colspan="2"></td>
    </tr>
  </tfoot>`;
    tblStudentsTbody.innerHTML = html;
  }, 200);
};
displayTableData();

////events
//1-add butonu

document.querySelector("#btnAdd").addEventListener("click", () => {
  let name = document.getElementById("textInput").value;

  if (name) {
    let id = students.length + 1;
    students.unshift({ name: name });

    displayTableData();
    name.value = "";
  }
});

//2-point butonu
document.querySelector("#btnPoint").addEventListener("click", () => {
  let point = document.getElementById("textInput").value;

  if (point) {
    let id = students.length + 1;
    students.unshift({ point: point });
    displayTableData();
  }
});

///3-show delete butonu
document.getElementById("btnShowLowScores").addEventListener("click", () => {
  const lastTDs = tblStudentsTbody.querySelectorAll("tr td.point");
  //console.log(lastTDs);

  lastTDs.forEach((td, index) => {
    if (td.innerText < 50) {
      //  td.style.backgroundColor = "red";
      tblStudentsTbody.querySelector(
        `tr:nth-child(${index + 1})`
      ).style.backgroundColor = "red";
    }
  });
});

///4-delete
document.querySelectorAll(".btn-delete").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // olayın parent lara aktarılmasını engeller.
    const trEl = e.target.closest("tbody");
    const name = trEl.querySelector("td").innerText;

    const result = confirm(`Are you sure to delete ${name}?`);

    if (result) {
      setTimeout(() => {
        trEl.remove();
      }, 1000);
    }
  });
});
displayTableData();

tblStudentsTbody.querySelectorAll("tr").forEach((tr) => {
  tr.addEventListener("click", (e) => {
    e.target.closest("tr").classList.toggle("table-info");
  });
});
