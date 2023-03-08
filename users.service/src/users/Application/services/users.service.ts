import { Inject, Injectable } from '@nestjs/common';

import { IConfigClient } from '@src/users/Domain/ports/config.port';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../Domain/ports/users.ports';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @Inject('config')
    private readonly config: IConfigClient,
  ) {}
  async create(createUserDto: any) {
    this.config.get('config');
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, updateUserDto: any) {
    return this.userRepository.update(id, updateUserDto);
  }

  delete(id: string) {
    return this.userRepository.delete(id);
  }
}
