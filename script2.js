
var button = document.getElementById('menu');
var menu = document.getElementById('popup');
var close = document.getElementById('close');
//var footer = document.getElementById('footer');


button.onclick = function() {
	menu.style.transform = "translateX(0)"; 
}
close.onclick = function() {
	menu.style.transform = "translateX(-100%)"; 

}