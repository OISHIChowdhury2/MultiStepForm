import { body } from 'express-validator';

export const RegisterValidtions = [
  body('firstName').isLength({ min: 3, max: 30 }),
  body('lastName').isLength({ min: 3, max: 30 }).optional(),
  body('email').isEmail(),
  body('password')
    .isLength({ min: 4, max: 100 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    .withMessage('password must have 4 charector '),
  body('role')
    .isIn(['A', 'U'])
    .withMessage('if you are user please using U && or Admin please contact with superadmin'),
];
