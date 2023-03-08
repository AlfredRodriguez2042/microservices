import { Inject, Injectable } from '@nestjs/common';
import { CreateEmailDto } from 'src/email/domain/dto/create-email.dto';
import {
  ISendGridService,
  SendGridConstants,
} from 'src/email/domain/models/sendgrid';

import { z } from 'zod';
type ICreateEmailDto = z.infer<typeof CreateEmailDto>;

@Injectable()
export class EmailService {
  constructor(
    @Inject(SendGridConstants.SENDGRID_SERVICE)
    private readonly sendgridService: ISendGridService,
  ) {}
  create(createEmailDto: Required<ICreateEmailDto>) {
    return this.sendgridService.send(createEmailDto);
  }
}
