module.exports.login_status = (req, res, next) => {
	if (req.session.loggedin) {
		next();
	} else {
		res.redirect('/login');
	}
}

module.exports.career_login = (req, res, next) => {
	if (req.session.career_login) {
		next();
	} else {
		res.redirect('/career/panel');
	}
}
