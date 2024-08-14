const fs = require('fs');
const path = require('path');

const db = require(path.join(__dirname, "./db_mycivvi.js"));

module.exports.add_leader = (req, res, next) => {
	let fname = req.body.first_name;
	let lname = req.body.last_name;
	let desc = req.body.description;
	let role = req.body.role;
	let personal_file;

	let leadership_file = req.files.leadership_picture[0].originalname;

	fs.rename(path.join(__dirname, `../../public/images/people/${leadership_file}`), path.join(__dirname, `../../public/images/people/leadership/${fname}_${lname}_${leadership_file}`), (err) => {
		if (err) throw err;
	})

	if (req.files.personal_picture) {
		personal_file = req.files.personal_picture[0].originalname;
		fs.rename(path.join(__dirname, `../../public/images/people/${personal_file}`), path.join(__dirname, `../../public/images/people/personal/${fname}_${lname}_${personal_file}`), (err) => {
			if (err) throw err;
		})
	}

	let q = `INSERT INTO people (first_name, last_name, leadership_picture, personal_picture, description, role) VALUES ('${fname}', '${lname}', '${fname}_${lname}_${leadership_file}', '${fname}_${lname}_${personal_file}', '${desc}', '${role}')`; 
	db.query(q, (err, results, fields) => {
		if (err) throw err;

		next();
	})	
}

module.exports.add_employee = (req, res, next) => {
	let fname = req.body.first_name;
	let lname = req.body.last_name;
	let desc = req.body.description;
	let role = req.body.role;
	let personal_file;

	let leadership_file = req.files.leadership_picture[0].originalname;

	fs.rename(path.join(__dirname, `../../public/images/people/${leadership_file}`), path.join(__dirname, `../../public/images/people/leadership/${fname}_${lname}_${leadership_file}`), (err) => {
		if (err) throw err;
	})

	if (req.files.personal_picture) {
		personal_file = req.files.personal_picture[0].originalname;
		fs.rename(path.join(__dirname, `../../public/images/people/${personal_file}`), path.join(__dirname, `../../public/images/people/personal/${fname}_${lname}_${personal_file}`), (err) => {
			if (err) throw err;
		})
	}

	let q = `INSERT INTO employee (first_name, last_name, leadership_picture, personal_picture, description, role) VALUES ('${fname}', '${lname}', '${fname}_${lname}_${leadership_file}', '${fname}_${lname}_${personal_file}', '${desc}', '${role}')`; 
	db.query(q, (err, results, fields) => {
		if (err) throw err;

		next();
	})	
}

module.exports.edit_leader_photo = (req, res, next) => {
	let old_file = req.body.file_name;
	let new_file = req.file.originalname;
	let type = req.body.file_type;
	let id = req.body.id;

	fs.rename(path.join(__dirname, `../../public${old_file}`), path.join(__dirname, `../../public/old${old_file}`), (err) => {
		if (err) throw err;
		
		fs.rename(path.join(__dirname, `../../public/images/people/${new_file}`), path.join(__dirname, `../../public/images/people/${type}/${new_file}`), (err) => {
			if (err) throw err;

			let q = `UPDATE people SET ${type}_picture = '${new_file}' WHERE id = ${id}`;
			db.query(q, (err, results, fields) => {
				if (err) throw err;

				next();
			})
		})
	})
}
