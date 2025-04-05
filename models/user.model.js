import connection from '../helpers/db.helper.js';

const UserModel = {};

UserModel.add = async (user) => {
	try {
		const query = `insert into users (username, password, name) VALUES(?,?,?)`;
		await connection
			.promise()
			.query(query, [user.username, user.password, user.name]);
		return { status: 201, message: 'User created sucessfully' };
	} catch (error) {
		console.log(error);
		return { status: 500, message: error.message };
	}
};
UserModel.update = async (user) => {
	try {
		const query = `update users  set username = ?, password = ?, name = ? where id = ?`;
		await connection
			.promise()
			.query(query, [user.username, user.password, user.name, user.id]);

		const [rows, field] = await connection
			.promise()
			.query(`SELECT LAST_INSERT_ID()`);
		return { status: true, message: 'User updated sucessfully', id: rows[0] };
	} catch (error) {
		console.log(error);
		return { status: false, message: error.message };
	}
};
UserModel.get = async (condition = '', binds) => {
	try {
		const query = `select id, name, username from users where 1=1 ${condition}`;
		const [rows, fields] = await connection.promise().query(query, binds);
		return { status: true, message: 'User details fetched sucessfully', rows };
	} catch (error) {
		console.log(error);
		return { status: false, message: error.message };
	}
};
export default UserModel;
