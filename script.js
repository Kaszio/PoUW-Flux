const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > *');
const imageLength = imageItems.length;
let perView = 5;
let totalScroll = 0;
const delay = 3000;
var sceneStart2;


let isDown = false;
let isDown2 = false;
let isDown3 = false;
let isDown4 = false;
let border1 = false;
let border2 = false;


var dropdowns = document.getElementById("dropdown1");
var dropdownContent = document.getElementById("dropdown-content1");
var dropdowns2 = document.getElementById("dropdown2");
var dropdownContent2 = document.getElementById("dropdown-content2");
var dropdowns3 = document.getElementById("dropdown3");
var dropdownContent3 = document.getElementById("dropdown-content3");
var dropdowns4 = document.getElementById("dropdown4");
var dropdownContent4 = document.getElementById("dropdown-content4");



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

function dropdown(num) {
    if(num == 1){
       if(isDown===false){
      
      isDown=true;
      
      document.getElementById("pocs").src = "Images/chevron-up.svg";
      
      dropdownContent.classList.remove("dropdown-content-raised");
      dropdownContent.classList.add("dropdown-content-dropped");
        
        
      dropdowns.classList.remove("dropdown-raised");
      dropdowns.classList.add("dropdown-dropped");
        
      }else if(isDown===true){
      
      isDown=false;
      
      document.getElementById("pocs").src = "Images/chevron-down.svg";
  
      dropdownContent.classList.add("dropdown-content-raised");
      dropdownContent.classList.remove("dropdown-content-dropped");
  
      dropdowns.classList.add("dropdown-raised");
      dropdowns.classList.remove("dropdown-dropped");
    }
    }else if(num == 2){
      if(isDown2===false){
      
      isDown2=true;
      
      document.getElementById("pocs2").src = "Images/chevron-up.svg";
      
      dropdownContent2.classList.remove("dropdown-content-raised");
      dropdownContent2.classList.add("dropdown-content-dropped");
        
        
      dropdowns2.classList.remove("dropdown-raised");
      dropdowns2.classList.add("dropdown-dropped");
        
      }else if(isDown2===true){
      
      isDown2=false;
      
      document.getElementById("pocs2").src = "Images/chevron-down.svg";
  
      dropdownContent2.classList.add("dropdown-content-raised");
      dropdownContent2.classList.remove("dropdown-content-dropped");
  
      dropdowns2.classList.add("dropdown-raised");
      dropdowns2.classList.remove("dropdown-dropped");
    }
    }else if(num == 3){
      if(isDown3===false){
      
      isDown3=true;
      
      document.getElementById("pocs3").src = "Images/chevron-up.svg";
      
      dropdownContent3.classList.remove("dropdown-content-raised");
      dropdownContent3.classList.add("dropdown-content-dropped");
        
        
      dropdowns3.classList.remove("dropdown-raised");
      dropdowns3.classList.add("dropdown-dropped");
        
      }else if(isDown3===true){
      
      isDown3=false;
      
      document.getElementById("pocs3").src = "Images/chevron-down.svg";
  
      dropdownContent3.classList.add("dropdown-content-raised");
      dropdownContent3.classList.remove("dropdown-content-dropped");
  
      dropdowns3.classList.add("dropdown-raised");
      dropdowns3.classList.remove("dropdown-dropped");
    }
    }else if(num == 4){
      if(isDown4===false){
      
      isDown4=true;
      
      document.getElementById("pocs4").src = "Images/chevron-up.svg";
      
      dropdownContent4.classList.remove("dropdown-content-raised");
      dropdownContent4.classList.add("dropdown-content-dropped");
        
        
      dropdowns4.classList.remove("dropdown-raised");
      dropdowns4.classList.add("dropdown-dropped");
        
      }else if(isDown4===true){
      
      isDown4=false;
      
      document.getElementById("pocs4").src = "Images/chevron-down.svg";
  
      dropdownContent4.classList.add("dropdown-content-raised");
      dropdownContent4.classList.remove("dropdown-content-dropped");
  
      dropdowns4.classList.add("dropdown-raised");
      dropdowns4.classList.remove("dropdown-dropped");
    }
    }
   }
  