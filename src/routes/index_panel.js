const path = require('path');
const fs = require('fs');
const express = require('express');

const router = express.Router();

const db = require(path.join(__dirname, "../tools/db_mycivvi.js"));
const login = require(path.join(__dirname, "../middleware/login.js"));

router.use(login.login_status);

router.get('/', (req, res) => {
	let index_pics = [];
	let q = 'SELECT * FROM index_pictures';
	db.query(q, (err, rows) => {
		if (err) throw err;

		let chunk = 4;
		for (let i = 0; i < rows.length; i += chunk) {
			if (rows[i].type == "desktop" && rows[i].side == "left") {
				let obj = {
					slide_no: rows[i].slide_no,
					hex: `background-color:${rows[i].hex_code}`,
					d_left: rows[i].main_photo,
					d_left_path: `/images/old_index/${rows[i].main_photo}`,
					m_left: rows[i + 2].main_photo,
					m_left_path: `/images/old_index/${rows[i + 2].main_photo}`,
					d_right: rows[i + 1].main_photo,
					d_right_path: `/images/old_index/${rows[i + 1].main_photo}`,
					m_right: rows[i + 3].main_photo,
					m_right_path: `/images/old_index/${rows[i + 3].main_photo}`
				}

				index_pics.push(obj);
			}

		}

//		req.session.highest_slide_no = Math.max(...slide_numbers);

		res.render("panel/index_panel.hbs", {
			username: req.session.username,
			pics: index_pics
		})
	})
})

module.exports = router;
