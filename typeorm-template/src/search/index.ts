import { GlobalModuleConfig } from '@global/index';
import { Application } from 'express';
import SearchRouter from '@search/routes/search.router';
export class SearchModule extends GlobalModuleConfig {
  constructor(app: Application) {
    super(app, 'register');
  }

  init() {
    this.app.use(this.pathVx('/'), SearchRouter);
  }
}
