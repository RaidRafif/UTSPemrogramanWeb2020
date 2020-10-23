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
  let name = document.getElementById('name').value;
  let major = document.getElementById('major').value;
  let email = document.getElementById('email').value;
  let comment = document.getElementById('comment').value;
  comment = comment.toLowerCase();
            
  document.getElementById('res-name').innerHTML = name;
  document.getElementById('res-major').innerHTML = major;
  document.getElementById('res-email').innerHTML = email;
  document.getElementById('res-comment').innerHTML = comment;
            
  let jumlahKata = comment.split(/\s/).length;
  let arrKata = comment.split(/\s/);
  console.log(jumlahKata);



  // Filter Cantik Kata-Kotor
  // Filter Cantik Kata-Kotor
  // Filter Cantik Kata-Kotor
  var badWords = ["kehed", "caduk", "beungeut", "belis", "halig", 
                  "siah", "belegug", "gebloh", "koplok", "anying",
                  "bebel", "eusleum", "bagoy", "edan", "kanjut", "henceut"];

  let foundBadWords = arrKata.filter(etc => badWords.includes(etc));
  document.getElementById("wordsFound").innerHTML = foundBadWords.join(", ");
  document.getElementById("wordsAmount").innerHTML = foundBadWords.length;

  // let patt = /anjing/i;
  // if(comment.match(patt)){
  //   console.log('ada kata kasar');
  // }else{
  //   console.log('ga ada kata kasar');
  // }
}
