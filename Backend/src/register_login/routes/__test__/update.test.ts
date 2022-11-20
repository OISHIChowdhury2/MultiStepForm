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
  // console.log(res);
  expect(res.body).toBeTruthy();
});

test('[TEST] register Update API Check', async function () {
  const res = await request(app).put(`/api/v1/Register/1`).send({
    email: 'mimchowdhury2@gmail.com',
    password: 'Mim23@',
    firstName: 'Mim',
    lastName: 'chowdhury',
    role: 'A',
  });
  // console.log(res);
  // expect(res.body.updatedAt).toBeDefined();
  console.log('UPDATED RESPONSE : ', res.body);
  expect(res.body).toBeTruthy();

  // console.log(res.body);
  // console.log(res);
});

// test('Update user now', async (done) => {
//       console.log('User to be updated : ', data.userId);

//       const response = await request.request
//         .put(`api/users/${data.userId}`)
//         .send(newDetails) //call put() of supertest
//         //.set('Authorization', `Token ${request.token}`)
//         .expect(200);
//       expect(response.body.updatedAt).toBeDefined();
//       console.log('UPDATED RESPONSE : ', response.body);
//       done();
//     });
//   } catch (err) {
//     console.log('ERROR : ', err);
//   }
