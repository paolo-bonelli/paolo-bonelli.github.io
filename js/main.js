window.onload = function () {
  console.log("main.js is loaded\n");
  // window.addEventListener("scroll", function () {
  //   scroll_fixed(document.querySelector("#banner"));
  // });
};

function scroll_fixed(elem) {
  var start = 40;
  var scrolled = (window.scrollY / window.innerHeight) * 100;
  if (scrolled > start) {
    elem.style.top = -scrolled + start + "%";
  } else {
    elem.style.top = 0;
  }
}
