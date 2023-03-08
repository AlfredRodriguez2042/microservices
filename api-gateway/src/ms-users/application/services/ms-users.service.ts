import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';
import { CreateMsUserDto } from '../../dto/create-ms-user.dto';
import { UpdateMsUserDto } from '../../dto/update-ms-user.dto';
import { EmailClientService } from './../../../ms-email/ms-email.service';

@Injectable()
export class MsUsersService {
  constructor(
    @Inject('MS_USERS') private client: ClientProxy,
    private clientEmail: EmailClientService,
  ) {}
  create(createMsUserDto: CreateMsUserDto) {
    const data = {
      cmd: 'wellcomeUser',
      data: {
        to: createMsUserDto.email,
        from: 'alfred2042@gmail.com',
        templateId: 'd-e912b87422c140278d8f4e7552c9e4e7',
        dynamicTemplateData: {
          userName: createMsUserDto.firstName,
        },
      },
    };
    this.clientEmail.send(data).subscribe((ms) => ms);
    // return this.client.emit({ cmd: 'createUser' }, createMsUserDto);
  }

  findAll() {
    return this.client
      .send('findAllUsers', '')
      .pipe(map((message: any) => message));
  }

  findOne(id: number) {
    return `This action returns a #${id} msUser`;
  }

  update(id: number, updateMsUserDto: UpdateMsUserDto) {
    return `This action updates a #${id} msUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} msUser`;
  }
}
