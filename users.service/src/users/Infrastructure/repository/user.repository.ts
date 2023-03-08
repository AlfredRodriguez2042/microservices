import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from '../../Domain/entities/users.entity';
import { IUserRepository } from '../../Domain/ports/users.ports';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UsersEntity) private repository: Repository<UsersEntity>,
  ) {}
  async findAll(): Promise<any> {
    return await this.repository.find();
  }
  async findOne(id: string): Promise<any> {
    return await this.repository.findOneBy({ id });
  }
  async create(user: any): Promise<any> {
    return await this.repository.create(user);
  }
  async update(id: string, user: any): Promise<any> {
    return await this.repository.update({ id }, user);
  }
  async delete(id: string): Promise<any> {
    return await this.repository.delete({ id });
  }
}
