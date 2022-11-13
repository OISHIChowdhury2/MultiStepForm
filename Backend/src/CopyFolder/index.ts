import { GlobalModuleConfig } from '@global/index';
import { Application } from 'express';
import registerRouter from '@register_login/routes/register.router';

export class RegisterModule extends GlobalModuleConfig {
  constructor(app: Application) {
    super(app, 'register');
  }

  init() {
    this.app.use(this.pathVx('/'), registerRouter);
  }
}
