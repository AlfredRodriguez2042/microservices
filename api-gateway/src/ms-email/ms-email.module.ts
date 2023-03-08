import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EmailClientService } from './ms-email.service';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MS_EMAIL',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 5050,
        },
      },
    ]),
  ],
  providers: [EmailClientService],
  exports: [EmailClientService],
})
export class MsEmailModule {}
