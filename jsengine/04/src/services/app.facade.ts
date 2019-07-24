import UserService from "./user.service";
import { User } from "../model/user.model";
import PostService from "./post.service";
import { Post } from "../model/post.model";
import { HttpAdapterType } from "../model/http-adapter-type.enum";

export class AppFacade {
  private userService: UserService;
  private postService: PostService;
  constructor() {
    this.userService = new UserService(HttpAdapterType.Fetch);
    this.postService = new PostService(HttpAdapterType.XMLHttpRequest);
  }

  async getUsers(): Promise<User[]> {
    const posts = await this.postService.getAll();
    const users = await this.userService.getAll();
    return users.map(user => {
      const userPosts = posts.filter(p => p.userId === user.id);
      return {
        ...user,
        posts: userPosts
      };
    });
  }

  async findUser(userId: number): Promise<User> {
    const user = await this.userService.find(userId);
    const posts = await this.postService.getAll();
    return {
      ...user,
      posts: posts.filter(p => p.userId === user.id)
    };
  }

  async getPosts(): Promise<Post[]> {
    const users = await this.userService.getAll();
    const posts = await this.postService.getAll();
    return posts.map(post => {
      return {
        ...post,
        user: users.find(u => u.id === post.userId)
      };
    });
  }

  async findPost(postId: number): Promise<Post> {
    const post = await this.postService.find(postId);
    const user = await this.userService.find(post.userId);
    return {
      ...post,
      user
    };
  }
}
