
// the select container
    const gameSelect = document.getElementById('games-select');

// the game images 
    const xboxListing = document.getElementsByClassName('xbox-option'); 
    const ps4Listing = document.getElementsByClassName('ps4-option');  
    const steamListing = document.getElementsByClassName('steam-option');  

// gathering the selcted value
    gameSelect.addEventListener('click', () => {
        const gameValue = gameSelect[gameSelect.selectedIndex].value;
     // the if statment
     if (gameValue == 'Xbox') {
        xboxListing[0].style.display = 'inherit';
            ps4Listing[0].style.display = 'none';
            steamListing[0].style.display = 'none';
        }
    if (gameValue == 'PS4') {
            ps4Listing[0].style.display = 'inherit';
            xboxListing[0].style.display = 'none';
            steamListing[0].style.display = 'none';
        }
    if (gameValue == 'Steam') {
            steamListing[0].style.display = 'inherit';
            xboxListing[0].style.display = 'none';
            ps4Listing[0].style.display = 'none';
        }
    if (gameValue == 'Platform?') {
            steamListing[0].style.display = 'inherit';
            xboxListing[0].style.display = 'inherit';
            ps4Listing[0].style.display = 'inherit';
        }
          
            
        
    })


       





