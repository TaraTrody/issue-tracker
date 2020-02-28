import { IUser, IUserInput } from './user.interfaces';
import User from './user.schema';

export const signUp = async (userInput: IUserInput): Promise<{ user: IUser; token: string }> => {};

export const signIn = async (email: string, password: string): Promise<{ user: IUser; token: string }> => {};

const generateToken = () => {

}
