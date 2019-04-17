// selected hamburger 
// make it drop down menu
// slected up arrow 
// make it pull back the menu

let hamburgerAgain = document.querySelector('.hamburger');
let nav = document.querySelector('.mobile-overlay');
let upArrow = document.querySelector('.fas');
hamburgerAgain.addEventListener('click', () => {
    hamburger.classList.toggle("is-active"); 
    nav.style.transform = 'translateY(0%)';
    hamburger.classList.toggle("is-active"); 
});
upArrow.addEventListener('click', () =>{
    nav.style.transform = 'translateY(-100%)';
    hamburger.classList.toggle("is-active");
});