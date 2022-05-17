function getPilihanComputer() {
  var comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pill) {
  pill.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pill.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

    const info = document.querySelector(".info");
    info.innerHTML = hasil;
  });
});
