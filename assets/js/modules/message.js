const showAlert = (msg) => {
  alert(msg); //alert bır mesaj gönderir ve bırakı
};

const showConfirm = (msg) => {
  const result = confirm(msg); //return sebebi--true mu
  return result;
};

export default showAlert; //bir tane default tanımlanır

export { showConfirm }; //bu sekilde de tanımalnabilir
