const path = require('path');
const express = require('express');

const router = express.Router();
const db = require(path.join(__dirname, "../tools/db_irzaw.js"));

router.get('/', (req, res) => {
	res.render("projects/projects.hbs");
})

router.get('/details/:id', (req, res) => {
	let id = req.params.id;
	let q = `SELECT * FROM projects WHERE id = ${id}`;
	db.query(q, (err, results) => {
		if (err) throw err;

		let imgs = results[0].image.split(',');
		res.render("projects/project_details.hbs", {
			data: results[0],
			img: imgs
		})
	})
})
/*
app.get("/projectDetails/:id", function(req, res) {
    var id = req.params.id;
    var sql = `SELECT * FROM projects WHERE id= "${id}"`;
    connection.query(sql, function(err, results) {
        if (err) throw err;
        console.log(results);
	const imgs = results[0].image.split(',');
        var r = results[0];
        console.log(r);
        res.render(viewsDirPath + "/projects/projectDetails.hbs", {
            data: r,
            img: imgs
        })

        console.log(imgs)
    });
});*/
module.exports = router;
