const path = require('path');
const express = require('express');

const router = express.Router();
const db = require(path.join(__dirname, "../tools/db_mycivvi.js"));

router.get('/', (req, res) => {
	let q = 'SELECT * FROM about';
	db.query(q, (err, results) => {
		if (err) throw err;

		let results_formatted = results[0].images.replace(/,\s*$/, "");
		let results_images = results_formatted.split(',');
		res.render("about/about.hbs", {
			data: results,
			images: results_images
		})
	})
})

module.exports = router;
