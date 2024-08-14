const add_proj_form = document.getElementById("add_projects");
const change_pic_form = document.getElementById("change_pictures");
const location_change = document.getElementById("location_change");
const project_loc = document.getElementById("project_loc");
const cancel_loc = document.getElementById("cancel_loc");

add_proj_form.style.display = "none";
//location_change.style.display = "none";
cancel_loc.style.display = "none";

function click_handler(ev) {
	ev.preventDefault();

	if (add_proj_form.style.display === "none") {
		add_proj_form.style.display = "block";
	} else {
		add_proj_form.style.display = "none"
	}
}

function add_new_proj(ev) {
	ev.preventDefault();

	add_proj_form.submit();
}

function submit_form(ev) {
	ev.preventDefault();

	change_pic_form.submit();
}

function location_edit(ev){
	location_change.style.display = "block";
	project_loc.style.display = "none";
}

function loc_cancel(ev) {
	ev.preventDefault();

	location_change.style.display = "none";
	project_loc.style.display = "block";
}

