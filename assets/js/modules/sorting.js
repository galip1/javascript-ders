const sSortASC = (arr) => {
  const sortedArr = [...arr].sort((a, b) => {
    //sort a parametre olarak bır fonk gönderilir
    // ve ikilik karsılastırma yapar.
    //burada 3 durum gerceklesır a>b--b>a yada a=b
    //yanı pozıtıf--negatif ve sıfır
    // + durumlarda yer degıstırı - durumda ıse yer degıstırmez
    //console.log(a, b, a.localeCompare(b));

    //once [...arr] yaptık sonra sort
    return a.localeCompare(b);
  });
  return sortedArr;
};
const sSortDESC = (arr) => {
  const sortedArr = [...arr].sort((a, b) => b.localeCompare(a));
  return sortedArr;
};
const nSortASC = (arr) => {
  const sortedArr = [...arr].sort((a, b) => {
    //console.log(a, b, a - b);
    return a - b;
  });
  return sortedArr;
};
const nSortDESC = (arr) => {
  const sortedArr = [...arr].sort((a, b) => b - a);
  return sortedArr;
};
export { sSortASC, sSortDESC, nSortASC, nSortDESC };
