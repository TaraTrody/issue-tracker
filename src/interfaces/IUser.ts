export interface IUser {
  _id: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  password: string;
  role: string;
  created: Date;
  updated?: Date;
}
