import {
  HttpException,
  HttpStatus,
  Logger,
  LoggerService,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as compression from 'compression';
import { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { initSwagger } from './ms-users/infrastructure/swagger';
async function bootstrap() {
  const logger: LoggerService = new Logger('Gateway - Bootstrap');
  const app: NestExpressApplication =
    await NestFactory.create<NestExpressApplication>(AppModule);
  const config =
    app.get<ConfigService>(ConfigService)['internalConfig']['config'];
  app.enableCors();
  app.use(helmet());
  app.use(compression());
  app.setGlobalPrefix(config.server.basePath);
  // server.useGlobalInterceptors(new TrafficInterceptorService());
  // server.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     whitelist: true,
  //     disableErrorMessages: process.env.ENVIRONMENT === 'dev' ? true : false,
  //   }),
  // );
  app.use((req: Request, res: Response, next: NextFunction) => {
    req.setTimeout(10000, () => {
      throw new HttpException('Server Timeout', HttpStatus.REQUEST_TIMEOUT);
    });

    res.setTimeout(10000);

    next();
  });
  if (config.swagger.enabled) {
    initSwagger(app);
  }
  await app
    .listen(config.server.port, () => {
      logger.log(
        `⛩️  Gateway has started successfully - http://${config.server.host}:${config.server.port}`,
      );
    })
    .catch((error) => logger.error('Error in bootstrap', error));
}
bootstrap();
