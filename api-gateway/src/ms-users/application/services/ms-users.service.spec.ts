import { Test, TestingModule } from '@nestjs/testing';
import { MsUsersService } from './ms-users.service';

describe('MsUsersService', () => {
  let service: MsUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsUsersService],
    }).compile();

    service = module.get<MsUsersService>(MsUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
