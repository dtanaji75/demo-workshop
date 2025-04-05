import express from 'express';
import { register, login, update, get } from '../controllers/user.ctrl.js';
import { verfiyToken } from '../helpers/jwt.helper.js';
import { getProduct } from '../controllers/product.ctrl.js';

const router = express.Router();

router.post('/user/register', register);
router.post('/user/login', login);
router.put('/user/update', verfiyToken, update);
router.get('/user/get', verfiyToken, get);
router.get('/products/get', verfiyToken, getProduct);
export default router;
