import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class AppController {
  @ApiOperation({ summary: 'healt operation' })
  @ApiResponse({ status: 200, description: 'ok' })
  @Get('health')
  getHello(): string {
    return 'ok';
  }
}
