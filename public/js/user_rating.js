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

document.getElementById("close_button").style.display = "none";


document.getElementById("submit_button").addEventListener("click", (e) => {
	e.preventDefault();

	var rating = document.getElementById("rating_select").value;
	var user = document.getElementById("username").value;

	postData('https://mpengs.nyc/administrator/user_rating', { user_rating: rating, username: user })
	.then((data) => {
//		console.log(data);

		document.getElementById("container").style.display = "none";
		document.getElementById("close_button").style.display = "block";
		
		fetch(`https://mpengs.nyc/administrator/feedback_check?sub_id=${document.getElementById('sub_id').value}`)
		  .then(response => window.location = "https://mpengs.nyc/administrator/feedback");
	})

//	document.getElementById("rating_form").submit();
})
