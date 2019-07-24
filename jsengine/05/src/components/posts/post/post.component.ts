import Component from "../../base.component";
import DomAdapter from "../../dom.adapter";
import { Post } from "../../../model/post.model";
import "./post.component.css";

export default class PostComponent extends Component {
  constructor(dom: DomAdapter, id: string) {
    super(dom, id);
  }

  render(props: { postData: Post }): HTMLElement {
    const { postData } = props;

    // Creating Title
    const titleText = this.createChildElement(
      "p",
      postData.title,
      null,
      "title-text"
    );
    const title = this.createChildElement(
      "div",
      null,
      ["post__title"],
      "title",
      [titleText]
    );

    // Creating Body
    const postContent = this.createChildElement(
      "p",
      postData.body,
      ["post__body__line"],
      "content"
    );
    const postAuthor = this.createChildElement(
      "p",
      `Author: ${postData.user.name}`,
      ["post__body__line"],
      "author"
    );
    const postBody = this.createChildElement(
      "div",
      null,
      ["post__body"],
      "body",
      [postContent, postAuthor]
    );

    // Creating Post Component
    const el = this.createElement("div", null, ["post"], `${postData.id}`, [
      title,
      postBody
    ]);
    return el;
  }
}
