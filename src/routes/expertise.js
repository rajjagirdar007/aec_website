const express = require('express');
const path = require('path');
const router = express.Router();
const db = require(path.join(__dirname, "../tools/db_irzaw.js"));

router.get('/', (req, res) => {
	res.render("expertise/expertise.hbs");
})

router.get('/expertise_details', (req, res) => {
  	res.render("expertise/expertise_details.hbs");
 
})
router.get('/expertise_details_new', (req, res) => {
  	res.render("expertise/expertise_details_new.hbs");
 
})
module.exports = router;
