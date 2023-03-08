import { DynamicModule, Module } from '@nestjs/common';
import { MailService } from '@sendgrid/mail';
import {
  SendGridConstants,
  SendGridModuleOptions,
} from 'src/email/domain/models/sendgrid';

@Module({})
export class SendGridModule {
  public static forRoot(options: SendGridModuleOptions): DynamicModule {
    if (!options && !options.apiKey) {
      throw new Error('SendGrid API Key is not defined');
    }
    return {
      module: SendGridModule,
      providers: [
        {
          provide: SendGridConstants.SENDGRID_MODULE_OPTIONS,
          useValue: options,
        },
        MailService,
      ],
      exports: [
        {
          provide: SendGridConstants.SENDGRID_MODULE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }
}
