import icon from "./assets/favicon.ico";
import posts from "./assets/posts.json";
import users from "./assets/users.json";
import UserService from "./services/user.service";
import PostService from "./services/post.service";

function setFavIcon() {
  const link: HTMLLinkElement =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = icon;
  document.getElementsByTagName("head")[0].appendChild(link);
}

function bootstrap() {
  const userService = new UserService();
  const postService = new PostService();
  console.log(postService.getAll());
  console.log(userService.getAll());
  setFavIcon();
}

bootstrap();
