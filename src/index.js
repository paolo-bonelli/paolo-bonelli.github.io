import "./styles/main.scss";
import logoDP from "./images/logoDP.png";
import appDesign from "./images/app-design.png";
import backEnd from "./images/back-end.png";
import cms from "./images/cms.png";
import frontEnd from "./images/front-end.png";
import webDev from "./images/web-dev.png";
import webServ from "./images/web-service.png";

var images = [webDev, frontEnd, backEnd, appDesign, cms, webServ];

var imgElements = images.map(function (img) {
  const imgElem = document.createElement("IMG");
  imgElem.setAttribute("src", img);
  imgElem.setAttribute("class", "img-res");
  return imgElem;
});

const imgContainers = document.querySelectorAll(".habilidad-img");

imgContainers.forEach((cont, i) => {
  cont.appendChild(imgElements[i]);
});

var testImg = document.createElement("IMG");
testImg.setAttribute("src", appDesign);

console.log("Hello you!");

var newImg = document.createElement("IMG");
newImg.setAttribute("src", logoDP);
newImg.setAttribute("alt", "Dulce Sin Pena");
