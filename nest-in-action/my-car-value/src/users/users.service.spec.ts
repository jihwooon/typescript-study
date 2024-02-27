import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;
  const mockUserRepository = {};

  const USER_REPOSITORY_TOKEN = getRepositoryToken(User);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('userRepository', () => {
    expect(mockUserRepository).toBeDefined();
  });
});
