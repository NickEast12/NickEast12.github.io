var modal = document.getElementById('myModal');
var button = document.getElementById('myBtn');
var exit = document.getElementById('close');
button.onclick = function() {
	    modal.style.display = "inline-block";
}
exit.onclick = function() {
    modal.style.display = "none";
}
