let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carroselDom = document.querySelector('.slider-Carrossel');
let listDom = carroselDom.querySelector('.slider-Carrossel .list');
let miniaturasDom = document.querySelector('.slider-Carrossel .miniaturas');
//let miniaturasItensDom = miniaturasDom.querySelector('.item');
//let timeDom = document.querySelector('.slider-Carrossel .time');

//miniaturasDom.appendChild(miniaturasItensDom[0]);
let timeRunning = 3000;
let timeAutoNext = 15000;

nextDom.onclick = function(){
  showSlider('next');
}
prevDom.onclick = function(){
  showSlider('prev');
}
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);


function showSlider(type){
  let sliderItem = document.querySelectorAll('.slider-Carrossel .list .item');
  let miniaturaItem = document.querySelectorAll('.slider-Carrossel .miniaturas .item');

  if(type === 'next'){
    listDom.appendChild(sliderItem[0]);
    miniaturasDom.appendChild(miniaturaItem[0]);
    carroselDom.classList.add('next');
  }else{
    let positionItem = sliderItem.length -1;
    listDom.prepend(sliderItem[positionItem]);
    miniaturasDom.prepend(miniaturaItem[positionItem]);
    carroselDom.classList.add('prev');
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carroselDom.classList.remove('next');
    carroselDom.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
