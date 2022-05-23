// DOM Manipulation
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");
// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (e) {
    // close[i].parentElement.style.display = "none";
    e.target.parentElement.style.display = "none";
  });
}

close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

// const nama = document.querySelector(".nama");
// console.log(nama.nextElementSibling.nextElementSibling);
