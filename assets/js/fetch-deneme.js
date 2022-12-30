import { searchShows, getShowDetils } from "./modules/tvmazee.js";

//olay ınputa bırsey yazdıgımız zaman olacak
//sonra textboxta yazılan metnı almamaız gerek
// ve mesela 3 karakterden sonra arama yapsın.
document.getElementById("txtSearch").addEventListener("input", (e) => {
  const query = e.target.value;

  if (!query || query.length < 3) {
    document.getElementById("tvShows").innerHTML = "";
    return;
  } //bu durumda hemen return yapsın asagıya ınmesın

  //sonra datayı cagırmamız lazım
  //cb ye karsılık bır fonk yazarız altta shws oldugu gıbı. data oraya gelir
  //burası asenkron yapı
  //   searchShows(query, (shows) => {
  //     console.log(shows);

  //     //foreach ile datayı ıterate edecegız. ayrıca foreach bır calback fonk alıyordu

  //     let strShows = ""; //ilk degeri bos olsun
  //     shows.forEach((item) => {
  //       //item değişkenine gelir her bir donusunde

  //       /// destructering
  //       const { image, name, genres, runtime, type } = item.show; //show un içinde bulunanlardan

  //       //bu selkde gelsin istiyorum
  //       strShows += ` <div class="col">
  //       <div class="card h-100">
  //           <img src="${image.medium}" class="card-img-top" alt="...">
  //           <div class="card-body">
  //           <h5 class="card-title">${name}</h5>
  //           <p class="card-text">${genres.join("-")}</p>
  //           <p class="card-text">${runtime}dk</p>
  //           <p class="card-text">Type: ${type}</p>
  //           </div>
  //       </div>
  //   </div>  `;
  //     });
  //     document.querySelector("#tvShows").innerHTML = strShows;
  //   });

  //burayı gecerse createshow u cagırır
  createShows(query);
});

const createShows = (query) => {
  document.getElementById("loading").classList.remove("d-none");

  searchShows(query, (shows) => {
    console.log(shows);

    //foreach ile datayı ıterate edecegız. ayrıca foreach bır calback fonk alıyordu

    let strShows = ""; //ilk degeri bos olsun
    shows.forEach((item) => {
      //item değişkenine gelir her bir donusunde

      /// destructering

      //bu selkde gelsin istiyorum
      strShows += createShowHTML(item);
    });
    document.querySelector("#tvShows").innerHTML = strShows;
    document.getElementById("loading").classList.add("d-none");
  });
};

const createShowHTML = (item) => {
  const { image, name, genres, runtime, type } = item.show; //show un içinde bulunanlardan

  return ` <div class="col">
          <div class="card h-100">
              <img src="${image.medium}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${genres.join("-")}</p>
              <p class="card-text">${runtime}dk</p>
              <p class="card-text">Type: ${type}</p>
              </div>
          </div>
      </div>  `;
};
