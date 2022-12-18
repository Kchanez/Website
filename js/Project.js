


const track = document.querySelector('.carousell-track');
const slides = Array.from(track.children);

const next_button = document.querySelector('.button-right');
const prev_button = document.querySelector('.button-left');

const slideWidth = slides[0].getBoundingClientRect().width;


slides.forEach((slide, index )=>{
    slide.style.left = slideWidth * index + 'px';
});

const moveToSlide = (track, currentSlide, targetSLide) =>{
    track.style.transform = 'translateX(-' + targetSLide.style.left + ')';

    currentSlide.classList.remove('current-slide');
    targetSLide.classList.add('current-slide');
}

prev_button.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSLide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSLide);

    moveToSlide(track, currentSlide, prevSLide);
    hideshowarrows(slides,prev_button,next_button,prevIndex);
})

next_button.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSLide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSLide);
    
    moveToSlide(track, currentSlide, nextSLide);
    hideshowarrows(slides,prev_button,next_button,nextIndex);
})

const hideshowarrows = (slides,prev_button,next_button,targetindex)=>{
    if (targetindex === 0){
        prev_button.classList.add('isHidden');
        next_button.classList.remove('isHidden');
    }else if(targetindex === slides.length - 1){
        prev_button.classList.remove('isHideen');
        next_button.classList.add('isHidden');
    }else{
        prev_button.classList.remove('isHidden');
        next_button.classList.remove('isHidden');
    }
}




var ham = document.querySelector('.ham');
var menu = document.querySelector('.menu');
var links = document.querySelectorAll('.menu li a');

ham.addEventListener("click", trans);
function trans()
{
  ham.classList.toggle("open");
  if (menu.style.left == "0px") {
      menu.style.left = "-900px";
    } else {
      menu.style.left = "0px";
    }
}
links.forEach(link => {
  link.addEventListener("click", trans);
});




        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              680: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              860: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1120: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.3,
                spaceBetween: 20,
              },
            },
          });