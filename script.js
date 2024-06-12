function changeColor () {
  let text = document.getElementById('testText');
  text.classList.toggle("btnClick");
}

const element = document.getElementById('testBtn');

element.addEventListener('click',changeColor);

