function ustAl() {
  const tabanEl = document.querySelector("#taban").value;
  const usEl = document.querySelector("#us").value;
  const sonuc = Number(tabanEl) ** Number(usEl);
  const sonucEl = document.querySelector(".sonuc");

  sonucEl.classList.add("ekle");
  sonucEl.innerHTML = `${tabanEl}<sup>${usEl}</sup>=${sonuc}`;
}
