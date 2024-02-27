import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';

type FackObjectController<T> = {
  [P in keyof T]?: T[P];
};

describe('UsersController', () => {
  let controller: UsersController;
  let fackUsersService: FackObjectController<UsersService>;
  let fackAuthService: FackObjectController<AuthService>;

  beforeEach(async () => {
    fackUsersService = {
      findOne: (id: number) => {
        return Promise.resolve({
          id,
          email: 'abcd@gmail.com',
          password: '12345',
        } as User);
      },
      find: (email: string) => {
        return Promise.resolve([{ id: 1, email, password: '12345' } as User]);
      },
      // remove: (id: number) => {
      //   return promise.resolve();
      // },
      // update: () => {},
    };
    fackAuthService = {
      signin: (email: string, password: string) => {
        return Promise.resolve({ id: 1, email, password } as User);
      },
      // signup: () => {},
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fackUsersService,
        },
        {
          provide: AuthService,
          useValue: fackAuthService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAllUsers return ', async () => {
    const users = await controller.findAllUser('abcd@gmail.com');

    expect(users.length).toEqual(1);
    expect(users[0].email).toEqual('abcd@gmail.com');
  });

  it('findUser returns a signle user with the given id', async () => {
    const user = await controller.findUser('1');

    expect(user).toEqual({
      email: 'abcd@gmail.com',
      id: 1,
      password: '12345',
    });
  });

  it('findUSer throws an error if user with gicen id', async () => {
    fackUsersService.findOne = () => null;
    await expect(controller.findUser('2')).rejects.toThrow(NotFoundException);
  });

  it('signin updates session object and returns user', async () => {
    const session = { userId: -10 };
    const user = await controller.signin(
      { email: 'abcd@gmail.com', password: '12345' },
      session,
    );

    expect(user.id).toEqual(1);
    expect(session.userId).toEqual(1);
  });
});
