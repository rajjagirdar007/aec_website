const path = require('path');
const express = require('express');

const router = express.Router();

const login = require(path.join(__dirname, "../middleware/login.js"));

router.use(login.login_status);

router.get('/', (req, res) => {
	res.render('panel/panel_index.hbs', { username: req.session.username });
})

module.exports = router;
