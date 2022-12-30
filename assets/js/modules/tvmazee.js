const searchShows = (query, cb) => {
  //burada data yı alabilmek için callback uzrınden alacagız--cb
  //2 parametre almıs olacgız.
  //query -dısarıdan gelyor.input//cb ise output tur.
  //searchShows a sunu dıyoruz:sana iki parametre gönderiyorum biri query diğeri cb, (query) backende gönderecksın ben bu datayı ıstıyorum
  //cb ile de senden geri dönecek datyı da bununla geri gönder
  // cb yı aracı parametre olarak al
  //
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    //query kısmı ınputtan gelecek halıyle degısken olması daha ıyı
    //ve query parametresınden alacak degerleri
    .then((resp) => resp.json())
    .then((data) => {
      cb(data);
    });
  //.catch((err) => console.log(err));
};

const getShowDetils = (id, cb) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      cb(data);
    });
};

export { searchShows, getShowDetils };
