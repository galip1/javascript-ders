// let list = document.querySelector("#list");
// let data = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((resp) => resp.json())
//   .then((data1) => {
//     data1.forEach((element) => {
//       console.log(element.userId);
//       if (element.id <= 10) list.innerHTML += `<li>${element.userId}</li>`;
//     });
//   });

let list = document.querySelector("#photo");
let data = fetch("https://jsonplaceholder.typicode.com/photos")
  .then((resp) => resp.json())
  .then((data1) => {
    data1.forEach((element) => {
      console.log(element);
      if (element.id <= 10) list.innerHTML += `<img src=${element.url}</img>`;
    });
  });
