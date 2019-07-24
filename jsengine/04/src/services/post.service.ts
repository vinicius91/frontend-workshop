import { Post } from "../model/post.model";
import { HttpAdapterType } from "../model/http-adapter-type.enum";
import { BaseService } from "./base.service";

export default class PostService extends BaseService<Post> {
  constructor(type: HttpAdapterType = HttpAdapterType.XMLHttpRequest) {
    super(type);
  }

  async getAll(): Promise<Post[]> {
    return await this.httpAdapter<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  }

  async find(id: number): Promise<Post> {
    return await this.httpAdapter<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
