import express from 'express';
import { userLogin, userLogout, userRegister } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/register', userRegister);
userRouter.post('/login',userLogin);
userRouter.get('/logout', userLogout);

export default userRouter;