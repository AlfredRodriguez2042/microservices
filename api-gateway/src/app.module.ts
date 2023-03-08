import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Config from './ms-users/infrastructure/Config';
import { MsUsersModule } from './ms-users/ms-users.module';
import { MsEmailModule } from './ms-email/ms-email.module';

@Module({
  imports: [
    MsUsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Config],
      envFilePath: ['.env.local'],
    }),
    MsEmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
