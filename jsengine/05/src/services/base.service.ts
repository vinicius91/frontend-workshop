import { HttpAdapterType } from "../model/http-adapter-type.enum";

export abstract class BaseService<K> {
  protected type: HttpAdapterType;
  protected httpAdapter: <T>(url: string) => Promise<T>;

  constructor(type: HttpAdapterType = HttpAdapterType.XMLHttpRequest) {
    this.type = type;
    switch (this.type) {
      case HttpAdapterType.XMLHttpRequest:
        this.httpAdapter = this.XMLHttpRequestGet;
        break;
      case HttpAdapterType.Fetch:
        this.httpAdapter = this.FetchGet;
        break;
      default:
        this.httpAdapter = this.XMLHttpRequestGet;
        break;
    }
  }

  protected XMLHttpRequestGet<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.response));
        }
        reject(xhr.response);
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }

  protected async FetchGet<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return (await response.json()) as T;
  }

  abstract async getAll(): Promise<K[]>;
  abstract async find(id: number): Promise<K>;
}
