let menuBtn = document.querySelector('.menu');
let menu = document.querySelector('.toggle-nav-items')
let screenWidth = window.innerWidth;

if(screenWidth > 1190){
    menu.classList.remove('hide-menu');
}


menuBtn.addEventListener('click', function(){
    menu.classList.toggle('hide-menu');
})

