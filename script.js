let hamburgerMenu = document.getElementById('mobileMenu');
let mobileMenu = document.getElementById('mobileOverlay');

hamburgerMenu.addEventListener('click', () => {
    if (mobileMenu.style.transform === 'translateY(0%)') {
        mobileMenu.style.transform ='translateY(-100%)';
    }else {
        mobileMenu.style.transform ='translateY(0%)';
    }
})

  

   

 /*
  
    */