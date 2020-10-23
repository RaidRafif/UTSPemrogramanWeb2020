// Input animation
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// Result Validation
let nama = 'ItsA_Name';
const proses = ()=>{
  // Mengambil data dari inputan user
  let name = document.getElementById('name').value;
  let major = document.getElementById('major').value;
  let email = document.getElementById('email').value;
  let comment = document.getElementById('comment').value;
  comment = comment.toLowerCase();
  
  // Deklarasi variabel untuk menghitung banyaknya kata serta kata-kata terlarang
  let jumlahKata = comment.split(/\s/).length;
  let arrKata = comment.split(/\s/);

  var badWords = ["kehed", "caduk", "beungeut", "belis", "halig", 
                  "siah", "belegug", "gebloh", "koplok", "anying",
                  "bebel", "eusleum", "bagoy", "edan", "kanjut", 
                  "henceut", "ampas", "bangsat", "sialan", "asu"];

  let foundBadWords = arrKata.filter(etc => badWords.includes(etc));
  let theBadWords = foundBadWords.join(", ");
  let countBadWords = foundBadWords.length;

  // Menampilkan nama dan major
  document.getElementById('welcome').innerHTML = `Halo ${name} dari ${major}. Terima kasih sudah mengisi form komentar`

  // Menampilkan email yang dimasukkan
  document.getElementById('email-validation').innerHTML = `Alamat email yang anda isikan ${email}. Mohon periksa kembali`

  // Menampilkan banyaknya kata dalam komentar
  document.getElementById('comment-validation').innerHTML = `Jumlah kata dalam komentar anda sebanyak ${jumlahKata}. `

  // Cek kata terlarang. Bila ada kata terlarang, hitung dan tampilkan
  if (foundBadWords.length > 0) {
    document.getElementById('comment-validation').innerHTML = `Jumlah kata dalam komentar anda sebanyak ${jumlahKata}. Maaf, terdapat ${countBadWords} kata yang tidak diperbolehkan seperti ${theBadWords}. Mohon diganti.`
  } else {
    document.getElementById('comment-validation').innerHTML = `Jumlah kata dalam komentar anda sebanyak ${jumlahKata}. Terima kasih telah berkomentar dengan baik dan sopan. Semoga hari anda menyenangkan`
  }
}

