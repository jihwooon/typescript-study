import { MessageRepository } from './messages.repository';

export class MessagesService {
  messagesRepository: MessageRepository;

  constructor() {
    this.messagesRepository = new MessageRepository();
  }

  async findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
