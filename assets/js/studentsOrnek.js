//import { students } from "../data/studentOrnek.js";

const students = [
  { id: 1, name: "Ayşe", point: 80 },
  { id: 2, name: "Veli", point: 32 },
  { id: 3, name: "Fatma", point: 56 },
  { id: 4, name: "Ahmet", point: 76 },
  
];

//const tblStudentsTbody = document.querySelector("#table tbody");

// const loadData = () => {
//   let strHtml = "";
//   students.forEach((student, index) => {
//     strHtml += `<tr>
//         <th scope="row">${index + 1}</th>
//         <td>${student.name}</td>
//         <td onchange="showScore()" class="score">${student.point}</td>

//         <td><button class="btn btn-düzenle "><i class="fa-solid fa-pen"></i></button></td>
//          <td><button class="btn btn-ok d-none bg-warning"><i class="fa-solid fa-check"></i></button></td>
//         <td> <button class="btn btn-delete"><i class="fa-solid fa-trash"></i></button></td>
//         <td><button class=" btn btn-cancel d-none"><i class="fa-solid fa-xmark"></i></button>
//         </td>

//       </tr>`;
//   });
//   tblStudentsTbody.innerHTML = strHtml;
// };
// loadData();

function displayTableData() {
  setTimeout(() => {
    let html = ` <table  class="table ">
<thead>
  <tr>
    <td>SNo.</td>
    <td>Name</td>
    <td>Point</td>
  </tr>
</thead> 
<tfoot>
    <tr>
     <td colspan="2">Average</td>
     <td id="" colspan="6"></td>
   </tr> 
 </tfoot><tbody class="table-tbody bg-light">
`;

    for (let i = 0; i < students.length; i++) {
      let num = i + 1;
      html += ` <tr>
    <td>${num}</td>
    <td>${students[i].name}</td>
    <td>${students[i].point}</td> 
   
    <td><button class="btn btn-düzenle "><i class="fa-solid fa-pen"></i></button></td>
    <td><button class="btn btn-ok bg-warning"><i class="fa-solid fa-check"></i></button></td>

    <td><button id="btnDel" type="button" onclick="sil(${students[i].id})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
  <td><button class=" btn btn-cancel "><i class="fa-solid fa-xmark"></i></button></td>  </tr>
   `}


`</tbody></table>`;
    document.getElementById("table").innerHTML = html;
  }, 500);
}
displayTableData();

/* EVENTS */

// //1-show delete
document.getElementById("btnShowLowScores").addEventListener("click", () => {
  let tbody = document.querySelector("#table tbody");
  let lastTDs = tbody.querySelectorAll("tr td:nth-child(3)");
  console.log(lastTDs);
  console.log(tbody);
  lastTDs.forEach((td, index) => {
    if (td.innerText < 50) {
      tbody.querySelector(
        `tr:nth-child(${index+1 })`
      ).style.backgroundColor = "red";
    }
  });
});


////5-add butonu
document.querySelector("#btnAdd").addEventListener("click", () => {
  let name = document.getElementById("textName").value;
  let point = document.getElementById("txtPoint").value;


  if (name&&point) {
    let id = students.length + 1;
    students.unshift({ name: name,point:point });

    
  }else {
    alert("Please, full all of the list!!!");
  }
  document.getElementById("textName").value=""
  document.getElementById("txtPoint").value=""
  
  displayTableData();
});


///2-delete
function sil(rec) {
  let filt = students.filter((a, i) => {
    if (rec == a.id) {
      students.splice(i, 1);
      confirm("Silmek istediğinizden emin misiniz?")
      displayTableData();
    }
  });
}
////6-average




let ort=students.reduce((x, y) =>(x + y.point) / students.length, 0).toFixed(2)

 console.log(ort)

 document.querySelector("#ortalama").innerHTML = ort 






///3-info
// document.querySelectorAll("tbody tr").forEach((tr) => {
//   tr.addEventListener("click", (e) => {
//     e.target.closest("tr").classList.toggle("bg-info");
//   });
// });

// //4-point butonu
// document.querySelector("#btnPoint").addEventListener("click", () => {
//   let point = document.getElementById("txtPoint").value;

//   if (point) {
//     let id = students.length + 1;
//     students.unshift({ point: point });

//     displayTableData();
//   }
// });

// //7-ok ve cancel butonları ekle

// document.querySelectorAll(".btn-düzenle").forEach((düzenle) => {
//   düzenle.addEventListener("click", (e) => {
//     const ok = document.querySelector(".btn-düzenle");
//     e.stopPropagation(); // olayın parent lara aktarılmasını engeller.
//     ok = e.target.classList.toggle("fa-check");
//   });
// });







////delete

// document.querySelectorAll(".btn-delete").forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.stopPropagation(); // olayın parent lara aktarılmasını engeller.

//     const trEl = e.target.closest("tr");
//     console.log(trEl);
//     const name = trEl.querySelector("td").innerText;

//     const result = confirm(`Are you sure to delete ${name}?`);
//     if (result) {
//       setTimeout(() => {
//         trEl.remove();
//       }, 1000);
//     }
//   });
// });