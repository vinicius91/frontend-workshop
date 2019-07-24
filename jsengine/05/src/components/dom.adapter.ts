export default class DomAdapter {
  protected dom: Document;
  protected elements: HTMLElement[];

  constructor() {
    this.dom = document;
    this.elements = [];
  }

  public createElement(
    tag: string,
    options: ElementCreationOptions = null
  ): HTMLElement {
    const el = this.dom.createElement(tag, options);
    this.elements.push(el);
    return el;
  }

  public queryAll(selector: string): NodeListOf<Element> {
    return this.dom.querySelectorAll(selector);
  }

  public query(selector: string): Element {
    return this.dom.querySelector(selector);
  }

  public callAlert(message: string): void {
    alert(message);
  }
}
