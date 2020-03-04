import express from 'express';
import * as AuthService from './user.service';
import { IUserInput } from './user.interfaces';
import { myValidationResult } from './user.validation';
import User from './user.schema'
import passport from 'passport'


export const signUp = async (req, res) => {
  const userData: IUserInput = req.body;
  try {
    console.log(userData)
    const result = myValidationResult(req);
    const hasErrors = !result.isEmpty();
    if (hasErrors) {
      return res.status(400).send({ errors: result })
    } 
    const userRecord = await User.findOne({email: userData.email})
  
    if(userRecord) {
      return res.status(400).send("Email already exists")
    }

    const user = await AuthService.signUp(userData);
   
   if (user) return res.redirect('/')
   return new Error('Failed to save user for unknown reasons');

  } catch (err) {
    throw err
  }
};

export const logIn = (req, res, next) => {
  passport.authenticate("local", (err, user, info ) =>{
    if (err) { return next(err) }

    if(!user) {return res.redirect('/login')}

    req.logIn(user, (err) => {
      if (err) {return next(err) }
      console.log(req.user)
      return res.redirect('/dashboard')
    })
  })(req, res, next)
}

  export const logOut = (req,res) => {
  req.logout();
  res.redirect('/');
}

export const test = (req, res, next) => {
 console.log(req.session)
  return res.send('logged in')
}
