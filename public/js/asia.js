const offices_list = document.querySelector("#offices_list");
const ahmedabad = document.querySelector("#ahmedbad_demo");

let o = offices_list.getElementsByTagName("li");

for (var i = 0; i < o.length; i++) {
	if (o[i].innerText == "Ahmedabad, Gujarat") {
		let elements = o[i].children;
		console.log(elements);

		for (var j = 0; j < elements; j++) {
			ahmedabad.appendChild(elements[j]);
		}
	}
}
