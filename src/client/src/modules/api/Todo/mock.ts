import { IApiResponse } from 'src/types/api';
import { Todo } from 'src/types/todo';

let mockList: Todo[] = [
  { id: 1, name: 'name1' },
  { id: 2, name: 'name2' },
  { id: 3, name: 'name3' },
];

export class MockTodoApi {
  async getAll(): Promise<IApiResponse<Todo[]>> {
    return {
      data: mockList,
      error: null,
    };
  }

  async deleteById(id: number): Promise<IApiResponse<{ success: boolean }>> {
    mockList = mockList.filter((item) => item.id !== id);

    return {
      data: { success: true },
      error: null,
    };
  }

  async create(name: string): Promise<IApiResponse<Todo>> {
    try {
      const lastItem = mockList[mockList.length - 1];
      const newObj = {
        name,
        id: lastItem ? lastItem.id + 1 : 1,
      };

      mockList = [...mockList, newObj];

      return {
        data: newObj,
        error: null,
      };
    } catch (e) {
      console.log(e);
    }
  }
}
