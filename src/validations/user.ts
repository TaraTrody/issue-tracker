import { check } from 'express-validator';

module.exports = {
  signUpChecks: [
    check('firstName')
      .isLength({ min: 2, max: 30 })
      .withMessage('First name is a required field'),

    check('lastName')
      .isLength({ min: 2, max: 30 })
      .withMessage('First name is a required field'),
    check('email')
      .isEmail()
      .withMessage('Must enter valid email address'),
    check('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters')
      .matches('[0-9]')
      .withMessage('Password must contain at least 1 number')
      .matches('[a-z]')
      .withMessage('Password must contain at least 1 lowercase letter')
      .matches('[A-Z]')
      .withMessage('Password must contain at least 1 uppercase letter'),
  ],
  errorFormatter: ({ location, msg, param, value, nestedErrors }) => ({
    type: 'Error',
    name: 'Signup Failure',
    location,
    message: msg,
    param,
    value,
    nestedErrors,
  }),
};
