window.onload = function () {
  var entries = document.querySelectorAll(".project-entry");
  var entriesArray = [...entries];
  var entriesMarginTop = entriesArray[0].style.marginTop;
  var navBar = document.querySelector("ul.nav-bar");
  console.log("main.js is loaded\n");

  entriesArray.map((entry) => {
    entry.addEventListener("mouseenter", () => {
      let footer = entry.querySelector(".entry-footer");
      entryHover(entry, "0px");
      footer.style.animationName = "signaling-arrow";
    });
    entry.addEventListener("mouseleave", () => {
      let footer = entry.querySelector(".entry-footer");
      entryHover(entry, entriesMarginTop);
      footer.style.animationName = "";
    });
  });

  window.addEventListener("scroll", function () {
    navbar_animation(navBar);
  });
};

function navbar_animation(navBar) {
  var bgOpacity, navHeight;
  var bgScroll = window.scrollY / window.innerHeight;
  if (bgScroll > 1) {
    navHeight = "40px";
  }
  if (bgScroll > 0.3) {
    bgOpacity = (bgScroll - 0.3) / 0.7;
    navHeight = (100 - 60 * bgOpacity).toFixed(2) + "px";
  } else {
    bgOpacity = "0";
    navHeight = "100px";
  }
  navBar.style.backgroundColor = "rgba(54,179,171," + bgOpacity + ")";
  navBar.querySelector("img").style.height = navHeight;
}

function entryHover(entry, marginTop) {
  entry.style.marginTop = marginTop;
}
