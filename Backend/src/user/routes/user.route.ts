import express, { Router, Request, Response } from 'express';
import { wrap } from '@global/middlewares/wraps.middle';
import UserService from '@user/services/user.service';
import Container from 'typedi';
import User from '@database/entity/user/user.entity';
import lo from 'lodash';
import BadRequestError from '@global/errors/bad-request.error';

import { getLongLivedToken } from '@global/utils/jwt.utils';
import { auth } from '@global/middlewares/auth.middle';

// router instance
const router: Router = express.Router();

/**
 * Get user
 */
router.get(
  '/',
  [auth()],
  wrap(async (req: Request, res: Response) => {
    // eslint-disable-next-line no-console
    console.log(req.user);
    const userService: UserService = Container.get(UserService);
    const users: User[] = await userService.get();
    return res.status(200).json({
      message: 'Request Successful',
      data: users,
    });
  }),
);

/**
 * Create user
 */
router.post(
  '/',
  [],
  wrap(async (req: Request, res: Response) => {
    const userService: UserService = Container.get(UserService);
    const user: User = await userService.create({
      ...req.body,
      createdBy: 'ADMIN',
    });

    return res.status(201).json({
      message: 'Request Successful',
      data: lo.omit(user, ['password']),
    });
  }),
);


/**
 * User Login
 */
router.post(
  '/login',
  [],
  wrap(async (req: Request, res: Response) => {
    const userService: UserService = Container.get(UserService);
    const user: User | null = await userService.getByEmail(req.body.email);
    if (!user) throw new BadRequestError('User not found');
  
    const token = await getLongLivedToken({ id: user.id }, '12h');

    return res.status(200).json({
      message: 'Request Successful',
      data: {
        accessToken: token,
      },
    });
  }),
);

export default router;
