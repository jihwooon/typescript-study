import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { CreateMessageInfo } from './dtos/create-message.interface';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  listMessage() {
    return this.messagesService.findAll();
  }

  @Post('/class')
  createMessageClass(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Post('/interface')
  createMessageInterface(@Body() body: CreateMessageInfo) {
    console.log(typeof body);
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
