import JWTStrategy from ('passport-jwt').Strategy;
import ExtractJwt from ('passport-jwt').ExtractJwt;
import config from '../config'

let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = config.jwtSecret

passport.use(new JwtStrategy(options, async function(jwt_payload, done) {
  try {
    
   } catch(err) {
    throw err
   }
})) 