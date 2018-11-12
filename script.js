var current = 0,
    slides = document.getElementsByTagName("img");

setInterval(function () {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 10000);


var menu = document.getElementById('overlay');
var closeBtn = document.getElementById('close');
var openBtn = document.getElementById('bizEnq');

openBtn.onclick =function() {
	menu.style.display = 'block';
}
closeBtn.onclick =function() {
	menu.style.display = 'none';
}