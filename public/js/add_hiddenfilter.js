function hello() {
	console.log('i am hello');
var checked = document.querySelectorAll('[name="mycheckboxes"]:checked');
var array = [];

	checked.forEach((userItem) => {
//  console.log(uiserItem.value);
		array.push(userItem.value);
});
	var split = array.join(", ");
	console.log(split);
document.getElementById('hiddenFilters').value = split;



}

	var to_check = document.getElementById('hiddenFilters');
	var text = to_check.value.split(',');
	console.log('this is text' + text);
	for( let i = 0; i <= text.length ; i ++) {
		console.log(text[i] + 'this is text length');
		var spot = text[i].trim();
		console.log(document.getElementById(spot) + 'this is the spot');
		if (document.getElementById(spot)) {
			document.getElementById(spot).checked = true; 
		}
		//document.getElementById(text[i]).checked = true; 
	}


