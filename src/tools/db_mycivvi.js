const mysql = require('mysql');

const connection = mysql.createConnection({
	host:'127.0.0.1',
	user:'mpengslocal',
	password:'Password123',
	database:'mycivvi'
});

connection.connect((err)=>{
	if (err) throw err;
	console.log('Connected to mycivvi DB!');
});

module.exports = connection; 
