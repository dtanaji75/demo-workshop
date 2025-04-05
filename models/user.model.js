import connection from '../helpers/db_config.js';

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
export default UserModel;
