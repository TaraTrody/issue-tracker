import {Router} from 'express';
import { userSignUp } from './user.validation';
import * as userController from './user.controllers';
// import passport from 'passport'

export const userRouter = Router();

  userRouter.post('/signup', userSignUp.validate, userController.signUp);

  userRouter.post('/signin', userController.signIn )

  userRouter.get('/logout', userController.signOut)




// userRouter.get('/test', passport.authenticate('jwt', {session: false}, userController.test))
