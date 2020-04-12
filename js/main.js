window.onload = function () {
  var entries = document.querySelectorAll(".project-entry");
  var entriesArray = [...entries];
  var entriesMarginTop = entriesArray[0].style.marginTop;

  console.log("main.js is loaded\n");
  console.log(entriesArray);

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
};

function entryHover(entry, marginTop) {
  console.log(entry);
  entry.style.marginTop = marginTop;
}
