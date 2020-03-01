import { Request, Response } from 'express';
import * as AuthService from './user.service';
import { IUserInput } from './user.interfaces';
import { myValidationResult } from './user.validation';
import User from './user.schema'

export const signUp = async (req: Request, res: Response) => {
  const userData: IUserInput = req.body;
  try {
  
    const result = myValidationResult(req);
    const hasErrors = !result.isEmpty();
    if (hasErrors) {
      return res.status(400).send({ errors: result })
    } 
    const userRecord = User.find({email: userData.email})
    if(userRecord) {
      return res.status(400).send("Email already exists")
    }

    const user = await AuthService.signUp(userData);

    return res.json({ user });
  } catch (err) {
    throw err
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password} = req.body;
  try {
    const user = await AuthService.signIn(email, password)
    return res.json(user)
  } catch(err) {
    throw err;
  }
}
