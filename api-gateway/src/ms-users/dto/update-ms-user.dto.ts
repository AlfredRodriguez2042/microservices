import { PartialType } from '@nestjs/mapped-types';
import { CreateMsUserDto } from './create-ms-user.dto';

export class UpdateMsUserDto extends PartialType(CreateMsUserDto) {}
