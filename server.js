const path = require('path');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
const express = require('express');
const expresshandlebars = require('express-handlebars');
const session = require('express-session');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = expresshandlebars.create({ helpers });

const sess = {
	secret: 'Super secret secret',
	cookie: {
		maxAge: 300000,
		httpOnly: true,
		secure: false,
		sameSite: 'strict',
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

// template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});