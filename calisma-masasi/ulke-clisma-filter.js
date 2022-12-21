import { countries } from "../assets/data/countries.js";
//select a country de bır değişiklik yapıldığında burada calıscak bır kod lazım yanı
//bır event yazmak gerek
document.querySelector("#ddlCountries").addEventListener("change", (e) => {
  // alert("hello"); burada ulke adını vs alıcaz.. change event listener yanı dınleme.
  //ve butun bilgiler olay ile alakalı hersey e veya event yazan fonk gelir
  ////target olay mahalli

  // console.log(e.target.options[e.target.selectedIndex].text);
  //text ile getirme durumu
  //e.target=olay mahalli yanı select--options=select in butun elemanları--[]=elemanının text i

  //console.log(e.target.value); value ile getirme duurmu
  const selectedValue = e.target.value;
  const selectedCountry = getCountry(selectedValue);
  //selctdCoutry ye ya null gelecek yada dizi elecek aşağıdan.yanı getCountry den
  // console.log(selectedValue); kontrol edebilirsin
  //bir sabite atadık ve value ye gelen degeri selectedValuye gecıcek

  if (!selectedCountry) return; // selectedCountry nın null gelem ıhtımalıne karsı

  const tableEl = document.querySelector("#tblCountry");

  tableEl.querySelector("tr:nth-child(1) td").innerHTML =
    selectedCountry.capital;
  tableEl.querySelector("tr:nth-child(2) td").innerHTML = Object.values(
    selectedCountry.currencies
  );
  tableEl.querySelector("tr:nth-child(3) td").innerHTML = Object.values(
    selectedCountry.languages
  );

  tableEl.style.display = "block";
});

const loadData = () => {
  let options = `<option value="" selected disabled>Select a country</option>`;

  // console.log(countries.lenght);
  for (let country of countries) {
    //console.log(country);
    //doğrudan country yazamayız. name.common yazmalıyız. consol log dn bulunabilir
    options += ` <option value="${country.ccn3}">${country.name.common}</option>`;
  }
  //backend tarafına id ile gider. onun ıcın id yoksa value kısmına yukarıdakı gib bir deger yazılır.o ulkeye ait.
  //countriesten country her donusunde ulkeleri bırakacak ve
  //en sonunda herbir ulke ile alakalı bır options olacak
  document.querySelector("#ddlCountries").innerHTML = options;
};

///ülkeler içinden istediğimiz ülkei getirmesı ııcn
const getCountry = (ccn3) => {
  const arr = countries.filter((country) => country.ccn3 === ccn3);
  return arr.lenght > 0 ? arr[0] : null;
  //countries yukarıda butun ulkeleri ve buradan bıze ccn3 olanalrı filtrele
  //ve bunları arr ye at.
  //dizi içersinde  gelecek.
  //eger 0 yoksa hata verir ve garanti olsun dıyee arr.lenght>0 dan buyuk.ternary kullan
};
loadData();
