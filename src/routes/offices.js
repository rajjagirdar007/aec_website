const path = require('path');
const express = require('express');

const router = express.Router();
const db = require(path.join(__dirname, "../tools/db_mycivvi.js"));

router.get('/', (req, res) => {
	let q = 'SELECT * FROM offices';
	db.query(q, (err, results) => {
		if (err) throw err;
		let m_office = [];
		let s_office = [];
		results.forEach((result) => {
			if (result.type == "main") {
				m_office.push(result);
			} else if (result.type == "satellite") {
				s_office.push(result);
			}
		})

		let q = 'SELECT * FROM contact_info';
		db.query(q, (err, results) => {
			if (err) throw err;
			
			res.render("offices/offices.hbs", {
				main_office: m_office,
				satellite_office: s_office,
				contact: results
			})
		})
	})
})

module.exports = router;
