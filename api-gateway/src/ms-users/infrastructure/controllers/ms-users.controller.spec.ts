import { Test, TestingModule } from '@nestjs/testing';
import { MsUsersService } from '../../application/services/ms-users.service';
import { MsUsersController } from './ms-users.controller';

describe('MsUsersController', () => {
  let controller: MsUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MsUsersController],
      providers: [MsUsersService],
    }).compile();

    controller = module.get<MsUsersController>(MsUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
