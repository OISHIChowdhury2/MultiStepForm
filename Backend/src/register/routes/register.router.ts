import express, { Router, Request, Response, NextFunction } from 'express';
import Container from 'typedi';
import { wrap } from '@global/middlewares/wraps.middle';
import Register from '@database/entity/register/register.entity';
// import { validates } from '@global/middlewares/express-validation.middle';
// import BadRequestError from '@global/errors/bad-request.error';
// import { getLongLivedToken } from '@global/utils/jwt.utils';
const router: Router = express.Router();

import RegisterService from '@register/services/register.service';
// import { RegisterValidtions } from '@register/validators/register.validators';
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
  [],
  wrap(async (req: Request, res: Response) => {
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
  'update/:id',
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


  

  
  
export default router;