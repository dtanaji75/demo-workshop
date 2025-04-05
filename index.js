import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connection from './helpers/db.helper.js';
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
	res.status(200).send('Hello world');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening to PORT ${PORT}`);
});
