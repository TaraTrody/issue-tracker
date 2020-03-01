import { IUser, IUserInput } from './user.interfaces';
import User from './user.schema';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config'


export const signUp = async (userInput: IUserInput): Promise<{ newUser: IUser; token: string }> => {
 try {
  const hash = await bcrypt(userInput.password, 10);
  const newUser = await User.create({...userInput, password: hash});

  newUser.password = undefined;
  const token = generateToken(newUser);
  

  return {
    newUser,
    token
  }
 } catch(err){
  throw err;
 }
};

export const signIn = async (email: string, password: string): Promise<{token: string }> => {
  try {
    const user = await User.findOne({email: email}).exec()
    if (!user) {
      throw new Error('Invalid username or password');
    } 
    const isValidPassword = await user.validatePassword(password)
    
    if (!isValidPassword) {
      throw new Error('Invalid username or password')
    }


    return {
      token: generateToken(user),
    }

  } catch(err) {

  }
};

const generateToken = (newUser: IUser):string => {
  const today = new Date();
  const expiry = new Date(today);
  expiry.setDate(today.getDate() + 14)

  const data = {
    id: newUser._id,
    name: `${newUser.name.first} ${newUser.name.last}`,
    role: newUser.role,
    exp: expiry.getTime() / 1000
  }
  return jwt.sign(data, config.jwtSecret)

}




