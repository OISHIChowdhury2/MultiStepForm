import { GlobalModuleConfig } from '@global/index';
import { Application } from 'express';
import contactRouter from '@contact/routes/contact.router';
export class ContactModule extends GlobalModuleConfig {
  constructor(app: Application) {
    super(app, 'contact');
  }

  init() {
    this.app.use(this.pathVx('/'), contactRouter);
  }
}
