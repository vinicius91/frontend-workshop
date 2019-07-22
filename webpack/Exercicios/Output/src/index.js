import _ from "lodash";
import "./style.css";
import sponge from "./sponge.png";

import printMe from "./print.js";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
