const regClose = document.getElementById('regClose');
const regBody = document.getElementById('registrationWrapper');
const regOpen = document.getElementById('register-button');

regOpen.addEventListener('click', () => {
    regBody.style.transform = "translateY(0%)";
})
regClose.addEventListener('click', () => {
    regBody.style.transform = "translateY(-100%)";
})


const regSubmit = document.getElementById('reg-submit');
regSubmit.addEventListener('click', () => {
    const regFirstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const regLastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('reg-username').value;
    const passworD = document.getElementById('reg-password').value; 
})



