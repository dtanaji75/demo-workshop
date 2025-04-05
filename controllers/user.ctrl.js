import UserModel from '../models/user.model.js';
import schemaValidator from '../helpers/validator.helper.js';
import { createToken } from '../helpers/jwt.helper.js';
import {
	register as registerSchema,
	login as loginSchema,
	update as updateSchema,
	get as getSchema,
	deleteSchema,
} from '../schema/users.schema.js';

export const register = async (req, res) => {
	try {
		const validator = schemaValidator(registerSchema, req.body);
		if (!validator.status) {
			res.status(500).json(validator);
			return;
		}
		const response = await UserModel.add(req.body);
		if (response.status) {
			const userToken = createToken({ ...req.body, id: response.id });
			if (!userToken.status) {
				res.status(400).json({
					status: false,
					message:
						'User added successfully but problem in creating token. Please try again with login.',
				});
				return;
			}
			response.token = userToken.token;
		}
		const status = response.status ? 201 : 500;
		res.status(status).json(response);
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: false, message: error.message });
	}
};
export const login = async (req, res) => {
	try {
		const validator = schemaValidator(loginSchema, req.body);
		if (!validator.status) {
			res.status(500).json(validator);
			return;
		}
		const condition = `and username=? and password=?`;
		const binds = [req.body.username, req.body.password];
		const response = await UserModel.get(condition, binds);
		if (response.status && response.rows.length > 0) {
			const userToken = createToken(response.rows[0]);
			if (userToken.status) {
				res.status(200).json({
					status: true,
					message: 'Login successfully done.',
					token: userToken.token,
				});
			} else {
				res
					.status(500)
					.json({ status: false, message: 'Problem in creating token' });
			}
		} else {
			res.status(500).send(response.message);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: 500, message: error.message });
	}
};
export const update = async (req, res) => {
	try {
		const validator = schemaValidator(updateSchema, req.body);
		if (!validator.status) {
			res.status(500).json(validator);
			return;
		}
		const binds = [
			req.body.username,
			req.body.password,
			req.body.name,
			req.body.user.id,
		];
		const response = await UserModel.update(binds);
		if (response.status) {
			const userToken = createToken({
				name: req.body.name,
				username: req.body.username,
				id: req.body.user.id,
			});
			if (!userToken.status) {
				res.status(400).json({
					status: false,
					message:
						'User added successfully but problem in creating token. Please try again with login.',
				});
				return;
			}
			response.token = userToken.token;
		}
		const status = response.status ? 200 : 500;
		res.status(status).json(response);
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: 500, message: error.message });
	}
};
export const get = async (req, res) => {
	try {
		const validator = schemaValidator(getSchema, req.body);
		if (!validator.status) {
			res.status(500).json(validator);
			return;
		}
		res.status(200).json(req.body.user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: 500, message: error.message });
	}
};
