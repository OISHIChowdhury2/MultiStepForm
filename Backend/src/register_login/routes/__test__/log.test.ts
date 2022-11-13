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
  const res = await request(app).post('/api/v1/Register/reg').send({
    email: 'oishichowdhury2@gmail.com',
    password: 'Oishi123@',
    firstName: 'oishi',
    lastName: 'chowdhury',
    role: 'A',
  });
  // console.log('POST response body : ', res.body); ///validation checking
  //   console.log(res);
  expect(res.body).toBeTruthy();
});

test('[TEST] login post API Check', async function () {
  const res = await request(app).post('/api/v1/Register/login').send({
    email: 'oishichowdhury2@gmail.com',
    password: 'Oishi123@',
  });
  // // console.log(send.body.id);
  // expect(res.body).toEqual(['oishichowdhury2@gmail.com']);
  expect(res.body).toBeTruthy();
  expect(res.status).toBe(200);
  // expect(res.body).toEqual(expect.arrayContaining(['oishichowdhury2@gmail.com']));
  // expect(res.body).toEqual(['oishichowdhury2@gmail.com', 'Oishi123@']);
  // expect(res.body).toEqual(expect.arrayContaining(['email']));
  // expect(res.body).toHaveLength(10);
  // expect(send.body.id).toBe(200);
});

// describe('Space test suite', () => {
//   it('tests /destinations endpoints', async () => {
//     const response = await request(app).get('/space/destinations');
//     expect(response.body).toEqual(['Mars', 'Moon', 'Earth', 'Mercury', 'Venus', 'Jupiter']);
//     expect(response.body).toHaveLength(6);
//     expect(response.statusCode).toBe(200);
//     // Testing a single element in the array
//     expect(response.body).toEqual(expect.arrayContaining(['Earth']));
//   });

//   // Insert other tests below this line

//   // Insert other tests above this line
// });
