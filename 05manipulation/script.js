// // innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "Eriy Suratman";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<div><p>paragraf1</p></div>";

// element.style.
// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "Salmon";

// element.setAttribute()
// Contoh attribute
// href, a, id
// Menimpa attribute
// const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label");

// element.classList.
const p2 = document.querySelector(".p2");

// element.classList.add()
// Menambahkan class
p2.classList.add("label");

// element.classList.remove()
// Menghapus class
p2.classList.remove("label");

// element.classList.toggle()
// Apabila class belum ada maka tambahkan
// Apaabila class sudah ada maka hapus
p2.classList.toggle("biru-muda");
p2.classList.toggle("biru-muda");

// element.classList.item()
// Mengetahui urutan class
p2.classList.item(0);
// "p2"

// element.classList.contains()
// Menanyakan class sudah ada atau belum
// output bolean
p2.classList.contains("p2");
// true

// element.classList.replace()
// Mengganti class
p2.classList.replace("p2", "tiga");
