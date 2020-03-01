import express from 'express';
import { userSignUp } from './user.validation';
import * as userController from './user.controllers';

export const userRouter = express.Router();

userRouter.post('/signup', userSignUp.validate, userController.signUp);

userRouter.post('/signin', userController.signIn )

userRouter.get('/logout', userController.signOut)
