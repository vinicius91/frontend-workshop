import icon from "./assets/favicon.ico";

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
  console.log("Hello World!");
  setFavIcon();
}

bootstrap();
