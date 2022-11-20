import express, { Router, Request, Response } from 'express';
import Container from 'typedi';
import { wrap } from '@global/middlewares/wraps.middle';
import ContactService from '@contact/services/contact.service';
import Contact from '@database/entity/contact/contact.entity';

const router: Router = express.Router();
router.post(
  '/create',
  [],
  wrap(async (req: Request, res: Response) => {
    const contactService: ContactService = Container.get(ContactService);
    const contact: Contact = await contactService.create({
      ...req.body,
    });
    return res.status(201).json({
      message: 'Request Successful',
      data: contact,
    });
  }),
);

router.get(
  '/all',
  [],
  wrap(async (req: Request, res: Response) => {
    const contactService: ContactService = Container.get(ContactService);
    const contact: Contact[] = await contactService.get();
    return res.status(200).json({
      message: 'Successfull',
      data: contact,
    });
  }),
);
export default router;
