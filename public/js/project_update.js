const idno = document.getElementById("id");
const filters = document.getElementById("filters");
const tags = document.getElementById("tags");

var current_filters = tags.value.split(", ");
for (var i = 0; i < filters.children.length; i++) {
	if (filters.children[i].tagName == "INPUT") {
		if (current_filters.includes(filters.children[i].value)) {
			filters.children[i].checked = true;
		}
	}
}

async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	return response.json();
}

function make_edit(e, id) {
	e.preventDefault();

//	console.log(id, "changed!");

	postData('https://mpengs.nyc/administrator/projects_panel/edit', { idno: idno.value, field: id, content: document.getElementById(id).value })
	.then(data => {
		console.log(data);
	})
}

function change_filter(e, id) {
	e.preventDefault();

	var element = document.getElementById(id);

	if (element.checked) {
		postData('https://mpengs.nyc/administrator/projects_panel/edit_filters', { idno: idno.value, filter_name: id, action: 'ADD' })
		.then(data => {
			element.checked = true;
			console.log(data);
		})
	} else {
		postData('https://mpengs.nyc/administrator/projects_panel/edit_filters', { idno: idno.value, filter_name: id, action: 'DELETE' })
		.then(data => {
			element.checked = false;
			console.log(data);
		})
	}
}
