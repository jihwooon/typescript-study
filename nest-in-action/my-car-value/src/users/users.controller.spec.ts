import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';

type FakeObjectController<T> = {
  [P in keyof T]?: T[P];
};

describe('UsersController', () => {
  let controller: UsersController;
  let fakeUserService: FakeObjectController<UsersService>;
  let fakeAuthService: FakeObjectController<AuthService>;

  beforeEach(async () => {
    const users: User[] = [
      {
        id: 1,
        email: 'abcd@gmail.com',
        password: '12345',
      } as User,
    ];

    fakeUserService = {
      findOne: (id: number): Promise<User> => {
        const [filteredUsers] = users.filter((user) => user.id === id);
        return Promise.resolve(filteredUsers);
      },
      find: (email: string) => {
        const filterEmail = users.filter((user) => user.email === email);
        return Promise.resolve(filterEmail);
      },
      remove: (id: number) => {
        const index = users.findIndex((user) => user.id === id);
        if (index !== -1) {
          const [user] = users.splice(index, 1);
          return Promise.resolve(user);
        }
        return Promise.resolve(null);
      },
      update: (id: number, newData: Partial<User>) => {
        const index = users.findIndex((user) => user.id === id);
        if (index !== -1) {
          users[index] = { ...users[index], ...newData } as User;
          return Promise.resolve(users[index]);
        }
        return Promise.resolve(null);
      },
    };

    fakeAuthService = {
      signin: (email: string, password: string) => {
        return Promise.resolve({ id: 1, email, password } as User);
      },
      signup: (email: string, password: string) => {
        return Promise.resolve({ id: 1, email, password } as User);
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAllUsers return ', async () => {
    const [users] = await controller.findAllUser('abcd@gmail.com');

    expect(users).toEqual(1);
    expect(users.email).toEqual('abcd@gmail.com');
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
    fakeUserService.findOne = () => null;
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

  it('signup updates session object and returns user', async () => {
    const session = { userId: -10 };
    const user = await controller.createUser(
      { email: 'abcd@gmail.com', password: '12345' },
      session,
    );

    expect(user.email).toEqual('abcd@gmail.com');
    expect(user.password).toEqual('12345');
    expect(user.id).toEqual(1);
  });

  it('remove returns user', async () => {
    const user = await controller.removeUser('1');

    expect(user.email).toEqual('abcd@gmail.com');
    expect(user.password).toEqual('12345');
  });

  it('update returns user', async () => {
    const user = await controller.updateUser('1', {
      email: 'abcd2@gmail.com',
      password: '123456',
    });

    expect(user.email).toEqual('abcd2@gmail.com');
    expect(user.password).toEqual('123456');
  });
});
