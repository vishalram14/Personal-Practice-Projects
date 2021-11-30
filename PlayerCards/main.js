const card = document.querySelectorAll(".card__inner");
const len = document.querySelectorAll(".card__inner").length;

for (let i = 0; i < len; i++){
card[i].addEventListener("click", function (e) {
  card[i].classList.toggle('is-flipped');
});
}