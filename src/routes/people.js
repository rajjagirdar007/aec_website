const path = require('path');
const express = require('express');

const router = express.Router();
const db = require(path.join(__dirname, "../tools/db_irzaw.js"));

router.get('/', (req, res) => {
	let q = 'SELECT * FROM people WHERE active = 1 ORDER BY priority ASC';
	let people = [];
	db.query(q, (err, results) => {
		if (err) throw err;

		results.forEach((result) => {
			if (result.first_name.length > 2) {
				let obj = {
					photo: `/images/people/leadership/${result.leadership_picture}`,
					role: result.role,
					link: `/leadership/details/${result.first_name.toLowerCase()}`
				}
				people.push(obj);
			}
		})

		let q = 'SELECT * FROM employee WHERE active = 1 ORDER BY priority ASC';
		db.query(q, (err, results) => {
			res.render("people/leadership.hbs", {
				person: people, 
				unlike: results
			})
		})
	})
})

router.get('/details/:name', (req, res) => {
	let name = req.params.name;
	let q = `SELECT * FROM people WHERE first_name = '${name}'`;
	db.query(q, (err, results) => {
		if (err) throw err;
		
		res.render("people/individual.hbs", {
			photo: `/images/people/personal/${results[0].personal_picture}`,
			fname: results[0].first_name,
			lname: results[0].last_name,
			description: results[0].description,
			role: results[0].role
		})
	})
})

/*

app.get("/people/:name", (req, res) => {
    var name = req.params.name;
    var q = `SELECT * FROM people WHERE first_name = '${name}'`;
    connection.query(q, (err, results, fields) => {
        if (err) throw err;

        res.render(viewsDirPath + "/people/individual.hbs", {
            photo: `/images/people/personal/${results[0].personal_picture}`,
            fname: results[0].first_name,
            lname: results[0].last_name,
            description: results[0].description,
            role: results[0].role
        })
    })
});*/
module.exports = router;
