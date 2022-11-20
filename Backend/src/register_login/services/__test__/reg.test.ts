import Register from '@database/entity/register/register.entity';
import AppDataSource from '@database/index';
import Container from 'typedi';
import RegisterService from '../register.service';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

test(`[TEST] Create Register test`, async () => {
  const registerService: RegisterService = Container.get(RegisterService);
  const newLogin: Register = await registerService.create({
    email: 'oishichowdhury2@gmail.com',
    password: 'Oishi123@',
    firstName: 'oishi',
    lastName: 'chowdhury',
    role: 'admin',
  });
  // console.log(newLogin);
  expect(newLogin.id).toBeTruthy();
  // expect(newLogin.id).toBe(201);
  // expect(newLogin.status).toBe(201);
});
