let hamButton = document.getElementById('mobileMenu');
let mobileMenu = document.getElementById("mobileNav");
let logo = document.getElementById('logo');
let navWrapper = document.getElementById('navWrapper');
let hamburgerInner = document.getElementsByClassName('hamburger-inner');
let aboutMeLink = document.getElementById('aboutMeLink');
let projectLink = document.getElementById('projectLink');
let testimonialsLink = document.getElementById('testiLink');
let contactLink = document.getElementById('contactLink');
let logoLink = document.getElementById('logoLink');
let javascriptSkill = document.getElementById('javascriptSkill');
let htmlSkill = document.getElementById('htmlSkill');
let sassSkill = document.getElementById('SASSskill');
let gitSkill = document.getElementById('gitskill');
let psSkill = document.getElementById('PhotoshopSkill');
let ypos;

// display mobile nav
    hamButton.addEventListener('click', () => {
    if (mobileMenu.style.transform === 'translateX(0%)') {
        mobileMenu.style.transform ='translateX(-100%)';
    }else {
        mobileMenu.style.transform ='translateX(0%)';
    }
    });
// nav bar on scoll
    function Scroll () {
         ypos = window.pageYOffset;
            if (ypos > 100) {
                logo.style.backgroundColor = 'black';
                logo.style.color = 'white';
                navWrapper.style.backgroundColor = "#f5f5f5";
                }else{
                    logo.style.backgroundColor = 'white';
                    logo.style.color = 'black';
                    navWrapper.style.backgroundColor = "transparent";
            }
    }
    window.addEventListener('scroll', Scroll); 

// skill bar animations

// javascript skill bar
    function javascriptAnimationScroll  ()  {
        ypos = window.pageYOffset;
        if (ypos > 540) {
                javascriptSkill.classList.add("javascript-skill-animation");
        }else {
            javascriptSkill.classList.remove("javascript-skill-animation"); 
        }
    }
    window.addEventListener('scroll', javascriptAnimationScroll);

    // html skill
function htmlAnimationScroll  ()  {
    ypos = window.pageYOffset;
    if (ypos > 540) {
            htmlSkill.classList.add("html-skill-animation");
    }else {
        htmlSkill.classList.remove("html-skill-animation");
    }
}
window.addEventListener('scroll', htmlAnimationScroll);
// sass skill 
function sassAnimationScroll  ()  {
    ypos = window.pageYOffset;
    if (ypos > 560) {
            sassSkill.classList.add("sass-skill-animation");
    }else {
        sassSkill.classList.remove("sass-skill-animation");
    }
}
window.addEventListener('scroll', sassAnimationScroll);
// git skill 
function gitAnimationScroll  ()  {
    ypos = window.pageYOffset;
    if (ypos > 570) {
            gitSkill.classList.add("git-skill-animation");
    }else {
        gitSkill.classList.remove("git-skill-animation");
    }
}
window.addEventListener('scroll', gitAnimationScroll);
// photoshop skill
function psAnimationScroll  ()  {
    ypos = window.pageYOffset;
    if (ypos > 570) {
            psSkill.classList.add("ps-skill-animation");
    }else {
        psSkill.classList.remove("ps-skill-animation");
    }
}
window.addEventListener('scroll', psAnimationScroll);

    // gap plz
    // need to gather all links ids
let links = [
    aboutMeLink,
    logoLink,
    projectLink,
    testimonialsLink,
    contactLink
];

for (let i = 0; i < links.length ;i++) {
    links[i].addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(-100%)';
        hamburger.classList.toggle("is-active");
    });
}

