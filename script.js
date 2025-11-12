// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Animasi kecil saat halaman selesai dimuat
  console.log("Halaman Media Pembelajaran Ekonomi berhasil dimuat!");

  // Contoh: Tombol interaktif (kalau nanti kamu tambah tombol kuis/video)
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert(`Kamu menekan tombol: ${btn.innerText}`);
    });
  });
});
