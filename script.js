let images=[];

let imgArr= getImage(10); // получение 10 изображений из папки

const slider =document.getElementById('slider');

let navPoints=[];

let controlls;

let nextImg ;

let prevImg ;

let imageIndex = 0;

function show(index) {

  for (let i =0; i<navPoints.length;i++) { //отметка текущей картинки
    if(i===index) {
      navPoints[i].style.background='white';

    } else {
      navPoints[i].style.background='';
    }
  }

  images[imageIndex].classList.remove('active');

  images[index].classList.add('active');

  imageIndex = index;

  if(index === 0){ // отключение кнопок в крайних положениях
    prevImg.style.display='none';

  } else if (index === images.length-1) {
    nextImg.style.display='none';

  } else {
    prevImg.style.display='';

    nextImg.style.display='';
  }
}

let points= []

points.forEach((e) => {
  e.addEventListener('click', () => {
    let id = e.id.replace('dot_','');
    show(id-1);
    alert(id);
  })
})

function getImage(countImage) {
  /*
  countImage - количество картинок из папки имена цифра.jpg
  Поднимать web сервер чтобы он вычитывал папку и отдавал по api нет ни времени ни желания
  */
  debugger
  let result =[];
  for (let i = 1; i<=countImage; i++)
  {
    let newImg= {};
    newImg.id= i; // для простоты. В пределах папки все равно будет уникальным.
    newImg.path=`img/${i}.jpg`;
    result.push(newImg);
  }
  return result;

}

function createSlImg() {

  for (let i=0 ;i<imgArr.length; i++) {

    let divImg =document.createElement('div');

    let image = document.createElement('img');

    image.classList.add('slider-img');

    image.setAttribute('src',imgArr[i].path);

    image.setAttribute('id',imgArr[i].id);

    images.push(image);

    divImg.append(image);

    slider.append(divImg);
}

}

function  createSlBtn(){

  let divBtnPrev =document.createElement('div');

  let imagePrev = document.createElement('img');

  imagePrev.classList.add('prev');

  imagePrev.classList.add('controls');

  imagePrev.setAttribute('src','img/controls/left.png');

  imagePrev.setAttribute('id','prev');

  prevImg= imagePrev;

  divBtnPrev.append(imagePrev);

  slider.append(divBtnPrev);

  let divBtnNext =document.createElement('div');

  let imageNext = document.createElement('img');

  imageNext.classList.add('next');

  imageNext.classList.add('controls');

  imageNext.setAttribute('src','img/controls/right.png');

  imageNext.setAttribute('id','next');

  nextImg = imageNext;

  divBtnNext.append(imageNext);

  slider.append(divBtnNext);
}

function createSlPoint(){
  let navPoint= document.createElement('nav');

  for (let i=0 ;i<imgArr.length; i++) {

    let divPoint =document.createElement('div');

    divPoint.classList.add('dot');

    divPoint.setAttribute('id',`dot_${imgArr[i].id}`);

    navPoints.push(divPoint);

    navPoint.append(divPoint);

  }

  slider.append(navPoint);

}

function createSlider() {

  if(imgArr.length>=1){

    createSlImg();

    createSlBtn();

    controlls = document.querySelectorAll('.controls');

    controlls.forEach((e) => {
      e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
          let index = imageIndex - 1;

          if (index < 0) { // если понадобится зациклить
            index = images.length - 1;
          }

          show(index);

        } else if (event.target.classList.contains('next')) {
          let index = imageIndex + 1;

          if (index >= images.length) {
            index = 0;
          }
          show(index);
        }
      })
    })

    createSlPoint();

    navPoints.forEach((e) => {
      e.addEventListener('click', () => {
        let id = e.id.replace('dot_','');
        show(id-1);
       // alert(id);
      })
    })

  }
  else {
    alert('Нет изображений для создания слайдера!');
    return false;
  }
}

createSlider();

show(imageIndex);
