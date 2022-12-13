//örnek -1:
/*console.log("merhaba");
console.warn("uyarı amaclı kullanılır");
console.error("hata göstermek için kullanılır");*/

//örnek -2:
/* alert("uyarı mesajı");
 */

/* confirm("silmek istediğinızden emınmısınız");
 */

/* console.log(confirm("silmek itediğinizden emin miisniz")); //true false
 */

//örnek 3:

/* let uzunKenar = prompt("uzun kenarı griniz");
let kisaKenar = prompt("uzun kenarı griniz");
let alan = Number(uzunKenar) * Number(kisaKenar);
console.log(`dikdörtgenin alani: ${alan}  dir.`);
alert(`dikdörtgenin alani: ${alan}  dir.`); */

//örnek -4:
/* 
let pi = 3.14;
console.log(typeof pi);

let deger = true;
console.log(typeof deger);

let ad1 = "Ali";
let ad2 = "Oya";
let ad3 = "Can";
let ad4 = null;
let ad5 = "";
let ad6 = undefined;
console.log(ad1, ad2, ad3, ad4, ad5, ad6);
console.log(ad1 && ad2 && ad3);
console.log(ad1 && ad2 && ad3 && ad4);
console.log(ad1 && ad2 && ad3 && ad6);
console.log(ad1 || ad2 || ad3);
console.log(ad1 || ad2 || ad3 || ad4);
console.log(ad4 || ad6); */

// örnek 6:

/* let x = 30;
let y = "30";
console.log(x === y);
console.log(x === Number(y));
console.log(x === !Number(y));
console.log(x === Number(!y));
console.log(!x === Number(y));
console.log(x == y);
console.log(x !== y);
console.log(x != y);
console.log(x < y + 10);
 */

//örnek 7:

/* const s1 = 254;
const birler = s1 % 10;
const onlar = Math.floor(s1 / 10) % 10;
const yüzler = Math.floor(s1 / 100);

console.log(s1);
console.log(birler);
console.log(onlar);
console.log(yüzler);

const toplam = birler + onlar + yüzler;
console.log(toplam); */

//örnek 8:
/* 
let a = 5;
let b = --a;
let c = b++;

console.log(a, b, c); */

//örnek 9:
/* const sayi1 = 5;
const sayi2 = -7;
const isim = "John";
const sifir = 0;
const hic = null;
const bos = "";
const tanimsiz = undefined;
const sayiDegil = NaN;
console.log(Boolean(sayi1));
console.log(
  Boolean(bos),
  Boolean(hic),
  Boolean(sifir),
  Boolean(tanimsiz),
  Boolean(sayiDegil)
); */

// örnek 10:

/*let isim = prompt("adınız yazınız");

if (!isim) {
  alert("adınızı yazmadınız");
} else {
  alert("hoşgeldiniz : " + " " + isim);
}
 */
/* if (!isim || isim == " ") {
  alert("İsminizi girmediniz.");
} else {
  alert(`Hoş geldiniz sayın ${isim}`);
}
 */

//ornek 11:
/* let giris = true;
let cikis = false;
console.log(!giris || cikis || giris);
console.log(!giris || cikis);
console.log((giris && cikis) || (!cikis && !giris)); */
