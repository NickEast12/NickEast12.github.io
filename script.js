// assigning varibales
const hamburgerAgain = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-overlay');
const upArrow = document.querySelector('.up-arrow');

// mobile menu appear
hamburgerAgain.addEventListener('click', () => {
    hamburger.classList.toggle("is-active"); 
    nav.style.transform = 'translateY(0%)';
    hamburger.classList.toggle("is-active"); 
});
// mobile menu collapse + cross animation
upArrow.addEventListener('click', () =>{
    upArrow.preventDefault;
    upArrow.classList.add('roll-out-top');
    void upArrow.offsetWidth;
    
    setTimeout (
        () => {
            nav.style.transform = 'translateY(-100%)';
            hamburger.classList.toggle("is-active");
        },
        4 * 175
    ); 
    setTimeout (
        () => {
            upArrow.classList.remove('roll-out-top');
        },
        4 * 300
    );
    
});




