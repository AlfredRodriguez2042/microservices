import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MsEmailModule } from 'src/ms-email/ms-email.module';
import { MsUsersService } from './application/services/ms-users.service';
import { MsUsersController } from './infrastructure/controllers/ms-users.controller';

@Module({
  controllers: [MsUsersController],
  providers: [MsUsersService],
  imports: [
    ClientsModule.register([
      {
        name: 'MS_USERS',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 5000,
        },
      },
      MsEmailModule,
    ]),
  ],
})
export class MsUsersModule {}
