import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
	host: process.env.db_host,
	user: process.env.db_username,
	password: process.env.db_password,
	database: process.env.db_name,
	port: process.env.db_port,
	ssl: {
		rejectUnauthorized: false,
	},
});
connection.connect((err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('Connected to the database');
});
export default connection;
