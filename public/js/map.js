var map;
var markers = [];

let c = [];
let url = window.location.href;
     

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 40.708731631899305, lng: -74.01484047419339},
	    zoom: 12,
	});
	var marker = new google.maps.Marker({
		position: {lat: 40.708731631899305, lng: -74.01484047419339},
		map: map,
	});
}

function change_map(e, element) {
	console.log(element.children);
	
	map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: Number(element.children[0].value), lng: Number(element.children[1].value)},
	    zoom: 12,
	});
	
	var marker = new google.maps.Marker({
		position: {lat: Number(element.children[0].value), lng: Number(element.children[1].value)},
		map: map,
	});
}

