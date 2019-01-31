let width = window.screen.availWidth;

    
    console.log(width);
    if (width = 1440) {
        alert('this is' + width)
        function Scroll () {
            let top = document.getElementById('navbar');
            let ypos = window.pageYOffset;
                if (ypos > 350) {
                    top.style.height = '700px'
                    top.style.backgroundColor = 'red';
                }else{
                    top.style.height = '150px';
                    top.style.backgroundColor = 'inherit';
                }
                
        }
        window.addEventListener('scroll', Scroll); 
    }else {
        console.log ('nattt')
    }
    
    

