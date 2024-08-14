// Get reference to div, img and button
var d = document.getElementById("div1");

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
/*
// Wire up the save button
btn.addEventListener("click", function(evt){
  // First, turn off contenteditable
  div1.removeAttribute("contenteditable");
  
  // Now, get entire contents of div
  var updatedContents = div1.innerHTML;
  
  // If you want to save the contents, you'd have to persist them somewhere 
  // but, all you have to save is the string: "updatedContents"
  console.log(updatedContents);
});
*/


