var laptopData = [
  { name: "Acer", model: "212", cost: 50000, ram: "8gb", id: 1 },
  { name: "Acer", model: "212", cost: 70000, ram: "12gb", id: 2 },
];

function displayTableData() {
  var html = ` <table border="1px solid red" class="table"`;

  setTimeout(() => {
    html += ` <thead>
    <tr>
    <td>SNo.</td>
    <td>Laptop Name</td>
     <td>Model</td>
    <td>Cost</td>
    <td>Ram</td>
   <td>Action</td>
    </tr>
     </thead>`;

    for (let i = 0; i < laptopData.length; i++) {
      let sno = i + 1;
      html += ` <tr>`;
      html += ` <td>${sno}</td>`;
      html += ` <td>${laptopData[i].name}</td>`;
      html += ` <td>${laptopData[i].model}</td>`;
      html += ` <td>${laptopData[i].cost}</td>`;
      html += ` <td>${laptopData[i].ram}</td>`;
      html += ` <td><button type="button" class="btn btn-danger" onclick="removeItem(${laptopData[i].id})">Remove</button></td>`;
      html += ` </tr>`;
    }
    html += ` </thead>`;
    html += ` </table>`;
    document.getElementById("table").innerHTML = html;
  }, 200);
}
displayTableData();

function addOnclick() {
  let name = document.getElementById("laptopName").value;
  let model = document.getElementById("model").value;
  let cost = document.getElementById("price").value;
  let ram = document.getElementById("ram").value;

  if (name && model && cost && ram) {
    let id = laptopData.length + 1;
    laptopData.push({ name: name, model: model, cost: cost, ram: ram, id: id });
    displayTableData();
  }
}

function clearItems() {
  document.getElementById("laptopName").value = "";
  document.getElementById("model").value = "";
  document.getElementById("price").value = "";
  document.getElementById("ram").value = "";
}

function removeItem(rec) {
  console.log(rec);

  let filt = laptopData.filter((a, i) => {
    if (rec == a.id) {
      laptopData.splice(i, 1);
      displayTableData();
    }
  });
  console.log(laptopData);
}
