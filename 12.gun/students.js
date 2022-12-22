import { students } from "../assets/data/students.js";

const tblStudentsTbody = document.querySelector("#tblStudents tbody");

//data yı yuklemek ıcın bı fonk yaparız.genelde ortaya kod yazılmaz fonk ıle çağırılır
const loadData = () => {
  let strHtml = ""; // html leri saklamak ıcın br degısken olutururuz

  students.forEach((student, index) => {
    ///strlhtml e her donuste bu sekilde ekleme yapar.

    //index +1 =1 den basltarak yazar
    //student.name= name j de bulunan degerdir çagırmak ıcın.ayrıca sadece student yazmak object getirir
    //aynı şekilde point de js dekı deger.
    // neden id değilde index kullandık. eger bır eleman sılınırse mesela 3. sıra no1-2-4 dıye devam eder.
    //fakat index te bu sorun olmaz. 1-2-3 dıye devam eder.
    //backend tarafında id ile silinir.
    strHtml += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${student.name}</td>
        <td>${student.point}</td>
        <td><button class="btn btn-dark btn-delete">🗑️</button></td>
      </tr>`;
  });

  // tr leri tbody içersine yerleştirmek için tblStudentsTbody uzerınden eklenır
  tblStudentsTbody.innerHTML = strHtml;
};
loadData(); //fonk calısması ıcın.

/* EVENTS */
document.getElementById("btnShowLowScores").addEventListener("click", () => {
  const lastTDs = tblStudentsTbody.querySelectorAll("tr td:last-child");

  //belli bir sayının altında kalan metni red yapmam lazım bunun iiçin once td leri secmek gerek
  //lastTDs
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
  button.addEventListener("click", () => {
    const result = confirm("Are you sure to delete?");
    if (result) {
      //silme işlemi
    }
  });
});
/* EVENTS */
