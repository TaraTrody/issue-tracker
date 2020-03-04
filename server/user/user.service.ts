import { IUser, IUserInput } from './user.interfaces';
import User from './user.schema';
import bcrypt from 'bcrypt';



export const signUp = async (userInput: IUserInput): Promise<{ newUser: IUser;}> => {
 try {
  const hash = await bcrypt.hash(userInput.password, 10);
  const newUser = await User.create({...userInput, password: hash});

  newUser.password = undefined;
  
  return {
    newUser
  }
 } catch(err){
  throw err;
 }
};





