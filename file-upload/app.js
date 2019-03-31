const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

const app = express();

// set storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads');
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now());
	}
});

const upload = multer({ storage });

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/file', upload.single('file'), (req, res, next) => {
	const file = req.file;
	if (!file) {
		const err = new Error('No file selected yet');
		err.status = 400;
		return next(err);
	}
	res.send(file);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
