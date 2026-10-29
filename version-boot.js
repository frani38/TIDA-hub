/**
 * 1) Descarga data.js sin caché (contenido editorial siempre fresco).
 * 2) Si la versión técnica del HTML está desfasada, recarga el documento con ?v=.
 * 3) Entrega el texto de data.js al boot de la página para inyectarlo (evita un 2.º
 *    data.js?v=VERSION cacheado que ocultaría noticias/libros sin bump).
 */
(function (global) {
  var BAKED = String(global.MYWEB_ASSET_V || "").trim();
  var LAST_KEY = "myweb_last_asset_v";

  function parseSiteVersion(jsText) {
    var m = String(jsText || "").match(/version:\s*"(\d+\.\d+\.\d+)"/);
    return m ? m[1] : "";
  }

  function withBust(href, ver) {
    try {
      var u = new URL(href, global.location.href);
      u.searchParams.set("v", ver);
      var pageBase = global.location.href.replace(/[#?].*$/, "").replace(/[^/]+$/, "");
      var abs = u.href;
      if (abs.indexOf(pageBase) === 0) return abs.slice(pageBase.length);
      return u.pathname + u.search + u.hash;
    } catch (e) {
      var base = String(href || "").split("#")[0].split("?")[0];
      var hash = String(href || "").includes("#") ? "#" + String(href).split("#").slice(1).join("#") : "";
      return base + "?v=" + encodeURIComponent(ver) + hash;
    }
  }

  function wireVersionedLinks(ver) {
    if (!ver || !global.document) return;
    var nodes = global.document.querySelectorAll('a[href*="privacidad.html"], a[href*="index.html"]');
    for (var i = 0; i < nodes.length; i++) {
      var a = nodes[i];
      var href = String(a.getAttribute("href") || "");
      if (!href || href.indexOf("javascript:") === 0) continue;
      if (/^https?:\/\//i.test(href) && href.indexOf(global.location.origin) !== 0) continue;
      if (/privacidad\.html/i.test(href) || /index\.html/i.test(href)) {
        a.setAttribute("href", withBust(href, ver));
      }
    }
  }

  function bustStaleHtml(remote) {
    try {
      var u = new URL(global.location.href);
      if (u.searchParams.get("v") === remote) return false;
      var attemptKey = "myweb_html_bust_" + remote;
      if (global.sessionStorage.getItem(attemptKey) === "1") return false;
      global.sessionStorage.setItem(attemptKey, "1");
      u.searchParams.set("v", remote);
      global.location.replace(u.pathname + u.search + u.hash);
      return true;
    } catch (e) {
      return false;
    }
  }

  function clearBustAttempt(ver) {
    try {
      global.sessionStorage.removeItem("myweb_html_bust_" + ver);
    } catch (e) {
      /* ignore */
    }
  }

  /** Inyecta data.js ya descargado (sin segunda petición cacheable). */
  function injectDataJs(jsText) {
    if (!jsText || !global.document) return false;
    try {
      var s = global.document.createElement("script");
      s.type = "text/javascript";
      s.text = jsText;
      (global.document.body || global.document.head).appendChild(s);
      return true;
    } catch (e) {
      return false;
    }
  }

  function finish(ver, dataJsText) {
    var v = String(ver || BAKED || "").trim() || BAKED;
    global.MYWEB_ASSET_V = v;
    global.__MYWEB_DATA_JS_TEXT__ = dataJsText || "";
    try {
      global.localStorage.setItem(LAST_KEY, v);
    } catch (e) {
      /* ignore */
    }
    clearBustAttempt(v);
    wireVersionedLinks(v);
    try {
      global.dispatchEvent(
        new CustomEvent("myweb:version-ready", {
          detail: { version: v, dataJsText: dataJsText || "" },
        })
      );
    } catch (e) {
      /* ignore */
    }
  }

  global.MYWEB_wireVersionedLinks = wireVersionedLinks;
  global.MYWEB_injectDataJs = injectDataJs;

  fetch("./data.js?_=" + Date.now(), { cache: "no-store", credentials: "same-origin" })
    .then(function (r) {
      if (!r.ok) throw new Error("data.js " + r.status);
      return r.text();
    })
    .then(function (txt) {
      var remote = parseSiteVersion(txt) || BAKED;
      if (remote && BAKED && remote !== BAKED) {
        if (bustStaleHtml(remote)) return;
      }
      finish(remote || BAKED, txt);
    })
    .catch(function () {
      finish(BAKED, "");
    });
})(window);
