const User = require('../models/user');
const { secret } = require('../config')
const jwt = require('jwt-simple');

function tokenForUser({ id }) {
  const iat = new Date().getTime();
  return jwt.encode({ sub: id, iat }, secret)
}

exports.signIn = function (req, res) {
  res.json({ token: tokenForUser(req.user) });
};

exports.signUp = function(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({error: 'You must provide email and password'})
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) return next(err);

    if (existingUser) {
      return res.status(422).send({ error: 'Email already in use' });
    }

    const user = new User({
      email,
      password
    })

    user.save(err => {
      if (err) return next(err);
      res.json({ token: tokenForUser(user) });
    })
  });
};