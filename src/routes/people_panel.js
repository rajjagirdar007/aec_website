const path = require('path');
const express = require('express');
const multer = require('multer');

const router = express.Router();

const db = require(path.join(__dirname, "../tools/db_mycivvi"));
const login = require(path.join(__dirname, "../middleware/login.js"));
const utils = require(path.join(__dirname, "../tools/people_panel_utils.js"));

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../../public/images/people"))
	},
	filename: function (req, file, cb) {
		console.log(file);
		cb(null, file.originalname)
	}
})
const people_upload = multer({ storage: storage });

router.use(login.login_status);

router.get('/', (req, res) => {
	let q = `SELECT * FROM people`;
	db.query(q, (err, leader_results) => {
		if (err) throw err;
		
		let q = `SELECT * FROM employee`;
		db.query(q, (err, employee_results) => {
			if (err) throw err;

			res.render('panel/people_panel.hbs', {
				username: req.session.username,
				row: leader_results,
				employee: employee_results
			})
		})
	})
})

router.get('/add', (req, res) => {
	res.render('panel/add_people_panel.hbs', { username: req.session.username });
})

router.post('/add/leader', people_upload.fields([
	{ name: "leadership_picture", maxCount: 1 },
	{ name: "personal_picture", maxCount: 1 }
]), utils.add_leader, (req, res) => {
	res.redirect('/panel/people');
})

router.post('/add/employee', people_upload.fields([
	{ name: "leadership_picture", maxCount: 1 },
	{ name: "personal_picture", maxCount: 1 }
]), utils.add_employee, (req, res) => {
	res.redirect('/panel/people');
})

router.get('/delete/leader/:id', (req, res) => {
	let id = req.params.id;
	let q = `DELETE FROM people WHERE id = ${id}`;
	db.query(q, (err, results) => {
		if (err) throw err;

		res.redirect("/panel/people");
	})
})

router.get('/delete/employee/:id', (req, res) => {
	let id = req.params.id;
	let q = `DELETE FROM employee WHERE id = ${id}`;
	db.query(q, (err, results) => {
		if (err) throw err;
		
		res.redirect("/panel/people");
	})	
})

router.get('/edit/leader/:id', (req, res) => {
	let id = req.params.id;
	let q = `SELECT * FROM people WHERE id = ${id}`;
	db.query(q, (err, results, fields) => {
		if (err) throw err;

		res.render("panel/edit_people_panel.hbs", {
			username: req.session.username,
			r: results,
			lead_status: true
		})
	})
})

router.get('/edit/employee/:id', (req, res) => {
	let id = req.params.id;
	let q = `SELECT * FROM employee WHERE id = ${id}`;
	db.query(q, (err, results, fields) => {
		if (err) throw err;

		res.render("panel/edit_people_panel.hbs", {
			username: req.session.username,
			r: results,
			lead_status: false
		})
	})
})

router.post('/edit', (req, res) => {
	let q = `UPDATE ${req.body.emp_status} SET ${req.body.field} = '${req.body.content}' WHERE id = ${req.body.idno}`;
	db.query(q, (err, results) => {
		if (err) throw err;

		res.send({ success: "recieved :)" });
	})
})

router.post('/edit/picture', people_upload.single("file_upload"), utils.edit_leader_photo, (req, res) => {
	res.redirect(req.headers.referer);
})

module.exports = router;
