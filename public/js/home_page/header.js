const menu = document.querySelector('.menu');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
menuTrigger.addEventListener('click', () => {
	toggleMenu();
});
function toggleMenu() {
	menu.classList.toggle('active');
}
function disFunction() {
	var element = document.getElementById("mobileMenu");
	element.classList.toggle("activeMenu");
}

const list = document.querySelectorAll(".list");
function accordion(e) {
	e.stopPropagation();
	if (this.classList.contains("active")) {
	this.classList.remove("active");
	} else if (this.parentElement.parentElement.classList.contains("active")) {
	this.classList.add("active");
	} else {
	for (i = 0; i < list.length; i++) {
		list[i].classList.remove("active");
	}
	this.classList.add("active");
	}
}
for (i = 0; i < list.length; i++) {
	list[i].addEventListener("click", accordion);
}
// sticky header start
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("sticky");
  } else {
    document.getElementById("header").classList.remove("sticky");
  }
}
// sticky header end

