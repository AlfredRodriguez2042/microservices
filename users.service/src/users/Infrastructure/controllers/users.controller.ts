import { Controller, Inject, UsePipes } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ZodValidationPipe } from '@src/users/Application/pipes/zod.pipe';
import {
  ICreateUserDto,
  IUpdateUserDto,
  createUserDto,
  updateUserDto,
} from './../../Domain/model/user.model';
import { IUsersService, USER_SERVICE } from './../../Domain/ports/users.ports';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(USER_SERVICE) private readonly usersService: IUsersService,
  ) {}

  @MessagePattern({ cmd: 'createUser' })
  @UsePipes(new ZodValidationPipe({ body: createUserDto }))
  create(@Payload() createUserDto: Required<ICreateUserDto>): any {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern('findAllUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern('findOneUser')
  findOne(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  @MessagePattern('updateUser')
  @UsePipes(new ZodValidationPipe({ body: updateUserDto }))
  update(@Payload() updateUserDto: IUpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto.body);
  }

  @MessagePattern('removeUser')
  remove(@Payload() id: string) {
    return this.usersService.delete(id);
  }
}
