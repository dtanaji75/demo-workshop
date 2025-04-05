import connection from '../helpers/db.helper.js';

const ProductModel = {};

ProductModel.get = async (condition = '', binds = []) => {
	try {
		const query = `select id, name, size, image, price from products where 1=1 ${condition}`;
		const [rows, fields] = await connection.promise().query(query, binds);
		return {
			status: true,
			message: 'Product details fetched sucessfully',
			rows,
		};
	} catch (error) {
		console.log(error);
		return { status: false, message: error.message };
	}
};
export default ProductModel;
