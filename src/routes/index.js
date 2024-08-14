const express = require('express');

const router = express.Router();

/*
router.get('/', (req, res) => {
	res.send('hello');
})
app.get("/", (req, res) => {
    res.render(path.join(__dirname, "../../templates/views/home_page/indexpage.hbs"));
    console.log(viewsDirPath);
});
*/
router.get('/', (req, res) => {
	res.render("index");
})

module.exports = router;
