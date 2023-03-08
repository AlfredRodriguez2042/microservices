import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger();
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 5050,
      },
    },
  );
  await app
    .listen()
    .then(() => logger.log('Microservice Email is listening'))
    .catch(() => logger.log('Microservice Email Error'));
}
bootstrap();
