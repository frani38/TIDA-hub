/**
 * Iguala el logo al tamaño del título (misma lógica que app.js),
 * para páginas sin app.js (privacidad, asistencia IA, etc.).
 */
(function (global) {
  function syncBrandLogoSize() {
    var title = global.document.getElementById("site-title") || global.document.querySelector("header .brand-title");
    var logo = global.document.querySelector("header .brand-logo");
    if (!title || !logo) return;
    var h = Math.round(title.getBoundingClientRect().height);
    if (!h || h < 10) return;
    var size = Math.round(h * 1.7);
    logo.style.width = size + "px";
    logo.style.height = size + "px";
    logo.style.borderRadius = "0";
  }

  function arm() {
    syncBrandLogoSize();
    global.addEventListener("resize", syncBrandLogoSize);
    if (global.visualViewport) {
      global.visualViewport.addEventListener("resize", syncBrandLogoSize);
    }
  }

  if (global.document.readyState === "loading") {
    global.document.addEventListener("DOMContentLoaded", arm);
  } else {
    arm();
  }
  global.addEventListener("load", syncBrandLogoSize);
})(window);
