import { countries } from "../assets/data/countries.js";

const loadData = () => {
  let options;

  console.log(countries.lenght);
  for (let country of countries) {
    console.log(country);
    options += ` <option value="${country.ccn3}">${country.name.common}</option>`;
  }
  document.querySelector("#ddlCountries").innerHTML = options;
};
loadData();
