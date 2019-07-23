import icon from "./assets/favicon.ico";
import UserService from "../services/user.service";
import PostService from "../services/post.service";
import { AppFacade } from "../services/app.facade";

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
  const appFacade = new AppFacade();
  console.log("Not Normalized - Users", userService.getAll());
  console.log("Not Normalized - Posts", postService.getAll());

  console.log("Normalized - Users", appFacade.getUsers());
  console.log("Normalized - Posts", appFacade.getPosts());

  setFavIcon();
}

bootstrap();
