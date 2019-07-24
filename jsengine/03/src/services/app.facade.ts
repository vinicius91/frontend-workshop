import UserService from "./user.service";
import { User } from "../model/user.model";
import PostService from "./post.service";
import { Post } from "../model/post.model";

export class AppFacade {
  private userService: UserService;
  private postService: PostService;
  constructor() {
    this.userService = new UserService();
    this.postService = new PostService();
  }

  getUsers(): User[] {
    const posts = this.postService.getAll();
    return this.userService.getAll().map(user => {
      return {
        ...user,
        posts: posts.filter(p => p.userId === user.id)
      };
    });
  }

  findUser(userId: number): User {
    const user = this.userService.find(userId);
    return {
      ...user,
      posts: this.postService.getAll().filter(p => p.userId === user.id)
    };
  }

  getPosts(): Post[] {
    const users = this.userService.getAll();
    return this.postService.getAll().map(post => {
      return {
        ...post,
        user: users.find(u => u.id === post.userId)
      };
    });
  }

  findPost(postId: number): Post {
    const post = this.postService.find(postId);
    return {
      ...post,
      user: this.userService.find(post.userId)
    };
  }
}
