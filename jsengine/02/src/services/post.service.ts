import posts from "../assets/posts.json";
import { Post } from "../model/post.model";

export default class PostService {
  private data: Post[];

  constructor() {
    this.data = posts as Post[];
  }

  getAll(): Post[] {
    return this.data;
  }

  find(id: number): Post {
    return this.data.find(x => x.id === id);
  }
}
