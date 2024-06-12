function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

window.onload = function (){
let imgPath=`img/${randomInteger(1,10)}.jpg`;

const img=document.getElementById('currentImg');
  img.src = imgPath;
}