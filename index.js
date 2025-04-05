import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connection from './helpers/db.helper.js';
import router from './routes/index.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
	res.status(200).send('Hello world');
});
app.use('/api', router);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening to PORT ${PORT}`);
});
