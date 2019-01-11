var link = document.querySelector(".find-link");

var popap = document.querySelector(".contener-form");

var datein = popap.querySelector(".date-in");
var dateout = popap.querySelector(".date-out");
var adults = popap.querySelector("#adults");
var kids = popap.querySelector("#kids");

var form = popap.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.toggle("modal-show");
  datein.focus();
  popap.classList.add("modal-animation");
});

form.addEventListener("submit", function (evt) {
  if (!datein.value || !dateout.value) {
    evt.preventDefault();
      console.log("Введите дату заезда и дату выезда");
  } else if (!adults.value || !kids.value) {
    evt.preventDefault();
    console.log("Введите количество взрослых и детей");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (popap.classList.contains("contener-form")) {
    popap.classList.add("modal-show");
    }
  }
});
