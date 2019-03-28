const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// routes for api
const router = express.Router();

// configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

const port = process.env.PORT || 3000;

// dummy data
let message = [
	{
		msg: 'Huraay! this works, for now'
	},
	{
		msg: 'This is the second object in the arra'
	}
];

// test route
router.get('/', async (req, res) => {
	await res.json(message);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
