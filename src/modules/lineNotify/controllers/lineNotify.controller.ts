import { Controller, Post, Body } from '@nestjs/common';
import { LineNotifyService } from '../services/lineNotify.service';

@Controller('lineNotify')
export class LineNotifyController {
  constructor(private readonly lineNotifyService: LineNotifyService) {}

  @Post('/send')
  async sendMessage(@Body('message') message: string): Promise<void> {
    await this.lineNotifyService.sendMessage(message);
  }
}
