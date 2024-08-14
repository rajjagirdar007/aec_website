const date_field = document.getElementById("date");
const date_warning = document.getElementById("date_warning");
const btn = document.getElementById("btn");

date_warning.style.display = "none";
date_field.addEventListener("input", (e) => {
	e.preventDefault();
	
	if (isNaN(date_field.value)) {
		date_warning.style.display = "block";
		date_warning.textContent = "Only numbers should be inputted!";
		btn.disabled = true;
	} else {
		date_warning.style.display = "none";
		date_warning.textContent = "";
		btn.disabled = false;
	}
})



