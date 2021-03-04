import logoDP from "./images/logoDP.png";

import "./styles/main.scss";

console.log("Hello you!");

var newImg = document.createElement("IMG");
newImg.setAttribute("src", logoDP);
newImg.setAttribute("alt", "Dulce Sin Pena");

document.body.appendChild(newImg);
