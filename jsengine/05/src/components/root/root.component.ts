import Component from "../base.component";
import DomAdapter from "../dom.adapter";
import "./root.component.css";

export default class RootComponent extends Component {
  constructor(dom: DomAdapter, id: string) {
    super(dom, id);
  }

  public render(children: HTMLElement[]): HTMLElement {
    if (children !== null) {
      const el = this.createElement(
        "div",
        null,
        ["container"],
        `container`,
        children
      );
      return el;
    }
    return null;
  }
}
