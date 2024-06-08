document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();
  const botToken = "7408798634:AAHammsMTJkDxhLdz0ZrzLmsCUyVnBpVG9c";
  var chatId = "";
  // const chatId = "5695945101"; maxbetov

  // var message = `${textinput.value}`;

  if (zagolovokCHECK.checked) {
    var message = `<b>${zagolovokINP.value}</b>\n<blockquote>${textinput.value}</blockquote>\n Отправитель: <i>${otpravitel.value}</i>`;
  } else {
    var message = `<blockquote>${textinput.value}</blockquote>  Отправитель: <i>${otpravitel.value}</i>`;
  }

  var selected = dropdown.value;

  if (selected == "yarik") {
    var chatId = "1352317933";
  } else if (selected == "masha") {
    var chatId = "6172357582";
  } else {
    alert("errorDropdown");
    chatId = "";
  }

  // var textinput = document.getElementById("textinput");

  if (textinput.value.length >= 3) {
    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: "html",
    });
  } else {
    alert("error");
  }

  textinput.value = "";
  zagolovokINP.value = "";
});

document
  .getElementById("zagolovokCHECK")
  .addEventListener("change", function () {
    var zagolovokINP = document.getElementById("zagolovokINP");
    if (this.checked) {
      zagolovokINP.classList.remove("red");
      zagolovokINP.classList.add("green");
    } else {
      zagolovokINP.classList.remove("green");
      zagolovokINP.classList.add("red");
    }
  });
