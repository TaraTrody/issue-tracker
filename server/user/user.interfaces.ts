export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;

  email: string;
  password: string;
  role: string;
  created: Date;
  updated?: Date;
}

export interface IUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string; 
}
