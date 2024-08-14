var hide_class = document.getElementsByClassName("hide");
var table = document.getElementById("Table1");

var tbody = table.children[1];

function array_move(arr, old_index, new_index, proj_id, direction) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);

    if (direction == 'up') {
	    postData('https://mpengs.nyc/administrator/projects_panel/update_priority', { id_up: tbody.children[old_index].id, id_down: tbody.children[new_index].id, proj_id, d: 'up' })
	    .then((data) => {
		    tbody.innerHTML = '';

		    for (i = 0; i < data.success.length; i++) {
			var tr = document.createElement('tr');
			var td1 = document.createElement('td');
			var td2 = document.createElement('td');
			var td3 = document.createElement('td');
			var td4 = document.createElement('td');
			var td5 = document.createElement('td');
			var td6 = document.createElement('td');

			td1.innerHTML = data.success[i].id;
			td2.innerHTML = `<button class="btn btn-primary" onclick="upHandle(event, ${data.success[i].priority}, ${data.success[i].id})" >Up</button> <button class="btn btn-primary" onclick="downHandle(event, ${data.success[i].priority}, ${data.success[i].id})">Down</button>`;		
			td3.innerHTML = data.success[i].name;
			td4.innerHTML = `<div><img src="${data.success[i].image}" class="img-thumbnail"></div>`;
			td5.innerHTML = `<a href="/administrator/projects_panel/update_image/${data.success[i].id}" class="btn btn-secondary">Update Thumbnail</a>`;
			td6.innerHTML = `<a href="/administrator/projects_panel/edit/${data.success[i].id}" class="btn btn-info">Edit Project Details</a>`;

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);

			tbody.appendChild(tr);
		    }
		    location.reload();
	    })
    } else if (direction == 'down') {
	    postData('https://mpengs.nyc/administrator/projects_panel/update_priority', { id_up: tbody.children[new_index].id, id_down: tbody.children[old_index].id, proj_id, d: 'down' })
	    .then((data) => {
		    console.log(data.success);
		    
		    tbody.innerHTML = '';

		    for (i = 0; i < data.success.length; i++) {
			var tr = document.createElement('tr');
			var td1 = document.createElement('td');
			var td2 = document.createElement('td');
			var td3 = document.createElement('td');
			var td4 = document.createElement('td');
			var td5 = document.createElement('td');
			var td6 = document.createElement('td');

			td1.innerHTML = data.success[i].id;
			td2.innerHTML = `<button class="btn btn-primary" onclick="upHandle(event, ${data.success[i].priority}, ${data.success[i].id})" >Up</button> <button class="btn btn-primary" onclick="downHandle(event, ${data.success[i].priority}, ${data.success[i].id})">Down</button>`;		
			td3.innerHTML = data.success[i].name;
			td4.innerHTML = `<div><img src="${data.success[i].image}" class="img-thumbnail"></div>`;
			td5.innerHTML = `<a href="/administrator/projects_panel/update_image/${data.success[i].id}" class="btn btn-secondary">Update Thumbnail</a>`;
			td6.innerHTML = `<a href="/administrator/projects_panel/edit/${data.success[i].id}" class="btn btn-info">Edit Project Details</a>`;

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);

			tbody.appendChild(tr);
		    }
		    location.reload();

	    })
    }
};

for (i = 0; i < hide_class.length; i++) {
	hide_class[i].style.display = "none";
}

function dragHandler(e) {
	e.preventDefault();
	
}


function upHandle(e,id, proj_id) {
	e.preventDefault();
	var arr_tbody = Array.prototype.slice.call(tbody.children)
	for (i=0; i<tbody.children.length; i++){
		if (tbody.children[i].id == id) {
			array_move(arr_tbody, i, i - 1, proj_id, 'up');
			console.log(arr_tbody);
		};
	};
}

function downHandle(e, id, proj_id) {
	e.preventDefault();
	
	var arr_tbody = Array.prototype.slice.call(tbody.children)
	for (i=0; i<tbody.children.length; i++){
		if (tbody.children[i].id == id) {
			array_move(arr_tbody, i, i + 1, proj_id, 'down');
			console.log(arr_tbody);
		};
	};
}
function dropHandler(e) {
	e.preventDefault();
	
}
function clickHandler(e, element, id) {
	var div = document.getElementById(id);	

	element.style.display = "none";
	div.style.display = "block";	
}

function returnClick(e, id) {
	var div = document.getElementById(id);
	var value = document.getElementById(`${id}input`).value;
	var current= document.getElementById(`${id}`).value;	
	postData('https://mpengs.nyc/administrator/projects_panel/edit', { idno: id, field: 'priority', content: value, current: current })
	.then(data => {
		console.log(data);

		div.style.display = "none";
		document.getElementById(`${id}p`).style.display = "block";
		location.reload();
	})
}

function returnClickBack(e, priority, id) {
	var div = document.getElementById(id);

	div.style.display = "none";
	document.getElementById(`${id}p`).style.display = "block";
}


function changeHandler(e, element, id) {
	console.log(element.value);
}

async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	return response.json();
}
