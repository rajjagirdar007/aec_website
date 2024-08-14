const path = require('path');
const express = require('express');

const router = express.Router();
const db = require(path.join(__dirname, "../tools/db_mycivvi.js"));
const dt = require(path.join(__dirname, "../tools/dt.js"));
const resume_upload = require(path.join(__dirname, "../tools/resume_upload.js"));

router.get('/', (req, res) => {
	let q = 'SELECT * FROM career';
	db.query(q, (err, results) => {
		if (err) throw err;
		
		res.render("careers/career.hbs", {
			data: results
		})
	})
})

router.get('/apply/:id', (req, res) => {
	let id = req.params.id;
	let q = `SELECT * FROM career WHERE id = ${id}`;
	db.query(q, (err, results) => {
		if (err) throw err;

		res.render("careers/apply_career.hbs", {
			data: results
		})
	})
})

router.post('/apply/:id', resume_upload.single("file-upload-input"), (req, res) => {
	let fname = req.body.fname;
	let lname = req.body.lname;
	let email = req.body.email;
	let phone = req.body.phone;
	let position = req.body.position;
	let current_dt = dt.get_current();
	
	let q = `INSERT INTO kanban(fname, lname, position, email, phone, date_time) VALUES ('${fname}', '${lname}', '${position}', '${email}', '${phone}', '${current_dt}')`;
	db.query(q, (err, results) => {
		if (err) throw err;
		
		res.send("Thank you for applying. We will reach out to you shortly!");
	})
})

module.exports = router;
