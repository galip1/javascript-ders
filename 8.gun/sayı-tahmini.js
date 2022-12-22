let randomNumber = 0; //global bir değişken. hem startan hemde guess den ulaşılır
//start tan  setter edilir,,guess dend e getter edilir.
const btnGuess = document.querySelector(".btn-guess");
const btnStart = document.querySelector(".btn-start");
const numEl = document.querySelector("#txtNumber");
const labelEl = document.querySelector("#lblResult");

const kalp = document.querySelector("#kalp");
const right = document.querySelector("#shot");

const minRandomNumber = 1;
const maxRAndomNumber = 100;
right.value = 5;

right.innerHTML = right.value;

/*
const minRandomNumber=1;
const maxRandomNumber=100;
const totalShot=5;

burası degısken olur start fonk dkı randomnumber kısmına eklenebilir. değişken adıyle.


*/

const start = () => {
  randomNumber = generateRandomNumber(minRandomNumber, maxRAndomNumber); //100 ile 0 arsında bir sayı tutacak
  btnGuess.style.display = "inline"; // butona basınca guess ın görunmesı gerek.
  //burada classlist işlemez onun için display degiştirilmesi gerek onun için style ile cozulur.
  //onceden none idi gorunmesı icın inline yazdı. block değil çunku yeri istediğimiz yere gelmedi
  btnStart.innerHTML = "Reset Game"; //starta bastıgı zaman reset game olsun.
  labelEl.innerHTML = "";
  numEl.removeAttribute("disabled"); //start game yapılmadan dısabled yapılabilir.
  //bunun için once html ınputa disabled ekle(attribute).numEll burada bir attribute olan disablede karsılıktır.
  numEl.focus();

  right.style.display = "inline";
  kalp.style.display = "inline";
  right.value = 5;
  right.innerHTML = right.value;
};

const reset = () => {
  ///sayıyı tahmın edince ekrarnın otomatık olarak reetlenmesı ııcn.
  btnGuess.style.display = "none"; //eski hale geri getirilir.
  btnStart.innerHTML = "Start the game";
  numEl.setAttribute("disabled", "true"); //resetten sonrada disbled olsun--ikinci bir deger girmek gerekiyor
};

const guess = () => {
  //girilen sayıyı almamız gerekiyor==numEl
  let num = Number(numEl.value);
  num = num || 0; //eger bos gelirse burası false olur. içi bos gelmesi
  //default deger ataması yapıldı.uzunuda asagıda if kısmı
  /*
    if(!num){
        num = 0;
    } eger num degeri null, empty, und ,0 sa, içibos strıng ise vs 
    gelen ifade bunlardan ise num=0 olsun.true olursa if de devam eder.
    yanı kısacası num un false olması durumunda 0 sıfır olsun
    */

  if (num === randomNumber) {
    //tutulan sayı---num ise randomnumber ı tahmın ettıgımız sayı.
    labelEl.innerHTML = "Congrats! You guessed the number"; ///burda duruma göre label mesaj vericez

    reset();
  } else if (num > randomNumber) {
    labelEl.innerHTML = "Your number is greater than the random number";
    right.innerHTML = right.value -= 1;
    gameOver();
  } else {
    labelEl.innerHTML = "Your number is lesser than the random number";
    right.innerHTML = right.value -= 1;
    gameOver();
  }

  numEl.value = ""; //her girişten sonra bos kalsın
  numEl.focus(); // her girişten sonra da focus lansın
};

const generateRandomNumber = (
  min,
  max //generateRandomNumber dan start a 1-100 arası sayı gitti.
  //sadece rastgele sayı uretmek ıcın olusturulan bır fonk.
) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const gameOver = () => {
  if (right.value == 0) {
    labelEl.innerHTML = "Game Over";
    reset();
  }
};
