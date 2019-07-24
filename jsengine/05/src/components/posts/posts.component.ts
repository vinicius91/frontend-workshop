import Component from "../base.component";
import DomAdapter from "../dom.adapter";
import { Post } from "../../model/post.model";
import PostComponent from "./post/post.component";
import "./posts.component.css";

export default class PostsComponent extends Component {
  constructor(dom: DomAdapter, id: string) {
    super(dom, id);
  }

  render(props: { postsData: Post[] }): HTMLElement {
    const { postsData } = props;
    const posts = postsData.map(postData =>
      new PostComponent(this.domAdapter, this.id).render({ postData })
    );
    const el = this.createElement(
      "div",
      null,
      ["posts__container"],
      `posts-container`,
      posts
    );
    return el;
  }
}
