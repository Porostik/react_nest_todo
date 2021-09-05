import { IApiResponse } from 'src/types/api';
import { User } from 'src/types/user';

const mockUser: User = {
  username: 'Test user',
};

export class MockUserApi {
  async signIn({ login, password }): Promise<IApiResponse<User>> {
    if (login === 'test' && password === 'test') {
      return {
        data: mockUser,
        error: null,
      };
    }

    return {
      data: null,
      error: 'Неверный логин или пароль',
    };
  }
}
