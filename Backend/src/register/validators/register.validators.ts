import { body } from 'express-validator';

export const RegisterValidtions = [
  body('companyName').isLength({ min: 2, max: 80 }),
  body('representativeName').isLength({ min: 2, max: 80 }),
  body('representativeId').isLength({ min:2, max: 80 }),
  body('companyAddress').isLength({ min: 2, max: 80 }),
  body('companyEmail').isLength({ min: 2, max: 80 }).isEmail,
  body('companyMobile').isLength({ min: 11, max: 12}),
  body('ownerName').isLength({  max: 80 }),
  body('ownerContact').isLength({ min: 2, max: 80 }),
  body('postalCode').isLength({ min: 2, max: 5 }),
]
