// assigning the function of clock
function clock() {
// assinging the variables using the new Date() function
var fullDate = new Date();
var hours = fullDate.getHours();
var minutes = fullDate.getMinutes();
var seconds = fullDate.getSeconds();
// pushing the results to HTML
document.getElementById('hours').innerHTML = hours + ' :';
document.getElementById('minutes').innerHTML = minutes + ' :'
document.getElementById('seconds').innerHTML = seconds;	
// using if statments to greet the user depending on the time
if (hours <= 12) {
	document.getElementById('greeting').innerHTML = 'Good Morning'
		}
if (hours > 12) {
	document.getElementById('greeting').innerHTML = 'Good Afternoon'
		}
	}
// setting the page to reload every second 
setInterval(clock,1000);