import { GlobalModuleConfig } from '@global/index';
import { LogModule } from '@log/index';
import { ContactModule } from '@contact/index';
import { Application } from 'express';
import { RegisterModule } from '@register_login/index';
export default function configureRoutes(app: Application): GlobalModuleConfig[] {
  const modules: GlobalModuleConfig[] = [];

  // modules.push(new UserModule(app));
  modules.push(new LogModule(app));
  modules.push(new RegisterModule(app));
  modules.push(new ContactModule(app));

  return modules;
}
