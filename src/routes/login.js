const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render("login/login.hbs");
})

router.post('/', (req, res) => {
	req.session.username = req.body.username;
	req.session.permission = req.body.permission;
	req.session.loggedin = true;

	if (req.body.dotcom) {
		res.send({ success: true, url: 'https://mpengs.com/panel' });
	} else {
		res.send({ success: true, url: 'https://mpengs.nyc/panel' });
	}
})

module.exports = router;
