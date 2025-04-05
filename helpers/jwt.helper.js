import jwt from 'jsonwebtoken';

export const createToken = (data) => {
	try {
		const token = jwt.sign(data, process.env.JWT_TOKEN);
		return { status: true, token };
	} catch (error) {
		console.error(error);
		return { status: false };
	}
};
export const verfiyToken = (req, res, next) => {
	try {
		const token = req.headers.authorization || '';
		if (!token) {
			res.status(401).json({ status: 401, message: 'Invalid token.' });
		}
		const user = jwt.verify(
			token.replace('Bearer ', ''),
			process.env.JWT_TOKEN
		);
		if (!req.body) {
			req.body = {};
		}
		delete user.iat;
		req.body.user = user;
		next();
	} catch (error) {
		console.log(error);
		next();
	}
};
