import { countries } from "../assets/data/countries.js";
//export olan dosyayı import ederek alınır
//ayrıca module olmayan yerde import kullanamazsın uayrısı gelir
//bunun için html scrtip tıne type="module" ekle
const loadData = () => {
  //select in içine options oluşturmak için
  let options;

  // console.log(countries.lenght);
  for (let country of countries) {
    console.log(country);
    //doğrudan country yazamayız. name.common yazmalıyız. consol log dn bulunabilir
    options += ` <option value="${country.ccn3}">${country.name.common}</option>`;
  }
  //backend tarafına id ile gider. onun ıcın id yoksa value kısmına yukarıdakı gib bir deger yazılır.o ulkeye ait.
  //countriesten country her donusunde ulkeleri bırakacak ve
  //en sonunda herbir ulke ile alakalı bır options olacak
  document.querySelector("#ddlCountries").innerHTML = options;
};
loadData();
