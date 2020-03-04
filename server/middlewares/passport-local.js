import passport from 'passport'
const LocalStrategy = require('passport-local').Strategy;
import config from '../config'
import User from '../user/user.schema'
import bcrypt from 'bcrypt'

passport.use(new LocalStrategy(
  {
    usernameField: 'email', 
    passReqToCallback: true
  },
  async ( req, username, password, done) => {
    try {
      const user = await User.findOne({email: username});
      if(!user) {
        return done(null, false, {message: 'Invalid username or password'})
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return done(null, false, {message: 'Invalid username or passoword'})
      }
      return done(null, user)
    } catch(err) {
      return done(err)
    }
  }
))

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

const isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}


export default {
 initialize: passport.initialize(),
 session: passport.session(),
 isAuth: isAuthenticated
}

