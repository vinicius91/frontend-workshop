import users from "../assets/users.json";
import { User } from "../model/user.model";

export default class UserService {
  private data: User[];

  constructor() {
    this.data = users as User[];
  }

  getAll(): User[] {
    return this.data;
  }

  find(id: number): User {
    return this.data.find(x => x.id === id);
  }
}
