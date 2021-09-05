import { MockTodoApi } from './Todo/mock';
import { MockUserApi } from './User/mock';

const userApi = new MockUserApi();
const todoApi = new MockTodoApi();

export { userApi, todoApi };
