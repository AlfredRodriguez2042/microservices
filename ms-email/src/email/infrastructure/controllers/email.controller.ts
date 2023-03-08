import { Controller, UsePipes } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ZodValidationPipe } from 'src/email/application/pipes/zod.pipe';
import { CreateEmailDto } from 'src/email/domain/dto/create-email.dto';
import { EmailService } from '../../application/services/email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern({ cmd: 'wellcomeUser' })
  @UsePipes(new ZodValidationPipe({ body: CreateEmailDto }))
  create(@Payload() createEmailDto: any) {
    console.log(createEmailDto);
    // return this.emailService.create(createEmailDto);
  }
}
