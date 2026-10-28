/**
 * Comprueba la versión publicada (data.js sin caché) y, si el HTML local está
 * desfasado, recarga el documento con ?v=REMOTA para forzar HTML+CSS+JS nuevos.
 * También reescribe enlaces a privacidad.html / index.html con el bust actual.
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

  function finish(ver) {
    var v = String(ver || BAKED || "").trim() || BAKED;
    global.MYWEB_ASSET_V = v;
    try {
      global.localStorage.setItem(LAST_KEY, v);
    } catch (e) {
      /* ignore */
    }
    clearBustAttempt(v);
    wireVersionedLinks(v);
    try {
      global.dispatchEvent(new CustomEvent("myweb:version-ready", { detail: { version: v } }));
    } catch (e) {
      /* ignore */
    }
  }

  global.MYWEB_wireVersionedLinks = wireVersionedLinks;

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
      finish(remote || BAKED);
    })
    .catch(function () {
      finish(BAKED);
    });
})(window);
