import Component from "../base.component";
import DomAdapter from "../dom.adapter";
import { User } from "../../model/user.model";
import UserComponent from "./user/user.component";
import "./users.component.css";

export default class UsersComponent extends Component {
  constructor(dom: DomAdapter, id: string) {
    super(dom, id);
  }

  render(props: { usersData: User[] }): HTMLElement {
    const { usersData } = props;
    const users = usersData.map(userData =>
      new UserComponent(this.domAdapter, this.id).render({ userData })
    );
    const el = this.createElement(
      "div",
      null,
      ["users__container"],
      `users-container`,
      users
    );
    return el;
  }
}
