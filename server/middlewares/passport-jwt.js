import JWTStrategy from ('passport-jwt').Strategy;
import ExtractJwt from ('passport-jwt').ExtractJwt;
import passport from 'passport'
import config from '../config'
import User from '../user/user.schema'

let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = config.jwtSecret

passport.use(new JwtStrategy(options, async function(jwt_payload, done) {
  try {
    const user = await User.findOne({id: jwt_payload.id})
    if (user) {
      return done(null, user)
    } else {
      return done(null, false, {message: 'Access Denied'})
    }
   } catch(err) {
    return done(err, false)
   }
})) 