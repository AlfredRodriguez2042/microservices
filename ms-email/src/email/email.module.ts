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
      apiKey: process.env.NEST_SENDGRID_KEY,
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
