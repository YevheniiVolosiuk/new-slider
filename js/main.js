const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const sideabar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidersCount = mainSlide.querySelectorAll('div').length;
sideabar.style.top = `-${(slidersCount - 1) * 100}vh`




upButton.addEventListener('click', () => {
   changeSlide('up')
});

downButton.addEventListener('click', () => {
   changeSlide('down')
});


let activeSlideIndex = 0;
function changeSlide(direction) {
   if(direction === 'up'){
      activeSlideIndex++
      if(activeSlideIndex === slidersCount){
         activeSlideIndex = 0
      }
   }else if (direction === 'down'){
      activeSlideIndex--
      if(activeSlideIndex < 0){
         activeSlideIndex = slidersCount -1
      } 
   }

   const height = container.clientHeight

   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
   sideabar.style.transform = `translateY(${activeSlideIndex * height}px)`
}