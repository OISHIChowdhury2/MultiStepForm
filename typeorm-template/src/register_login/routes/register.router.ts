import express, { Router, Request, Response, NextFunction } from 'express';
import Container from 'typedi';
import { wrap } from '@global/middlewares/wraps.middle';
import RegisterService from '@register_login/services/register.service';
import Register from '@database/entity/register/register.entity';
import { validates } from '@global/middlewares/express-validation.middle';
import { RegisterValidtions } from '@register_login/validators/register.validators';
import BadRequestError from '@global/errors/bad-request.error';
import { getLongLivedToken } from '@global/utils/jwt.utils';

const router: Router = express.Router();
import bcrypt from 'bcryptjs';
router.get(
  '/',
  wrap(async (req: Request, res: Response, next: NextFunction) => {
    let apiResposne = await fetch('https://jsonplaceholder.typicodes.com/posts');
    apiResposne = await apiResposne.json();
    return res.status(200).json({ message: apiResposne });
  }),
);

router.get(
  '/all',
  [],
  wrap(async (req: Request, res: Response) => {
    const registerService: RegisterService = Container.get(RegisterService);
    const register: Register[] = await registerService.get();
    return res.status(200).json({
      message: 'Successfull',
      data: register,
    });
  }),
);

router.post(
  '/reg',
  [validates(RegisterValidtions)],
  wrap(async (req: Request, res: Response) => {
    console.log(req.body);
    const registerService: RegisterService = Container.get(RegisterService);
    const register: Register = await registerService.create({
      ...req.body,
    });
    
    return res.status(201).json({
      message: 'Request Successful',
      data: register,
    });
    
  }),
);

router.put(
  '/:id',
  [],
  wrap(async (req: Request<{ id: number }>, res: Response) => {
    const registerService: RegisterService = Container.get(RegisterService);
    const register: Register | null = await registerService.update(req.params.id, req.body);

    return res.status(200).json({
      message: 'update Successful',
      data: register,
    });
  }),
);

router.delete(
  '/:id',
  [],
  wrap(async (req: Request<{ id: number }>, res: Response) => {
    const registerService: RegisterService = Container.get(RegisterService);
    const id: number = await registerService.delete(req.params.id);
    return res.status(200).json({
      message: 'delete done',
      data: {
        id: id,
      },
    });
  }),
);

router.post(
  '/login',
  [],
  wrap(async (req: Request, res: Response) => {
    const registerService: RegisterService = Container.get(RegisterService);
    const user: Register | null = await registerService.getByEmail(req.body.email);
    if (!user) throw new BadRequestError('user not found');
    const isPassMatched: boolean = await bcrypt.compare(req.body.password, user.password);
    if (!isPassMatched) throw new BadRequestError('invalid cedentials');
    const token = await getLongLivedToken({ id: user.id }, '12h');
    return res.status(200).json({
      message: 'login successful',
      data: {
        accessToken: token,
      }
    });
    }),
);


  router.get(
    '/getbyAll',
    [],
    wrap(async (req: Request, res: Response) => {
      const registerService: RegisterService = Container.get(RegisterService);
      const search: Register[] = await registerService.getbyAll(req.body.firstName,req.body.lastName,req.body.email,req.body.role);

      if (!search) throw new BadRequestError('user not found');
      return res.status(200).json({
        message: 'Successfull',
        data: search,
      });
      
      

    }),
);
  
  
export default router;
