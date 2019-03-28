const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const Bear = require('./models/bear');
// routes for api
const router = express.Router();

// configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

mongoose.connect(
	'mongodb+srv://ruheni:Ruheni99@cluster0-i11r8.azure.mongodb.net/test?retryWrites=true',
	{ useNewUrlParser: true }
);

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

// basic routes
router.get('/', async (req, res) => {
	await res.json(message);
});

router.post('/bears', (req, res) => {
	let bear = new Bear();
	bear.name = req.body.name;

	bear.save((err, bears) => {
		if (err) {
			res.send(err);
		}
		res.json({ message: 'Bear created!' });
	});
});

router.get('/bears', (req, res) => {
	Bear.find((err, bears) => {
		if (err) res.send(err);

		res.json(bears);
	});
});

router.get('/bears/:bear_id', (req, res) => {
	Bear.findById(req.params.bear_id, (err, bear) => {
		if (err) res.send(err);
		res.json(bear);
	});
});

router.put('/bears/:bear_id', (req, res) => {
	Bear.findByIdAndUpdate(req.params.bear_id, (err, bear) => {
		if (err) res.send(err);

		bear.name = req.body.name;

		bear.save(err => {
			if (err) res.send(err);
			res.json({ message: 'Bear updated!' });
		});
	});
});

router.delete('/bears/:bear_id', (req, res) => {
	Bear.findByIdAndDelete(req.params.bear_id, (err, bear) => {
		if (err) res.send(err);

		res.json({ message: 'Successfully deleted!' });
	});
});

app.listen(port, () => console.log(`Server running on port ${port}`));
