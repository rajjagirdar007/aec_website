// change active class, show the clicked element only and hide the others
// grab all the buttons
let Buttons = document.querySelectorAll(".selectSection li a");
document.body.style.fontWeight = "bold";

// loop through the buttons using for..of 
for (let button of Buttons) {
  // listen for a click event 
  button.addEventListener('click', (e) => {
    // et = event target
    const et = e.target;
    // slect active class
    const active = document.querySelector(".active");
    const open = document.querySelector(".open");
    // check for the button that has active class and remove it
    if (active) {
      active.classList.remove("active");
    }
    if (open) {
	    open.classList.remove("open");
    }
    // add active class to the clicked element 
    et.classList.add("active");
    
    // select all classes with the name content
    let allContent = document.querySelectorAll('.content');

    let opening = [
	    { maxHeight: '0px' }
    ]
    // loop through all content classes
    for (let content of allContent) {
      // display the content if the class has the same data-attribute as the button 
      if(content.getAttribute('data-number') === button.getAttribute('data-number')) {
	      content.style.maxHeight = 'min-content';
	      content.style.padding = '10px';
	      if (window.innerWidth <= 776) {
		      content.style.margin = '5px 0px';
	      } else if (window.innerWidth > 776 && window.innerWidth <= 992) {
		      content.style.margin = '7.5px 0px';
	      } else if (window.innerWidth > 992) {
		      content.style.margin = '10px 0px';
	      }
       } else {
		content.style.maxHeight = '0px';
	       content.style.padding = '0px';

	       content.style.margin = '0px';
       }

    }

})
}


