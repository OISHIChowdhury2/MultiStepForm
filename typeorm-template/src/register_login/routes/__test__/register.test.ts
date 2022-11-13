import AppDataSource from '@database/index';
import request from 'supertest';
import app from '../../../app';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

test('[TEST] register post API Check', async function () {
  const res = await request(app)
    .post('/api/v1/Register/reg')

    .send({
      email: 'oishichowdhury2@gmail.com',
      password: 'Oishi123@',
      firstName: 'oishi',
      lastName: 'chowdhury',
      role: 'A',
    });
  // console.log(res);

  expect(res.body).toBeTruthy();
});
