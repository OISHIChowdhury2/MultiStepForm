// import Register from "@database/entity/register/register.entity";
// import AppDataSource from "@database/index";
// import BaseService from "@global/types/base.interface";
// import { ISearchUser } from "@search/types/serach.interface";
// import { Service } from "typedi";
// import { EntityManager } from "typeorm";

// @Service()
// export default class UserService implements BaseService {
//   constructor() {}

//      async get(tem?: EntityManager): Promise<Register[]> {
//           const manager: EntityManager = tem || AppDataSource.manager;
//           return await manager.getRepository(Register).findBy({
//           where: ({firstName:"%${firstName}%",lasttName:"%${lastName}%",email:"%${email}%",role:"%${role}%"}),
//           getMany()
//           // .then((response) => {
//           // return response.raw[0];
//           })
//         }



// }