import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { CreateMessageInfo } from './dtos/create-message.interface';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessage() {
    return 'test';
  }

  @Post('/class')
  createMessageClass(@Body() body: CreateMessageDto) {
    console.log(typeof body);
    console.log(body);
  }

  @Post('/interface')
  createMessageInterface(@Body() body: CreateMessageInfo) {
    console.log(typeof body);
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
