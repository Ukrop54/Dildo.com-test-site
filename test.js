// const axios = require("axios"); // Потрібно встановити axios через npm install axios

// const botToken = "6356129001:AAEJRsqBQi0IEiK2gybD8Sa9PIgLKVvJzFk";
// const chatId = "1352317933";
// const message = "вввв";

// axios
//   .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//     chat_id: chatId,
//     text: message,
//   })
//   .then((response) => {
//     console.log("Повідомлення надіслано успішно:", response.data);
//   })
//   .catch((error) => {
//     console.error("Виникла помилка:", error);
//   });

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();
  const botToken = "6356129001:AAEJRsqBQi0IEiK2gybD8Sa9PIgLKVvJzFk";
  const chatId = "1352317933";
  // const message = "вввв";

  let message = `<b>zayavka s sayta </b>\n`;
  message += `<b>otpravitel </b> ${this.name.value} \n`;
  message += `<b>pochta </b> ${this.email.value} \n`;

  axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    chat_id: chatId,
    text: message,
  });
});
