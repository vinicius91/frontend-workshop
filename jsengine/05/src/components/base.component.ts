import DomAdapter from "./dom.adapter";

export default abstract class Component {
  protected id: string;
  protected domAdapter: DomAdapter;
  protected rootId: string;
  protected el: HTMLElement;

  constructor(dom: DomAdapter, id: string) {
    this.domAdapter = dom;
    this.rootId = id;
    this.el = null;
  }

  private createElementBase(
    tag: string,
    content: string = null,
    classlist: string[] = null,
    id: string = null,
    children: HTMLElement[] = null
  ): HTMLElement {
    const el = this.domAdapter.createElement(tag);
    if (content !== null) {
      el.innerHTML = content;
    }
    if (classlist !== null && classlist.length > 0) {
      classlist.forEach(className => el.classList.add(className));
    }
    if (id !== null && id.length > 0) {
      el.id = `${this.rootId}__${id}`;
    }
    if (children !== null && children.length > 0) {
      children.forEach(child => el.appendChild(child));
    }
    return el;
  }

  public createElement(
    tag: string,
    content: string = null,
    classlist: string[] = null,
    id: string = null,
    children: HTMLElement[] = null
  ): HTMLElement {
    const el = this.createElementBase(tag, content, classlist, id, children);
    this.el = el;
    return el;
  }

  public createChildElement(
    tag: string,
    content: string = null,
    classlist: string[] = null,
    id: string = null,
    children: HTMLElement[] = null
  ): HTMLElement {
    return this.createElementBase(tag, content, classlist, id, children);
  }

  public get htmlNode() {
    return this.el;
  }

  abstract render(props: any): HTMLElement;
}
