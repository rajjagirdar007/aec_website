function smoothScroll(target, duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition// - startPosition;
	var startTime = null;
	
	function animation(currentTime){
		if(startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}
	
	// http://www.gizma.com/easing/
	function ease(t,b,c,d){
			t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b
	}
	
	requestAnimationFrame(animation);
}

var box1 = document.querySelector('#box1 .arrowDown');
var box2 = document.querySelector('#box2 .arrowDown');
var box3 = document.querySelector('#box3 .arrowDown');
var box4 = document.querySelector('#box4 .arrowDown');
// var box5 = document.querySelector('#box5 .arrowDown');
box1.addEventListener('click', function(){
	smoothScroll('.box2', 1000);
});
box2.addEventListener('click', function(){
	smoothScroll('.box3', 1000);
})
box3.addEventListener('click', function(){
	smoothScroll('.box4', 1000);
})
box4.addEventListener('click', function(){
	smoothScroll('.box1', 2000);
})
// box5.addEventListener('click', function(){
// 	smoothScroll('.box1', 3000);
// })