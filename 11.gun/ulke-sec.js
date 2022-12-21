import { countries } from "../assets/data/countries.js";
//export olan dosyayı import ederek alınır
//ayrıca module olmayan yerde import kullanamazsın uayrısı gelir
//bunun için html scrtip tıne type="module" ekle

document.querySelector("#ddlCountries").addEventListener("change", (e) => {
  //  console.log(e.target.options[e.target.selectedIndex].text);

  const selectedValue = e.target.value; //e.target olay yerin yeri
  const selectedCountry = getCountry(selectedValue);
  // console.log(selectedCountry); calısıyormu bı bak

  if (!selectedCountry) return;
  const tableEl = document.querySelector("#tblCountry");

  tableEl.querySelector("tr:nth-child(1) td").innerHTML =
    selectedCountry.capital;
  tableEl.querySelector("tr:nth-child(2) td").innerHTML = Object.values(
    selectedCountry.currencies
  )
    .map((item) => item.name)
    .join("-");
  tableEl.querySelector("tr:nth-child(3) td").innerHTML = Object.values(
    selectedCountry.languages
  ).join("-");

  tableEl.style.display = "block";
});

const loadData = () => {
  let options = `<option value="" selected disabled>select a country</option>`;
  //select in içine options oluşturmak için..selected=secili olması
  // disabled= select a country bı daha secılmesın anlamında
  // console.log(countries.lenght);
  for (let country of countries) {
    // console.log(country);
    //doğrudan country yazamayız. name.common yazmalıyız. consol log dn bulunabilir
    options += ` <option value="${country.ccn3}">${country.name.common}</option>`;
  }
  //backend tarafına id ile gider. onun ıcın id yoksa value kısmına yukarıdakı gib bir deger yazılır.o ulkeye ait.
  //countriesten country her donusunde ulkeleri bırakacak ve
  //en sonunda herbir ulke ile alakalı bır options olacak
  document.querySelector("#ddlCountries").innerHTML = options;
};

const getCountry = (ccn3) => {
  const arr = countries.filter((country) => country.ccn3 === ccn3);
  return arr.length > 0 ? arr[0] : null;
};
loadData();
