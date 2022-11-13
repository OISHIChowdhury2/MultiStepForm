import Register from '@database/entity/register/register.entity';
import AppDataSource from '@database/index';
import BaseService from '@global/types/base.interface';
import { IRegister } from '@register_login/types/register.interface';
import { Service } from 'typedi';
import { EntityManager } from 'typeorm';

@Service()
export default class RegisterService implements BaseService {
  constructor() {}

  async create(data: IRegister, tem?: EntityManager): Promise<Register> {
    const manager: EntityManager = tem || AppDataSource.manager;

    let newRegister: Register = await manager.getRepository(Register).create({
      ...data,
    });
    newRegister = await manager.getRepository(Register).save(newRegister);
    return newRegister;
  }

  async get(tem?: EntityManager): Promise<Register[]> {
    const manager: EntityManager = tem || AppDataSource.manager;
    return await manager.getRepository(Register).find({
      order: { createdAt: 'DESC' },
    });
  }
  async update(id: number, data: IRegister, tem?: EntityManager): Promise<Register | null> {
    const manager: EntityManager = tem || AppDataSource.manager;
    return await manager
      .createQueryBuilder()
      .update(Register)
      .set({ ...data })
      .where('id= :id', {
        id,
      })
      .returning('*')
      .execute()
      .then((response) => {
        return response.raw[0];
      });
  }

  async delete(id: number, tem?: EntityManager): Promise<number> {
    const manager: EntityManager = tem || AppDataSource.manager;
    await manager.getRepository(Register).delete(id);
    return id;
  }

  async getByEmail(email: string, tem?: EntityManager): Promise<Register | null> {
    const manager: EntityManager = tem || AppDataSource.manager;
    return await manager.getRepository(Register).findOne({
      where: {
        email: email,
      },
      select: ['id', 'password'],
    });
  }

  async getbyAll(firstName:string,lastName:string,email:string,role:string,tem?: EntityManager):
   Promise<Register[]> {
    const manager: EntityManager = tem || AppDataSource.manager;
    const search : Register[] = await manager.getRepository(Register)
    .createQueryBuilder("Register")
    .where({firstName:`%${firstName}%`})
    .orWhere({lastName:`%${lastName}%`})
    .orWhere({email:`%${email}%`})
    .orWhere({role:`%${role}`})
    .getMany();
    console.log(search);
    return search;
   
    
    }
    // .then((response) => {
    // return response.raw[0];
    };
  


