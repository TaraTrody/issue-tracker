import express from 'express';
import * as AuthService from './user.service';
import { IUserInput } from './user.interfaces';
import { myValidationResult } from './user.validation';
import User from './user.schema'

export const signUp = async (req, res) => {
  const userData: IUserInput = req.body;
  // console.log(userData)
  try {
  
    const result = myValidationResult(req);
    const hasErrors = !result.isEmpty();
    if (hasErrors) {
      return res.status(400).send({ errors: result })
    } 
    const userRecord = await User.findOne({email: userData.email})
    console.log(userRecord)
    if(userRecord) {
      return res.status(400).send("Email already kjexists")
    }

    const user = await AuthService.signUp(userData);

    return res.json( user );
  } catch (err) {
    throw err
  }
};

export const signIn = async (req,res) => {
  const { email, password} = req.body;
  try {
    const user = await AuthService.signIn(email, password)
    return res.json(user)
  } catch(err) {
    throw err;
  }
}

export const signOut = async (req,res) => {
  req.logout();
  return res.redirect('/')
}

export const test = async (req, res) => (
  res.send('Hello this protected route worked!')
)
  
