const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	req.session.destroy();
	res.redirect('/login?logout=true');
})

module.exports = router;
