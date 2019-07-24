import Component from "../../base.component";
import DomAdapter from "../../dom.adapter";
import { User } from "../../../model/user.model";
import "./user.component.css";

export default class UserComponent extends Component {
  constructor(dom: DomAdapter, id: string) {
    super(dom, id);
  }

  render(props: { userData: User }): HTMLElement {
    const { userData } = props;

    // Creating Title
    const fullname = this.createChildElement(
      "p",
      `Nome: ${userData.name}`,
      null,
      "fullname"
    );
    const email = this.createChildElement(
      "p",
      `Email: ${userData.email}`,
      null,
      "email"
    );

    const postsTitle = this.createChildElement(
      "p",
      `Lista de Posts`,
      null,
      "posts-title"
    );
    const title = this.createChildElement(
      "div",
      null,
      ["user__title"],
      "title",
      [fullname, email, postsTitle]
    );

    // Creating Body

    const posts = userData.posts.map(post =>
      this.createChildElement(
        "p",
        `${post.title}`,
        ["user__body__line"],
        "content"
      )
    );
    const userBody = this.createChildElement(
      "div",
      null,
      ["user__body"],
      "body",
      posts
    );

    // Creating user Component
    const el = this.createElement("div", null, ["user"], `${userData.id}`, [
      title,
      userBody
    ]);
    return el;
  }
}
