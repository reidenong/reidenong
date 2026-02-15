// layout.js
(function () {
  const header = document.querySelector(".header");
  if (!header) return;

  function setHeaderHeightVar() {
    document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  }

  // Initial set + update on resize
  setHeaderHeightVar();
  window.addEventListener("resize", setHeaderHeightVar);
})();
