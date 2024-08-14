const form = document.getElementById("form_upload");
const file_input = document.getElementById("file_upload");
const hidden_file_path = document.getElementById("hidden_file_path");
/*
form.addEventListener("submit", (e) => {
	location.reload();
})

function submitHandler(e, value) {
	e.preventDefault();
	console.log("submitted");

	const files = file_input.files;
	if (files.length > 0) {
		const formData = new FormData();

		formData.append("file_upload", files[0]);
		formData.append("file_name", value);

		const xhr = new XMLHttpRequest();

		xhr.onload = () => {
			console.log(xhr.responseText);
		}

		xhr.open("POST", "https://artensystems.com/change_pictures");
		xhr.send(formData);
	} else {
		console.log("must upload file first!!");
	}
}
*/
