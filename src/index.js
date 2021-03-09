import "./styles/main.scss";
import logoDP from "./images/logoDP.png";
import appDesign from "./images/app-design.png";
import backEnd from "./images/back-end.png";
import cms from "./images/cms.png";
import frontEnd from "./images/front-end.png";
import webDev from "./images/web-dev.png";
import webServ from "./images/web-service.png";
import fondo from "./images/Typing-bro.png";
import presentation from "./images/Resume-bro.png";
import favicon from "./favicon.png";
import whatsappLogo from "./images/whatsapp.png";

const portada = document.querySelector("#portada");
const imgContainers = document.querySelectorAll(".habilidad-img");
const aboutContainer = document.querySelector("#about>img");
const whatsapp = document.querySelector("#whatsapp .contact-logo");
const faviconElem = document.createElement("LINK");
const fondoElem = document.createElement("IMG");
const testImg = document.createElement("IMG");
const newImg = document.createElement("IMG");
const images = [webDev, frontEnd, backEnd, appDesign, cms, webServ];

whatsapp.setAttribute("src", whatsappLogo);

faviconElem.rel = "icon";
faviconElem.href = favicon;
faviconElem.type = "image/png";

document.head.appendChild(faviconElem);

aboutContainer.setAttribute("src", presentation);

var imgElements = images.map(function (img) {
  const imgElem = document.createElement("IMG");
  imgElem.setAttribute("src", img);
  imgElem.setAttribute("class", "img-res");
  return imgElem;
});

fondoElem.setAttribute("src", fondo);
fondoElem.setAttribute("class", "background-img");

portada.appendChild(fondoElem);

imgContainers.forEach((cont, i) => {
  cont.appendChild(imgElements[i]);
});

testImg.setAttribute("src", appDesign);

console.log("Hello you!");

newImg.setAttribute("src", logoDP);
newImg.setAttribute("alt", "Dulce Sin Pena");
