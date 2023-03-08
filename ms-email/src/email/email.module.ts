import { Module } from '@nestjs/common';
import { MailService } from '@sendgrid/mail';
import { SendGridConstants } from 'src/email/domain/models/sendgrid';
import { EmailService } from './application/services/email.service';
import { SendGridService } from './application/services/sendgrid.service';
import { EmailController } from './infrastructure/controllers/email.controller';
import { SendGridModule } from './infrastructure/sendgrid/sendgrid.module';

@Module({
  imports: [
    SendGridModule.forRoot({
      apiKey:
        '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',
    }),
  ],
  controllers: [EmailController],
  providers: [
    EmailService,
    {
      provide: SendGridConstants.SENDGRID_SERVICE,
      useClass: SendGridService,
    },

    MailService,
  ],
})
export class EmailModule {}
