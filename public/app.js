// hide-show go to top btn, nav bar
$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $(".to-top").show("slow");
    $("header").css({
      position: "fixed",
      left: 0,
      right: 0,
      "z-index": 99,
      background: "black",
      "box-shadow": "0 5px 20px rgba(0, 0, 0, 0.9)",
    });
  } else {
    $(".to-top").hide("slow");
    $("header").css({
      position: "static",
      background: "rgba(0, 0, 0, 0.5)",
    });
  }
});

// slider
const list = document.querySelector(".slide-list");
const items = document.querySelectorAll(".slide-item");
const dots = document.querySelectorAll(".dots li");
const pre = document.getElementById("pre");
const next = document.getElementById("next");
let active = 0;
let lastIndex = items.length - 1;
window.addEventListener("load", () => {
  let refresh = setInterval(() => next.click(), 5000);
  next.addEventListener("click", () => {
    if (active + 1 > lastIndex) active = 0;
    else active++;
    reloadSlider();
  });
  pre.addEventListener("click", () => {
    if (active - 1 < 0) active = lastIndex;
    else active--;
    reloadSlider();
  });
  dots.forEach((dotItem, dotIdx) => {
    dotItem.addEventListener("click", () => {
      active = dotIdx;
      reloadSlider();
    });
  });
  function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";
    let lastActiceDot = document.querySelector(".dots li.active");
    lastActiceDot.classList.remove("active");
    dots[active].classList.add("active");
    clearInterval(refresh);
    refresh = setInterval(() => next.click(), 5000);
  }
});

// filterable card
let gameList = $(".game-list__item");
let card = $(".card");
gameList.click(function () {
  $(gameList).removeClass("click");
  this.classList.add("click");
  showCard(this.dataset.filter);
});

function showCard(gameType) {
  [...card].forEach((cardItem) => {
    if (cardItem.dataset.item === gameType || gameType === "all") {
      $(cardItem).show();
    } else {
      $(cardItem).hide();
    }
  });
}

//  search game
$("button.search__btn").click(findGames);

function findGames() {
  const gameSearch = $("#search-box").val();
  if (gameSearch !== "") {
    const game = $(".content > h4");
    const check = [...game].some(
      (gameItem) => gameItem.textContent === gameSearch
    );
    if (check) {
      [...game].forEach(function (gameItem) {
        if (gameItem.textContent === gameSearch) {
          window.location.href = "#game-part";
          $(gameItem).parent().parent().css("border", "5px solid red");
          setTimeout(() => {
            $(gameItem).parent().parent().css("border", "none");
          }, 5000);
        }
      });
    } else alert("No games");
  } else alert("Please type a name");
}

// auto complete search search box
const availableKeys = [
  "Dinosour",
  "Ping Pong",
  "Rock Paper Scissors",
  "Caro",
  "Puzzle",
];
const keyWordsBox = $(".result-box");
const inputBox = $("#search-box");
inputBox.keyup(function () {
  let result = [];
  let inputKey = $(inputBox).val();
  if (inputBox.length) {
    result = availableKeys.filter((key) =>
      key.toLowerCase().includes(inputKey.toLowerCase())
    );
  }
  display(result);
});
function display(result) {
  const content = result.map(
    (item) => `<li onclick=selectInp(this)>${item}</li>`
  );
  keyWordsBox.html(`<ul>${content.join("")}</ul>`);
}
function selectInp(list) {
  $(inputBox).val(list.innerHTML);
  findGames();
  keyWordsBox.html("");
}
$("body").dblclick(function () {
  keyWordsBox.html("");
});

// Responsive navbar
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const nav = document.querySelector(".navbar-list");
  toggleMenu.classList.toggle("active");
  nav.classList.toggle("active");
}
