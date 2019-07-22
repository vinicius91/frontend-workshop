import _ from "lodash";
import "./style.css";
import sponge from "./sponge.png";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // Add the image to our existing div.
  const SpongeImg = new Image();
  SpongeImg.src = sponge;

  element.appendChild(SpongeImg);

  return element;
}

document.body.appendChild(component());
