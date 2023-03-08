import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MsUsersService } from '../../application/services/ms-users.service';
import { CreateMsUserDto } from '../../dto/create-ms-user.dto';
import { UpdateMsUserDto } from '../../dto/update-ms-user.dto';

@Controller('ms-users')
export class MsUsersController {
  constructor(private readonly msUsersService: MsUsersService) {}

  @Post()
  create(@Body() createMsUserDto: CreateMsUserDto) {
    return this.msUsersService.create(createMsUserDto);
  }

  @Get()
  findAll() {
    return this.msUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.msUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMsUserDto: UpdateMsUserDto) {
    return this.msUsersService.update(+id, updateMsUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.msUsersService.remove(+id);
  }
}
