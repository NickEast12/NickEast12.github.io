
if (screen.width >= 1440) {
    function Scroll () {
        let top = document.getElementById('navbar');
        let logo = document.getElementsByClassName('header-logo');
        let button = document.getElementById('navigation-button');
        let links = document.querySelectorAll('.no-show-mobile > li');
        console.log(links);
        let ypos = window.pageYOffset;
            if (ypos > 250) {
                top.style.height = '150px'
                top.style.backgroundColor = 'white';
                top.style.borderBottom = 'solid black 2px';
                logo[0].style.width = '450px';
                logo[0].style.top = '50px';
                button.style.border = "solid 2px rgb(16, 92, 177)";
                button.style.color = 'rgb(16, 92, 177)';
                for (let i = 0; links.length; i++) {
                    links[i].style.color = 'black';
                }}else{
                top.style.height = '150px';
                top.style.backgroundColor = 'inherit';
                top.style.borderBottom = 'none';
                logo[0].style.width = '400px';
                button.style.border = "solid 2px white";
                button.style.color = 'white';
                for (let i = 0; links.length; i++) {
                    links[i].style.color = 'white';
                }
            
            }
            
    }
    window.addEventListener('scroll', Scroll); 
    console.log(width);
}else {
    console.log('yes this works');
    console.log(width);
}
        
       
      
    
    

