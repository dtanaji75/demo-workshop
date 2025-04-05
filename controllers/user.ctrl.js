import UserModel from '../model/user.model.js';

export const register = (req, res) => {
	UserModel.add(req.body).then((data) => {
		res.status(data.status).send(data.message);
	});
};
