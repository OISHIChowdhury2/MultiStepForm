import { GlobalModuleConfig } from '@global/index';
import { Application } from 'express';
import { RegisterModule } from 'register/index';
import { UserModule } from '@user/index';
export default function configureRoutes(app: Application): GlobalModuleConfig[] {
  const modules: GlobalModuleConfig[] = [];

  modules.push(new UserModule(app));
  modules.push(new RegisterModule(app));

  return modules;
}
