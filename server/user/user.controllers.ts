import { Request, Response } from 'express';
import * as AuthService from './user.service';
import { IUserInput } from './user.interfaces';
import { myValidationResult } from './user.validation';

export const signUp = async (req: Request, res: Response) => {
  const userData: IUserInput = req.body;
  const result = myValidationResult(req);
  const hasErrors = !result.isEmpty();
  if (hasErrors) return res.json({ errors: result });

  const user = await AuthService.signUp(userData);

  return res.json({ user });
};
