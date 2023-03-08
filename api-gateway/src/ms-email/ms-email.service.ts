import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
interface IData {
  cmd: string;
  data: any;
}

@Injectable()
export class EmailClientService {
  constructor(@Inject('MS_EMAIL') private client: ClientProxy) {}
  send({ cmd, data }: IData) {
    return this.client.send({ cmd }, data);
  }
}
