let urunler = [...products]; //shallow copy
const urunlerEl = document.querySelector(".urunler");
const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const markaEl = document.querySelector(".markalar");
/* urunlerin listesindeki içeriklerin belli html taglarına 
yerleştirilmesi  */
const urunYerlestir = () => {
  if (urunler.length < 1) {
    urunlerEl.innerHTML = ` <h2>Aradığınız ürün bulunmamaktadır</h2>`;
    return;
  }
  urunlerEl.innerHTML = urunler
    .map((product) => {
      //let icerik = "";
      const { id, title, image, price } = product;
      return `  <article class="urun" id=${id}>
      <img src=${image} alt="" />
      <footer>
        <h5 class="isim">${title}</h5>
        <span class="fiyat">$ ${price}</span>
      </footer>
      </article>`;
    })
    .join("");
};
urunYerlestir();
/* butonların category isimlerine göre oluşturulması için fonksiyon */
const butonYerlestir = () => {
  const butonText = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  markaEl.innerHTML = butonText
    .map((company) => {
      return ` <button class= "btn" id=${company} >${company}</button>`;
    })
    .join("");
};
butonYerlestir();
markaEl.addEventListener("click", (e) => {
  const clickedBtn = e.target;
  if (clickedBtn.classList.contains("btn")) {
    if (clickedBtn.id === "all") {
      urunler = [...products];
    } else {
      urunler = products.filter((product) => {
        return product.company === clickedBtn.id;
      });
    }
    urunYerlestir();
  }
});
/* .keyup() metodu  bir klavye tuşundan parmak kaldırıldığı 
zaman çalışır. 
input a yazılan şeye göre ürün listesinin filtrelenip,
ürünlerin bu filtreye göre yerleştirilmesi için fonksiyon
*/
formEl.addEventListener("keyup", () => {
  const inputValue = inputEl.value.toLowerCase();
  urunler = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  urunYerlestir();
});
