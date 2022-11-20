import { IContact } from '@contact/types/contact.interface';
import Contact from '@database/entity/contact/contact.entity';
import AppDataSource from '@database/index';
import BaseService from '@global/types/base.interface';
import { Service } from 'typedi';
import { EntityManager } from 'typeorm';

@Service()
export default class ContactService implements BaseService {
  constructor() {}

  async create(data: IContact, tem?: EntityManager): Promise<Contact> {
    const manager: EntityManager = tem || AppDataSource.manager;

    let newContact: Contact = await manager.getRepository(Contact).create({
      ...data,
    });
    newContact = await manager.getRepository(Contact).save(newContact);
    return newContact;
  }

  async get(tem?: EntityManager): Promise<Contact[]> {
    const manager: EntityManager = tem || AppDataSource.manager;
    return await manager.getRepository(Contact).find({
      order: { createdAt: 'DESC' },
    });
  }
}
