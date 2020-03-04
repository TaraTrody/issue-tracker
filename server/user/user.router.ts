import {Router} from 'express';
import { userSignUp } from './user.validation';
import * as userController from './user.controllers';
import passport from 'passport'
import auth from '../middlewares/passport-local'

export const userRouter = Router();

userRouter.post('/signup', userSignUp.validate, userController.signUp);

userRouter.post('/login', userController.logIn)

userRouter.get('/logout', userController.logOut)

userRouter.get('/test', auth.isAuth, userController.test)
