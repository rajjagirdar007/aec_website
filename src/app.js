const path = require('path');
const express = require('express');
const body_parser = require('body-parser');
const hbs = require('hbs');
const session = require('express-session');

const app = express();
const port = 3004;

const public_dir_path = path.join(__dirname, "../public");
const views_dir_path = path.join(__dirname, "../templates/views");
const partials_dir_path = path.join(__dirname, "../templates/partials");

const index = require(path.join(__dirname, "./routes/index.js"));
const about = require(path.join(__dirname, "./routes/about.js"));
const expertise = require(path.join(__dirname, "./routes/expertise.js"));
const projects = require(path.join(__dirname, "./routes/projects.js"));
const people = require(path.join(__dirname, "./routes/people.js"));
const offices = require(path.join(__dirname, "./routes/offices.js"));
const careers = require(path.join(__dirname, "./routes/careers.js"));
const login = require(path.join(__dirname, "./routes/login.js"));
const panel = require(path.join(__dirname, "./routes/panel.js"));
const logout = require(path.join(__dirname, "./routes/logout.js"));
const people_panel = require(path.join(__dirname, "./routes/people_panel.js"));
const index_panel = require(path.join(__dirname, "./routes/index_panel.js"));
const career_panel = require(path.join(__dirname, "./routes/career_panel.js"));

app.use(express.static(public_dir_path));
app.set("view engine", '.hbs');
app.set("views", views_dir_path);
hbs.registerPartials(partials_dir_path);
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(session({ secret: 'pulled_up_w_the_mob!', resave: false, saveUninitialized: true }));

app.use('/', index);
app.use('/about', about);
app.use('/expertise', expertise);
app.use('/projects', projects);
app.use('/leadership', people);
app.use('/offices', offices);
app.use('/career', careers);
app.use('/login', login);
app.use('/panel', panel);
app.use('/logout', logout);
app.use('/panel/people', people_panel);
app.use('/panel/index', index_panel);
app.use('/panel/career', career_panel);
//also include 404 page for any other

app.listen(port, () => {
	console.log(`mpengs.com up on port ${port}`);
})
