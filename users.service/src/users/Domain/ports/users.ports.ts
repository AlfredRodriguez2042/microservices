export interface IUserRepository {
  findAll(): any;
  findOne(id: string): any;
  create(user: any): any;
  update(id: string, user: any): any;
  delete(id: string): any;
}
export interface IUsersService {
  findAll(): any;
  findOne(id: string): any;
  create(user: any): any;
  update(id: string, user: any): any;
  delete(id: string): any;
}
export const USER_REPOSITORY = 'USER_REPOSITORY';
export const USER_SERVICE = 'USER_SERVICE';
