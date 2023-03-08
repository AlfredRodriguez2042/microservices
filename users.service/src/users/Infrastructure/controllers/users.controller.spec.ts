import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../Application/services/users.service';
import { UserRepository } from '../repository/user.repository';
import { USER_REPOSITORY } from './../../Domain/ports/users.ports';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { useClass: UserRepository, provide: USER_REPOSITORY },
      ],
    }).compile();
    usersService = module.get<UsersService>(UsersService);
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    const result = ['test'];
    jest.spyOn(usersService, 'findAll').mockImplementation(() => result);
    expect(controller).toBeDefined();
    expect(controller.findAll()).toBe(result);
  });
});
