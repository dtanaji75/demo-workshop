import jwt from 'jsonwebtoken';

export const createToken = (req, res, next) => {
	try {
		const token = jwt.sign({ foo: 'bar' }, process.env.JWT_TOKEN);
	} catch (error) {
		console.error(error);
	}
};
