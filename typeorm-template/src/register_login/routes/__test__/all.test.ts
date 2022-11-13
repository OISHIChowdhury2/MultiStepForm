import AppDataSource from '@database/index';
import request from 'supertest';
import app from '../../../app';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('Post Endpoints', () => {
  it('should create a new post', async function () {
    const res = await request(app).get('/api/v1/Register/all').send({
      id: 1,
      email: 'oishichowdhury2@gmail.com',
      password: 'Oishi123@',
      firstName: 'oishi',
      lastName: 'chowdhury',
      role: 'A',
    });
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('post');
  });
});

// test('[TEST] register post API Check', async function () {
//   const res = await request(app).post('/api/v1/Register/reg').send({
//     email: 'oishichowdhury2@gmail.com',
//     password: 'Oishi123@',
//     firstName: 'oishi',
//     lastName: 'chowdhury',
//     role: 'A',
//   });
// console.log('POST response body : ', res.body); ///validation checking
//   console.log(res);
//   expect(res.body).toBeTruthy();
// });
