import { Inject, Injectable, Logger } from '@nestjs/common';
import { MailDataRequired, MailService } from '@sendgrid/mail';
import {
  SendGridConstants,
  SendGridModuleOptions,
} from '../../domain/models/sendgrid';

@Injectable()
export class SendGridService {
  private readonly logger = new Logger();
  constructor(
    @Inject(SendGridConstants.SENDGRID_MODULE_OPTIONS)
    private readonly options: SendGridModuleOptions,
    private readonly mailService: MailService,
  ) {
    if (!(this.options && this.options.apiKey)) {
      throw new Error('options not found. Did you use SendGridModule.forRoot?');
    }
    this.mailService.setApiKey(this.options.apiKey);
  }
  public async send(data: MailDataRequired) {
    return this.mailService
      .send(data)
      .then(() => this.logger.log('sending mail'))
      .catch((e) => this.logger.log(e));
  }
}
