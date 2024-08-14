const p = document.querySelector("#p");

async function post(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'post', 
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	return response.json();
}

let current_url = window.location;

post(current_url)
.then((data) => {
	let s = document.createElement('span');
	let s_text = document.createTextNode('Description: ');
	s.appendChild(s_text);
	s.classList.add("bold");

	let c = document.createElement('p');
	let c_text = document.createTextNode(data.content);
	c.style.whiteSpace = 'pre-wrap';
	c.appendChild(c_text);

	p.appendChild(s);
	p.appendChild(c);
})
