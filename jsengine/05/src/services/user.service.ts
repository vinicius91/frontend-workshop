import { User } from "../model/user.model";
import { BaseService } from "./base.service";
import { HttpAdapterType } from "../model/http-adapter-type.enum";

export default class UserService extends BaseService<User> {
  constructor(type: HttpAdapterType = HttpAdapterType.XMLHttpRequest) {
    super(type);
  }

  async getAll(): Promise<User[]> {
    return await this.httpAdapter<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
  }

  async find(id: number): Promise<User> {
    return await this.httpAdapter<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
