const idno = document.getElementById("id").value;

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
	let url, emp_status;
	if (window.location.href.includes('.com')) {
		url = 'https://mpengs.com/panel/people/edit';
	} else if (window.location.href.includes('.nyc')) {
		url = 'https://mpengs.nyc/panel/people/edit';
	}

	if (window.location.href.includes('/employee/')) {
		emp_status = 'employee';
	} else if (window.location.href.includes('/leader/')) {
		emp_status = 'people';
	}

	postData(url, { emp_status, idno, field: id, content: document.getElementById(id).value })
	.then(data => {
		console.log(data);
	})
}
