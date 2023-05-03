const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > *');
const imageLength = imageItems.length;
let perView = 5;
let totalScroll = 0;
const delay = 3000;
var sceneStart2;

function changeNumPerView(){
  var w = document.documentElement.clientWidth;
  if (w<=1000) {
    perView = 1;
  }
  else {
    perView = 5;
  }
  imageWrapper.style.setProperty('--per-view', perView);
  for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML);
}
}


window.addEventListener("resize", changeNumPerView);
changeNumPerView();



let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  totalScroll++;
  if(totalScroll == imageLength + 1) {
    clearInterval(autoScroll);
    totalScroll = 1;
    imageWrapper.style.transition = '0s';
    imageWrapper.style.left = '0';
    autoScroll = setInterval(scrolling, delay);
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = '.3s';
}