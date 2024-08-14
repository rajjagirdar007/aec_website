filterSelection("all")
	function filterSelection(c) {
	  var x, i;
	  x = document.getElementsByClassName("hideFilter");
	  console.log(x);
	  if (c == "all") c = "";
	  console.log(x.length);
	  for (i = 0; i < x.length; i++) {
		removeClass(x[i], "showFilter");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "showFilter");
	  }
	  
		if (window.matchMedia("(max-width: 767px)").matches) {  
			document.getElementById("accordianMobile").style.display = "none";
		}
		else if (window.matchMedia("(min-width: 768px)").matches) { 
			document.getElementById("accordianMobile").style.display = "block";
		} 
	
	}
	
	
	function addClass(element, name) {
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	  }
	}
	
	function removeClass(element, name) {
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
		  arr1.splice(arr1.indexOf(arr2[i]), 1);     
		}
	  }
	  element.className = arr1.join(" ");
	}
	
	// Add active class to the current button (highlight it)

	// var container = document.getElementById("filterMenu");
	// var filters = container.getElementsByClassName("filter");
	// for (var i = 0; i < filters.length; i++) {
	// 	filters[i].addEventListener("click", function(){
	// 	var current = document.getElementsByClassName("activeFilter");
	// 	current[0].className = current[0].className.replace(" activeFilter", "");
	// 	this.className += " activeFilter";
	//   });
	// }

	document.addEventListener("DOMContentLoaded", function(event) { // <-- add this wrapper
		var element = document.querySelectorAll('.filter');
		if (element) {
			element.forEach(function(el, key){
				el.addEventListener('click', function () {
				console.log(key);
				el.classList.toggle("activeFilter");
					element.forEach(function(ell, els){
						if(key !== els) {
							ell.classList.remove('activeFilter');
						}
						console.log(els);
					});
				});
			});
		}
	});
		



const buttons = document.querySelectorAll('a.filter');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById("mobileShowFilterSelect").innerHTML=(`${button.innerHTML}`);
  })
});
  
