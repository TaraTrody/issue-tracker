import { IUser } from './user.interfaces';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: { unique: true },
    // validate: {
    //   validator: email => UserSchema.doesNotExist({ email }),
    //   message: 'Email already exists',
    // },
  },
  password: {
    type: String,
    index: { unique: true },
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});

// UserSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();

//   try {
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;
//     return next();
//   } catch (err) {
//     next(err);
//   }
// });

UserSchema.statics.doesNotExist = async function(field) {
  return this.where(field).countDocuments() === 0;
};

const User = mongoose.model<IUser & mongoose.Document>('User', UserSchema)

export default User;
