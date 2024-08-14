var container = document.getElementById("container");
var f_info = document.getElementById("filter_info");

var url = window.location.href;
var domain = url.split('/projects')[0];

function filter_expand(filter_type, e) {
	e.preventDefault();

	var f_type = filter_type.split("By ")[1];
	var list = document.getElementsByClassName(f_type)[0];
	console.log(JSON.stringify(f_info.value.toString()));

	if (list.children.length > 0) {
		list.innerHTML = "";
	} else if (list.children.length == 0) {
		fetch(`${domain}/get_filter_names?type=${f_type}`)
		.then((response) => response.json())
		.then((data) => {
			var f_names = data.data;

			f_names.forEach((f_name, index) => {
				var li = document.createElement("li");
				var a = document.createElement("a");

				var a_text = document.createTextNode(f_name);
				
				a.classList.add("filter");
				a.href = "javascript:void(0);";
				a.setAttribute('onclick', `filterSelection("${f_name}")`);
				
				a.appendChild(a_text);
				
				li.appendChild(a);
				li.setAttribute('onclick', `filterSelection("${f_name}")`);

				li.style.backgroundColor = "white";
				li.style.textAlign = "center";
				li.style.margin = "5px"

				list.appendChild(li);
			})
		})
	}
}

/*
for (var i = 0; i < container.children.length; i += 2) {
	var filter_type = container.children[i].textContent.split("By ")[1];

	fetch(`${domain}/get_filter_names?type=${filter_type}`)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		var associated_list = container.children[i + 1].children[0];

		for (var j = 0; j < data.data.length; j++) {
			var li = document.createElement("li");
			var a = document.createElement("a");

			var a_text = document.createTextNode(data.data[j]);
			a.classList.add("filter");
			a.href = "javascript:void(0);";
			a.onclick = filterSelection(`${data.data[j]}`);
			a.appendChild(a_text);

			console.log(a);

			li.appendChild(a);

			associated_list.appendChild(li);
		}
	})
}
*/
