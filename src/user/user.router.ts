import express from 'express';
import { userSignUp } from './user.validation';
import * as userController from './user.controllers';

export const userRouter = express.Router();

userRouter.post('/signup', userSignUp.validate, userController.signUp);
