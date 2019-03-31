const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.single('file'), (req, res, next) => {
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
