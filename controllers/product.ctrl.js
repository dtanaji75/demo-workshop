import ProductModel from '../models/product.model.js';
import schemaValidator from '../helpers/validator.helper.js';
import { productSchema } from '../schema/product.schema.js';

export const getProduct = async (req, res) => {
	try {
		const validator = schemaValidator(productSchema, req.body);
		if (!validator.status) {
			res.status(500).json(validator);
			return;
		}
		const products = await ProductModel.get();

		const status = products.status ? 200 : 500;

		res.status(status).json(products);
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, message: error.message });
	}
};
