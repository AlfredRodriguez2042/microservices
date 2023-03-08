import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './Application/services/users.service';
import { UsersEntity } from './Domain/entities/users.entity';
import { ConfigClient } from './Domain/ports/config.port';
import { USER_REPOSITORY, USER_SERVICE } from './Domain/ports/users.ports';
import { UsersController } from './Infrastructure/controllers/users.controller';
import { UserRepository } from './Infrastructure/repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [
    { useClass: UsersService, provide: USER_SERVICE },
    { useClass: UserRepository, provide: USER_REPOSITORY },
    { useClass: ConfigClient, provide: 'config' },
  ],
})
export class UsersModule {}
