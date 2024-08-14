var sso;

var h = 'mpengs.nyc';
var d = 'mpengs';

async function post(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	return response.json();
}

async function postToken(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		redirect: 'follow',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': JSON.stringify(data)
		},
		body: JSON.stringify(data)
	})

	return response.json();
}

function clickhandler(e) {
	e.preventDefault();

	var params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=600,left=100,top=100`;
	sso = window.open("https://jalfry.com/sso", "login with jalfry", params);
}

window.addEventListener("message", (e) => {
	e.preventDefault();
	
	if (e.origin == "https://jalfry.com") {
		if (e.data.ready) {
			let obj = {
				domain: d,
				login_link: `https://${h}/login`,
				current_link: window.location.href
			}
			sso.postMessage(obj, 'https://jalfry.com/sso');
		} else {
			var ed = e.data;
			var token = ed.token;
			var username = ed.username;
			
			postToken('https://jalfry.com/login/authorize', { domain: d, token, secret: '', username })
			.then((data) => {
				console.log(data);
				if (data.status) {
					if (window.location.hostname.includes('.nyc')) {
						post(`https://${h}/login`, { username: data.username, permission: data.permission, token })
						.then((data) => {
							window.location = data.url;
						})
					} else if (window.location.hostname.includes('.com')) {
						post(`https://mpengs.com/login`, { username: data.username, permission: data.permission, token, dotcom: true })
						.then((data) => {
							window.location = data.url;
						})
					}
				} else {
					console.log('no access :(');
				}
			})
		}
	}
})





