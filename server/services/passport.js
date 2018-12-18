const passport = require('passport');
const User = require('../models/user');
const { secret } = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt-nodejs');

const LocalStrategy = require('passport-local');

const localOptions = {
  usernameField: 'email'
};

const localLogin = new LocalStrategy( localOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);

    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false);

      return done(null, user);
    })

  });
});

const jwtOptions= {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

  /*
  *
  *  should destructure paload, but keep that way to remmber
  * { sub }
  *
  *  */
  // see if the user ID in payload exist in db
  // if yes call done with our user, otherwise call done without it
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);
    if (user) return done(null, user);
    return done(null, false);
  })
});

passport.use(jwtLogin);
passport.use(localLogin);
