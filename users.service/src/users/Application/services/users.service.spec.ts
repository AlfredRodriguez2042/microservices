import { Test, TestingModule } from '@nestjs/testing';
import { USER_REPOSITORY } from '../../Domain/ports/users.ports';
import { UserRepository } from '../../Infrastructure/repository/user.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { useClass: UserRepository, provide: USER_REPOSITORY },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
