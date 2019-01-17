let contactButton1 = document.getElementById('contactButton1');
let contactButton2 = document.getElementById('contactButton2');
let officeLocation = document.getElementsByClassName('office-location-inner');

let contactSubmit = document.getElementById('contactSubmit');
let contactThanks = document.getElementById('submitThanks');

let inputName = document.getElementById('nameInput');

contactButton1.addEventListener('click', () => {
    officeLocation[1].style.display = 'none'
    officeLocation[0].style.display = 'block'
    contactButton2.style.backgroundColor = '#ACDDF1';
    contactButton1.style.backgroundColor = '#0099d7';
    
})

contactButton2.addEventListener('click', () => {
    officeLocation[0].style.display = 'none'
    officeLocation[1].style.display = 'block'
    contactButton1.style.backgroundColor = '#ACDDF1';
    contactButton2.style.backgroundColor = '#0099d7';  
})

contactSubmit.addEventListener('click', () => {
   
        contactThanks.style.display = 'block';
        setTimeout(reload, 4000)
        function reload() {
             location.reload()
    }
})

