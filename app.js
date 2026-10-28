(() => {
  const DATA = window.MYWEB_DATA;
  if (!DATA) {
    // eslint-disable-next-line no-console
    console.error("Falta MYWEB_DATA en data.js");
    return;
  }

  const stageSelectEl = document.getElementById("stage-select");
  const levelSelectEl = document.getElementById("level-select");
  const materialSelectEl = document.getElementById("material-select");
  const unitSelectEl = document.getElementById("unit-select");
  const brandTitleEl = document.getElementById("site-title");
  const brandLogoEl = document.querySelector(".brand-logo");
  const docenciaMenuEl = document.getElementById("docencia-menu");
  const unitSearchEl = document.getElementById("unit-search");
  const unitSearchBtnEl = document.getElementById("unit-search-btn");
  const quickSearchFormEl = document.getElementById("quick-search-form");
  const searchResultsEl = document.getElementById("search-results");
  const docenciaToggleBtnEl = document.getElementById("docencia-toggle-btn");
  const docenciaMenuTitleEl = document.querySelector(".docencia-menu-title");
  const unitTagEl = document.getElementById("unit-tag");
  const unitTitleEl = document.getElementById("unit-title");
  const breadcrumbsEl = document.getElementById("breadcrumbs");
  const progressIndicatorEl = document.getElementById("progress-indicator");
  const tabPanelEl = document.getElementById("tab-panel");
  if (tabPanelEl) {
    const blockAboutPhotoUi = (event) => {
      const t = event.target;
      if (t instanceof Element && t.closest(".about-section__photo")) {
        event.preventDefault();
      }
    };
    tabPanelEl.addEventListener("contextmenu", blockAboutPhotoUi);
    tabPanelEl.addEventListener("dragstart", blockAboutPhotoUi);
  }
  const contentCardEl = document.querySelector(".content-card");
  const homeBtnEl = document.getElementById("home-btn");
  const aboutBtnEl = document.getElementById("about-btn");
  const docenciaBtnEl = document.getElementById("docencia-btn");
  const legislacionBtnEl = document.getElementById("legislacion-btn");
  const booksBtnEl = document.getElementById("books-btn");
  const helpBtnEl = document.getElementById("help-btn");
  const miscelaneaBtnEl = document.getElementById("miscelanea-btn");
  const updatesBtnEl = document.getElementById("updates-btn");
  const navButtons = [homeBtnEl, updatesBtnEl, docenciaBtnEl, legislacionBtnEl, booksBtnEl, miscelaneaBtnEl, aboutBtnEl, helpBtnEl].filter(Boolean);
  const levels = Array.isArray(DATA.levels) ? DATA.levels : [];

  const UPDATES_LAST_SEEN_HASH_KEY = "myweb_updates_last_seen_hash_v1"; // legado (migración)
  const UPDATES_SEEN_IDS_KEY = "myweb_updates_seen_ids_v1";
  const UPDATES_SEEN_BOOTSTRAP_KEY = "myweb_updates_seen_bootstrapped_v1";
  const NEWS_SEEN_IDS_KEY = "myweb_news_seen_ids_v1";
  const NEWS_SEEN_BOOTSTRAP_KEY = "myweb_news_seen_bootstrapped_v1";
  const UPDATES_NUDGE_DURATION_MS = 10000;
  const UPDATES_BADGE_EXPIRE_MS = 14 * 24 * 60 * 60 * 1000; // solo para seed inicial del archivo

  // Anti-caché de iconos solo al publicar (versión del sitio), no en cada recarga.
  const ICONS_VERSION = String(DATA?.siteMeta?.version || "1").trim().replace(/^v/i, "") || "1";

  const SECTION_ICONS = {
    teoria: `<img src="./icons/teoria.png?v=${ICONS_VERSION}" alt="" decoding="async" loading="lazy" />`,
    actividades: `<img src="./icons/actividades.png?v=${ICONS_VERSION}" alt="" decoding="async" loading="lazy" />`,
    practicas: `<img src="./icons/practicas.png?v=${ICONS_VERSION}" alt="" decoding="async" loading="lazy" />`,
    recursos: `<img src="./icons/recursos.png?v=${ICONS_VERSION}" alt="" decoding="async" loading="lazy" />`
  };

  const STAGE_OPTIONS = {
    eso: "ESO",
    bach: "BACHILLERATO"
  };
  let currentState = {
    section: "home",
    stageId: "",
    levelId: "",
    materialId: "",
    unitId: "",
    tabId: "",
    miscId: "",
    docenciaCollapsed: false,
    searchQuery: ""
  };

  let welcomeRevealTimer = null;

  /** Detiene la animación de bienvenida (evita fugas al cambiar de vista). */
  function stopWelcomeAnimation() {
    if (welcomeRevealTimer) {
      clearTimeout(welcomeRevealTimer);
      welcomeRevealTimer = null;
    }
  }

  function resetToHome() {
    stageSelectEl.value = "";
    resetSelect(levelSelectEl, "Selecciona nivel...");
    resetSelect(materialSelectEl, "Selecciona materia...");
    resetSelect(unitSelectEl, "Selecciona unidad...");
    tabPanelEl.dataset.unitId = "";

    unitTagEl.textContent = "";
    unitTitleEl.textContent = "Bienvenido/a";
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";

    // Modo INICIO (para estilos específicos sin mover el contenido).
    contentCardEl?.classList.add("is-home");

    stopWelcomeAnimation();
    const news = Array.isArray(DATA.news) ? DATA.news : [];
    tabPanelEl.innerHTML = `
      <div class="empty-state welcome">
        <div class="home-split">
          <aside class="home-year-results" aria-label="Histórico de noticias"></aside>
          <div class="welcome-copy">
            <p class="welcome-intro">
              <strong class="welcome-brand">T·I·D·A<span class="brand-suffix">hub</span></strong> es un espacio de divulgación educativa dedicado a las materias de Tecnología, Ingeniería y Digitalización en
              Educación Secundaria y Bachillerato.
              Éstas son clave para comprender y transformar el mundo actual: desarrollando el pensamiento computacional,
              la resolución de problemas, el diseño y la creatividad aplicada; fortaleciendo competencias digitales seguras y
              responsables; y conectando la ciencia y la tecnología con la realidad mediante proyectos y retos.
            </p>
            <p class="welcome-intro">
              En esta web encontrarás material de apoyo de teoría, actividades, prácticas y recursos, organizados por etapa, nivel, materia y unidad, para
              que puedas acceder rápidamente a los contenidos y planificar tu trabajo y estudio, tanto si eres docente como estudiante.
              Puedes empezar desde el menú <strong>DOCENCIA</strong>.
            </p>
            <p class="welcome-intro">
              En la sección <strong>PROYECTOS</strong> se presentan los trabajos y evidencias realizadas con mis estudiantes y también de forma
              interdisciplinar, incluyendo información para poder replicarlos o adaptarlos en función de vuestro interés.
            </p>
            <p class="welcome-intro">
              Se incluye también, en el apartado <strong>LEGISLACIÓN</strong>, una recopilación de la normativa vigente en materia de educación a nivel
              nacional y de la comunidad autónoma donde actualmente imparto docencia, Principado de Asturias.
            </p>
            <p class="welcome-intro">
              Además, en <strong>MISCELÁNEA</strong> encontrarás un espacio de recursos complementarios organizado por secciones: Diseño e Impresión 3D, Programación y Robótica, IoT, IA, Hacking Ético, Blockchain y Big Data, Soft Skills, Lecturas recomendadas, Media, Juegos y Enlaces de interés, entre otros. Es una selección personal pensada para explorar ideas, herramientas y contenidos de apoyo, ampliando materiales de divulgación, trabajo y aprendizaje en esos ámbitos.
            </p>
            <p class="welcome-intro">
              ¡Qué tengas buena experiencia de navegación por este espacio vivo y en constante mejora y actualización!
            </p>
          </div>
          <aside class="home-news" aria-label="Últimas noticias">
            <h3 class="home-news__title">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                <path
                  d="M6 3h12a2 2 0 0 1 2 2v14.2a1.8 1.8 0 0 1-1.8 1.8H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h12V5H6zm2.2 3h7.6v1.8H8.2V8zm0 3.4h7.6v1.8H8.2v-1.8zm0 3.4h5.2v1.8H8.2v-1.8z"
                  fill="currentColor"
                />
              </svg>
              NOTICIAS
            </h3>
            <div class="home-news__split">
              <section class="home-news__recent" aria-label="Publicaciones recientes"></section>
              <section class="home-news__history" aria-label="Histórico por años"></section>
            </div>
          </aside>
        </div>
      </div>
    `;
    // Recalcular tras layout y tras carga de fuentes/imagenes (evita solapes con la cabecera).
    syncHomeNewsDock();
    requestAnimationFrame(() => syncHomeNewsDock());
    setTimeout(syncHomeNewsDock, 60);
    renderHomeNews(news);
    // Si hay novedades nuevas, hace un nudge suave en INICIO (1 vez por sesión).
    updateUpdatesIndicator({ nudge: true });
    animateWelcomeText();
    animateContentSwitch();
  }

  function normalizeNewsItem(item) {
    const publishedAt = String(item?.publishedAt || "").trim();
    const title = String(item?.title || "").trim();
    const text = String(item?.text || "").trim();
    const url = String(item?.url || "").trim();
    if (!publishedAt || !title) return null;
    const year = publishedAt.slice(0, 4);
    if (!/^\d{4}$/.test(year)) return null;
    // `publishedAt` es la fecha/hora que tú asignas al dar de alta la noticia en esta web (no se calcula automáticamente).
    // No tiene por qué coincidir con la fecha del medio externo.
    return { publishedAt, year, title, text, url, __ms: parsePublishedAtToMs(publishedAt) };
  }

  /** Fecha/hora de publicación en la web (tal como está en `publishedAt`). Formato: YYYY-MM-DD [HH:mm] */
  function formatPublishedAt(value) {
    const toDots = (dateStr) => {
      const d = String(dateStr || "").slice(0, 10);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
      return `${d.slice(0, 4)}.${d.slice(5, 7)}.${d.slice(8, 10)}`;
    };
    const v = String(value || "").trim();
    if (!v) return "";
    const m = v.match(/^(\d{4}-\d{2}-\d{2})[T ](\d{1,2}):(\d{2})/);
    if (m) {
      const hh = m[2].padStart(2, "0");
      return `${toDots(m[1])} [${hh}:${m[3]}]`;
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return toDots(v);
    const d = v.slice(0, 10);
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return toDots(d);
    return v;
  }

  function getNewsItemKey(n) {
    const sig = `${String(n?.publishedAt || "").trim()}|${String(n?.title || "").trim()}|${String(n?.url || "").trim()}`;
    return `news:${hashStringFNV1a(sig)}`;
  }

  function loadSeenNewsIds() {
    try {
      const raw = localStorage.getItem(NEWS_SEEN_IDS_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(arr)) return new Set();
      return new Set(arr.map((x) => String(x)));
    } catch {
      return new Set();
    }
  }

  function saveSeenNewsIds(seen) {
    try {
      localStorage.setItem(NEWS_SEEN_IDS_KEY, JSON.stringify([...seen]));
    } catch {}
  }

  function bootstrapSeenNewsIdsIfNeeded(newsItems) {
    try {
      if (localStorage.getItem(NEWS_SEEN_BOOTSTRAP_KEY) === "1") return;
    } catch {
      return;
    }
    const seen = loadSeenNewsIds();
    const now = Date.now();
    for (const n of newsItems || []) {
      if (Number(n.__ms) > 0 && now - Number(n.__ms) > UPDATES_BADGE_EXPIRE_MS) {
        seen.add(getNewsItemKey(n));
      }
    }
    saveSeenNewsIds(seen);
    try {
      localStorage.setItem(NEWS_SEEN_BOOTSTRAP_KEY, "1");
    } catch {}
  }

  function markNewsItemSeen(key) {
    const k = String(key || "").trim();
    if (!k) return;
    const seen = loadSeenNewsIds();
    if (!seen.has(k)) {
      seen.add(k);
      saveSeenNewsIds(seen);
    }
    // Quitar resalte en panel NOTICIAS e HISTÓRICO a la vez (misma clave).
    const root = tabPanelEl || document;
    root.querySelectorAll(`li.is-unseen-news[data-news-key="${CSS.escape(k)}"]`).forEach((row) => {
      row.classList.remove("is-unseen-news");
    });
  }

  function renderHomeNews(rawNews) {
    const recentEl = tabPanelEl?.querySelector(".home-news__recent");
    const historyEl = tabPanelEl?.querySelector(".home-news__history");
    const yearResultsEl = tabPanelEl?.querySelector(".home-year-results");
    if (!recentEl || !historyEl || !yearResultsEl) return;

    const items = (rawNews || [])
      .map((it, idx) => {
        const n = normalizeNewsItem(it);
        if (!n) return null;
        return { ...n, __idx: idx };
      })
      .filter(Boolean);
    // Orden descendente: más reciente → más antiguo. Si empatan por fecha, la última añadida va primero.
    items.sort((a, b) => (a.__ms !== b.__ms ? b.__ms - a.__ms : b.__idx - a.__idx));

    bootstrapSeenNewsIdsIfNeeded(items);
    const seenNewsIds = loadSeenNewsIds();

    const years = Array.from(new Set(items.map((n) => n.year))).sort((a, b) => (a < b ? 1 : -1));

    const renderEmpty = () => `
      <div class="empty-state construction-notice">
        <strong>EN CONSTRUCCIÓN</strong>
        <br />
        Aquí publicaré noticias breves y enlaces.
      </div>
    `;

    // 2/3 superior: recientes
    if (!items.length) {
      recentEl.innerHTML = renderEmpty();
      historyEl.innerHTML = "";
      yearResultsEl.innerHTML = "";
      return;
    }

    const bindNewsSeenClicks = (rootEl) => {
      if (!rootEl) return;
      rootEl.querySelectorAll("a.news-title-link[data-news-key], a.year-result-title-link[data-news-key]").forEach((a) => {
        a.addEventListener("click", () => {
          const key = String(a.getAttribute("data-news-key") || "").trim();
          if (!key) return;
          markNewsItemSeen(key);
        });
      });
    };

    // Mostrar como máximo 10 recientes; el resto queda accesible en el histórico.
    const top = items.slice(0, 10);
    recentEl.innerHTML = `
      <ul class="news-list">
        ${top
          .map((n) => {
            const newsKey = getNewsItemKey(n);
            const isUnseen = !seenNewsIds.has(newsKey);
            const safeTitle = escapeHtml(n.title);
            const safeText = n.text ? escapeHtml(n.text) : "";
            const titleEl = n.url
              ? `<a class="news-title news-title-link" href="${escapeHtml(n.url)}" target="_blank" rel="noopener noreferrer" data-news-key="${escapeHtml(newsKey)}">${safeTitle}</a>`
              : `<div class="news-title">${safeTitle}</div>`;
            return `
              <li class="news-item${isUnseen ? " is-unseen-news" : ""}" data-news-key="${escapeHtml(newsKey)}">
                <div class="news-meta">
                  <span class="news-date">${escapeHtml(formatPublishedAt(n.publishedAt))}</span>
                </div>
                ${titleEl}
                ${safeText ? `<div class="news-text">${safeText}</div>` : ""}
              </li>
            `;
          })
          .join("")}
      </ul>
    `;
    bindNewsSeenClicks(recentEl);

    // 1/3 inferior: años
    historyEl.innerHTML = `
      <h4 class="home-news__subtitle">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
          <path
            d="M12 4.2a7.8 7.8 0 1 0 7.8 7.8h-2.1a5.7 5.7 0 1 1-1.66-4.04L14.6 9.4H20V4l-1.9 1.9A7.77 7.77 0 0 0 12 4.2zm-1.1 4.2h2.1v4.2l3 1.8-1.1 1.8-4-2.4V8.4z"
            fill="currentColor"
          />
        </svg>
        HISTÓRICO
      </h4>
      <div class="year-grid">
        ${years.map((y) => `<button type="button" class="year-btn" data-year="${y}">${y}</button>`).join("")}
      </div>
    `;

    const renderYear = (year) => {
      const list = items.filter((n) => n.year === year);
      // Modo histórico: ocultar bienvenida y mostrar listado a la izquierda.
      const homeSplitEl = tabPanelEl?.querySelector(".home-split");
      if (homeSplitEl) homeSplitEl.classList.add("is-archive");
      // En modo histórico, el título debe ocupar su espacio (evita solapes).
      contentCardEl?.classList.remove("is-home");
      unitTitleEl.textContent = `HISTÓRICO ${year}`;
      breadcrumbsEl.textContent = "";
      progressIndicatorEl.textContent = "";

      const monthNames = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      const currentMonthKey = (() => {
        const now = new Date();
        const y = String(now.getFullYear());
        const m = String(now.getMonth() + 1).padStart(2, "0");
        return `${y}-${m}`;
      })();

      yearResultsEl.innerHTML = `
        <div class="month-groups" aria-label="Histórico por meses">
          ${(() => {
            const buckets = new Map();
            for (const n of list) {
              const monthKey = String(n.publishedAt || "").slice(0, 7); // YYYY-MM
              if (!buckets.has(monthKey)) buckets.set(monthKey, []);
              buckets.get(monthKey).push(n);
            }
            const monthKeys = Array.from(buckets.keys()).filter(Boolean);
            // list ya viene ordenada desc; preservamos el orden de aparición de los meses.
            const seen = new Set();
            const orderedMonthKeys = [];
            for (const n of list) {
              const k = String(n.publishedAt || "").slice(0, 7);
              if (!k || seen.has(k)) continue;
              seen.add(k);
              orderedMonthKeys.push(k);
            }
            for (const k of monthKeys) {
              if (!seen.has(k)) orderedMonthKeys.push(k);
            }

            return orderedMonthKeys
              .map((monthKey, idx) => {
                const openMonthKey = orderedMonthKeys.includes(currentMonthKey) ? currentMonthKey : orderedMonthKeys[0] || "";
                const m = Number(String(monthKey).slice(5, 7));
                const monthLabel = m >= 1 && m <= 12 ? monthNames[m - 1] : monthKey;
                const seenNow = loadSeenNewsIds();
                const rows = (buckets.get(monthKey) || [])
                  .map((n) => {
                    const newsKey = getNewsItemKey(n);
                    const isUnseen = !seenNow.has(newsKey);
                    const titleEl = n.url
                      ? `<a class="year-result-title year-result-title-link" href="${escapeHtml(n.url)}" target="_blank" rel="noopener noreferrer" data-news-key="${escapeHtml(newsKey)}">${escapeHtml(n.title)}</a>`
                      : `<span class="year-result-title">${escapeHtml(n.title)}</span>`;
                    return `
                      <li class="year-result${isUnseen ? " is-unseen-news" : ""}" data-news-key="${escapeHtml(newsKey)}">
                        <span class="year-result-date">${escapeHtml(formatPublishedAt(n.publishedAt))}</span>
                        ${titleEl}
                      </li>
                    `;
                  })
                  .join("");
                return `
                  <details class="month-group" ${monthKey === openMonthKey ? "open" : ""}>
                    <summary class="month-group__summary">${escapeHtml(monthLabel)}</summary>
                    <ul class="year-results-list" aria-label="${escapeHtml(monthLabel)}">
                      ${rows}
                    </ul>
                  </details>
                `;
              })
              .join("");
          })()}
        </div>
      `;
      bindNewsSeenClicks(yearResultsEl);
    };

    for (const btn of historyEl.querySelectorAll(".year-btn")) {
      btn.addEventListener("click", () => {
        for (const b of historyEl.querySelectorAll(".year-btn")) b.classList.toggle("is-active", b === btn);
        renderYear(btn.dataset.year);
      });
    }
  }

  function showUpdatesSection() {
    document.documentElement.classList.add("updates-archive");
    contentCardEl?.classList.remove("is-home");
    toggleDocenciaMenu(false);
    toggleContentCard(true);
    tabPanelEl.dataset.unitId = "";
    unitTagEl.textContent = "";
    unitTitleEl.textContent = "NOVEDADES";
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";
    stopWelcomeAnimation();

    const updates = collectAllUpdates();
    bootstrapSeenUpdateIdsIfNeeded();
    const seenUpdateIds = loadSeenUpdateIds();
    updateUpdatesIndicator({ nudge: false });

    const formatDateOnly = (value) => {
      const v = String(value || "").trim();
      if (!v) return "";
      const d = v.slice(0, 10);
      if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return `${d.slice(0, 4)}.${d.slice(5, 7)}.${d.slice(8, 10)}`;
      return v;
    };

    if (!updates.length) {
      tabPanelEl.innerHTML = `
        <div class="empty-state construction-notice">
          <strong>EN CONSTRUCCIÓN</strong>
          <br />
          Aquí iré publicando mejoras y novedades de la web.
        </div>
      `;
      animateContentSwitch();
      return;
    }

    const monthNames = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const currentMonthKey = (() => {
      const now = new Date();
      const y = String(now.getFullYear());
      const m = String(now.getMonth() + 1).padStart(2, "0");
      return `${y}-${m}`;
    })();

    tabPanelEl.innerHTML = `
      <div class="home-year-results">
        <div class="month-groups" aria-label="Novedades por meses">
          ${(() => {
            const buckets = new Map();
            for (const u of updates) {
              const monthKey = String(u.publishedAt || "").slice(0, 7); // YYYY-MM
              if (!buckets.has(monthKey)) buckets.set(monthKey, []);
              buckets.get(monthKey).push(u);
            }
            // Ordenar siempre por año/mes más reciente primero (YYYY-MM es ordenable lexicográficamente).
            const orderedMonthKeys = Array.from(buckets.keys())
              .filter(Boolean)
              .sort((a, b) => String(b).localeCompare(String(a)));

            return orderedMonthKeys
              .map((monthKey) => {
                const openMonthKey = orderedMonthKeys.includes(currentMonthKey) ? currentMonthKey : orderedMonthKeys[0] || "";
                const m = Number(String(monthKey).slice(5, 7));
                const y = String(monthKey).slice(0, 4);
                const monthLabelBase = m >= 1 && m <= 12 ? monthNames[m - 1] : monthKey;
                const monthLabel = /^\d{4}$/.test(y) ? `${y}_${monthLabelBase}` : monthLabelBase;
                const list = (buckets.get(monthKey) || [])
                  .slice()
                  .sort((a, b) =>
                    a.__ms !== b.__ms ? b.__ms - a.__ms : a.__priority - b.__priority
                  );
                const rows = list
                  .map((u) => {
                    const safeTitle = escapeHtml(u.title);
                    const safeText = u.text ? escapeHtml(u.text) : "";
                    const linkAttrs = (() => {
                      const externalUrl = String(u.__url || "").trim();
                      if (externalUrl) {
                        return `href="${escapeHtml(externalUrl)}" target="_blank" rel="noopener noreferrer"`;
                      }
                      const canLinkMisc =
                        Boolean(u.__miscId) &&
                        (Boolean(u.__readingId) || Boolean(u.__gameId) || Boolean(u.__mediaId) || u.__kind === "manual");
                      if (canLinkMisc) {
                        return `href="#" data-misc-id="${escapeHtml(u.__miscId || "")}" data-reading-id="${escapeHtml(u.__readingId || "")}" data-game-id="${escapeHtml(u.__gameId || "")}" data-media-id="${escapeHtml(u.__mediaId || "")}"`;
                      }
                      if (u.__navTarget) {
                        return `href="#" data-nav-target="${escapeHtml(u.__navTarget)}"`;
                      }
                      return "";
                    })();
                    const updateKey = getUpdateItemKey(u);
                    const linkAttrsWithKey = linkAttrs
                      ? `${linkAttrs} data-update-key="${escapeHtml(updateKey)}"`
                      : "";
                    const linkedName = (labelClass, name) =>
                      linkAttrsWithKey
                        ? `<a class="updates-item-link ${labelClass}" ${linkAttrsWithKey}>${escapeHtml(name)}</a>`
                        : `<span class="${labelClass}">${escapeHtml(name)}</span>`;
                    const oneLine = (() => {
                      if (u.__kind === "reading") {
                        return `LIBRO: ${linkedName("updates-book-title", u.__bookTitle || "")}`;
                      }
                      if (u.__kind === "game") {
                        return `JUEGO: ${linkedName("updates-game-title", u.__gameTitle || "")}`;
                      }
                      if (u.__kind === "media") {
                        return `MEDIA: ${linkedName("updates-media-title", u.__mediaTitle || "")}`;
                      }
                      // Avisos manuales: el hipervínculo es el título (no el texto de detalle).
                      const titlePart = linkAttrsWithKey
                        ? `<a class="updates-item-link updates-manual-title" ${linkAttrsWithKey}>${safeTitle}</a>`
                        : safeTitle;
                      return safeText ? `${titlePart} — ${safeText}` : titlePart;
                    })();
                    const isUnseen = !seenUpdateIds.has(updateKey);
                    return `
                      <li class="year-result year-result--update${isUnseen ? " is-unseen-update" : ""}" data-update-key="${escapeHtml(updateKey)}"${isUnseen && !linkAttrs ? ' title="Clic para marcar como vista"' : ""}>
                        <span class="year-result-date">${escapeHtml(formatDateOnly(u.publishedAt))}</span>
                        <span class="year-result-title">${oneLine}</span>
                      </li>
                    `;
                  })
                  .join("");
                return `
                  <details class="month-group" ${monthKey === openMonthKey ? "open" : ""}>
                    <summary class="month-group__summary">${escapeHtml(monthLabel)}</summary>
                    <ul class="year-results-list" aria-label="${escapeHtml(monthLabel)}">
                      ${rows}
                    </ul>
                  </details>
                `;
              })
              .join("");
          })()}
        </div>
      </div>
    `;

    const clearUnseenClass = (key) => {
      if (!key) return;
      tabPanelEl.querySelectorAll(`li.year-result[data-update-key="${CSS.escape(key)}"]`).forEach((li) => {
        li.classList.remove("is-unseen-update");
        li.removeAttribute("title");
      });
    };

    tabPanelEl.querySelectorAll("a.updates-item-link").forEach((a) => {
      a.addEventListener("click", (e) => {
        const key = String(a.getAttribute("data-update-key") || "").trim();
        const href = String(a.getAttribute("href") || "");
        if (href && href !== "#" && !href.startsWith("#")) {
          // Enlace externo: marcar como vista y dejar el comportamiento por defecto.
          if (key) {
            markUpdateItemSeen(key);
            clearUnseenClass(key);
          }
          return;
        }
        e.preventDefault();
        if (key) {
          markUpdateItemSeen(key);
          clearUnseenClass(key);
        }
        const miscId = String(a.getAttribute("data-misc-id") || "").trim();
        const readingId = String(a.getAttribute("data-reading-id") || "").trim();
        const gameId = String(a.getAttribute("data-game-id") || "").trim();
        const mediaId = String(a.getAttribute("data-media-id") || "").trim();
        const navTarget = String(a.getAttribute("data-nav-target") || "").trim();
        if (miscId) {
          navigateToMiscContent({ miscId, readingId, gameId, mediaId });
          return;
        }
        if (navTarget) applySearchNavTarget(navTarget);
      });
    });

    // Avisos sin enlace: un clic en la fila marca la novedad como vista.
    tabPanelEl.querySelectorAll("li.year-result.is-unseen-update").forEach((li) => {
      if (li.querySelector("a.updates-item-link")) return;
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        const key = String(li.getAttribute("data-update-key") || "").trim();
        if (!key) return;
        markUpdateItemSeen(key);
        clearUnseenClass(key);
      });
    });

    animateContentSwitch();
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function syncHomeNewsDock() {
    const headerEl = document.querySelector("header");
    if (!headerEl) return;
    const rect = headerEl.getBoundingClientRect();
    // Borde inferior exacto de la cabecera (lo usan sticky title y paneles).
    // Se actualiza también fuera de INICIO: en AYUDA/privacidad evita huecos con texto entrecortado.
    document.documentElement.style.setProperty("--home-news-top", `${rect.bottom}px`);
  }

  /** Bienvenida: revelado tipo cortina de izquierda a derecha. */
  function animateWelcomeText() {
    if (!tabPanelEl) return;
    stopWelcomeAnimation();
    const welcomeEl = tabPanelEl.querySelector(".welcome-copy");
    if (!welcomeEl) return;

    welcomeEl.classList.remove("welcome-reveal", "welcome-enter");
    // Forzar reflow para reiniciar la transición al volver a INICIO.
    void welcomeEl.offsetWidth;
    welcomeEl.classList.add("welcome-enter");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        welcomeEl.classList.add("welcome-reveal");
      });
    });

    welcomeRevealTimer = setTimeout(() => {
      welcomeEl.classList.remove("welcome-enter");
      welcomeEl.classList.add("welcome-reveal");
      welcomeRevealTimer = null;
    }, 2500);
  }

  function toggleDocenciaMenu(show) {
    if (!docenciaMenuEl) return;
    docenciaMenuEl.classList.toggle("is-hidden", !show);
  }

  function setDocenciaCollapsed(collapsed) {
    if (!docenciaMenuEl || !docenciaToggleBtnEl) return;
    docenciaMenuEl.classList.toggle("is-collapsed", collapsed);
    docenciaToggleBtnEl.setAttribute("aria-expanded", String(!collapsed));
    docenciaToggleBtnEl.setAttribute(
      "aria-label",
      collapsed ? "Desplegar panel de docencia" : "Plegar panel de docencia"
    );
    docenciaToggleBtnEl.textContent = collapsed ? "▸" : "▾";
    currentState.docenciaCollapsed = collapsed;
  }

  function getSelectedLabel(selectEl) {
    if (!selectEl || !selectEl.value) return "";
    const opt = selectEl.selectedOptions && selectEl.selectedOptions[0];
    return opt && opt.textContent ? opt.textContent.trim() : "";
  }

  function updateDocenciaMenuTitle() {
    if (!docenciaMenuTitleEl) return;
    const parts = [];
    const stageLabel = stageSelectEl?.value ? STAGE_OPTIONS[stageSelectEl.value] : "";
    const levelLabel = getSelectedLabel(levelSelectEl);
    const materialLabel = getSelectedLabel(materialSelectEl);
    const unitLabel = getSelectedLabel(unitSelectEl);
    if (stageLabel) parts.push(stageLabel);
    if (levelLabel) parts.push(levelLabel);
    if (materialLabel) parts.push(materialLabel);
    if (unitLabel) parts.push(unitLabel);
    docenciaMenuTitleEl.textContent = parts.length ? parts.join(" / ") : "SELECCIONA...";
  }

  function toggleContentCard(show) {
    if (!contentCardEl) return;
    contentCardEl.classList.toggle("is-hidden", !show);
  }

  function animateContentSwitch() {
    if (!contentCardEl) return;
    contentCardEl.classList.add("view-switch");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        contentCardEl.classList.remove("view-switch");
      });
    });
  }

  function setActiveMenu(activeButton) {
    // Reset de modos visuales globales (se activan solo en vistas concretas).
    document.documentElement.classList.remove("updates-archive");
    for (const btn of navButtons) {
      btn.classList.toggle("active", Boolean(activeButton) && btn === activeButton);
    }
  }

  function parsePublishedAtToMs(value) {
    const v = String(value || "").trim();
    if (!v) return 0;
    // Acepta "YYYY-MM-DD" o "YYYY-MM-DDTHH:mm" (sin zona).
    const m = v.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{1,2}):(\d{2}))?/);
    if (!m) return 0;
    const y = Number(m[1]);
    const mo = Number(m[2]);
    const d = Number(m[3]);
    const hh = m[4] ? Number(m[4]) : 0;
    const mm = m[5] ? Number(m[5]) : 0;
    if (!y || !mo || !d) return 0;
    // Hora local (consistente con cómo se muestra en la web).
    const dt = new Date(y, mo - 1, d, hh, mm, 0, 0);
    return Number.isFinite(dt.getTime()) ? dt.getTime() : 0;
  }

  function collectAllUpdates() {
    const normalizeUpdateItem = (item) => {
      const publishedAt = String(item?.publishedAt || "").trim();
      const title = String(item?.title || "").trim();
      const text = String(item?.text || "").trim();
      if (!publishedAt || !title) return null;
      const year = publishedAt.slice(0, 4);
      if (!/^\d{4}$/.test(year)) return null;
      return { publishedAt, year, title, text };
    };

    const pickNavFields = (it) => ({
      __navTarget: String(it?.navTarget || "").trim(),
      __miscId: String(it?.miscId || "").trim(),
      __readingId: String(it?.readingId || "").trim(),
      __gameId: String(it?.gameId || "").trim(),
      __mediaId: String(it?.mediaId || "").trim(),
      __url: String(it?.url || it?.href || "").trim()
    });

    // Prioridad de desempate (menor = más arriba): updates manuales se añaden al final del array;
    // lecturas/juegos/media se anteponen (índice 0 = más reciente).
    const baseUpdates = (Array.isArray(DATA.updates) ? DATA.updates : [])
      .map((it, idx) => {
        const n = normalizeUpdateItem(it);
        if (!n) return null;
        return {
          ...n,
          ...pickNavFields(it),
          __priority: -idx,
          __ms: parsePublishedAtToMs(n.publishedAt),
          __kind: "manual"
        };
      })
      .filter(Boolean);

    const readingsRaw = Array.isArray(DATA.readings) ? DATA.readings : [];
    const readingUpdates = readingsRaw
      .map((r, idx) => {
        const publishedAt = String(r?.addedAt || "").trim();
        const title = String(r?.title || "").trim();
        const id = String(r?.id || "").trim();
        if (!publishedAt || !title) return null;
        const n = normalizeUpdateItem({
          publishedAt,
          title: `LIBRO: ${title}`,
          text: ""
        });
        if (!n) return null;
        return {
          ...n,
          __priority: idx,
          __ms: parsePublishedAtToMs(n.publishedAt),
          __kind: "reading",
          __bookTitle: title,
          __miscId: "misc_lr",
          __readingId: id
        };
      })
      .filter(Boolean);

    const gamesRaw = Array.isArray(DATA.games) ? DATA.games : [];
    const gameUpdates = gamesRaw
      .map((g, idx) => {
        const publishedAt = String(g?.addedAt || "").trim();
        const title = String(g?.title || "").trim();
        const id = String(g?.id || "").trim();
        if (!publishedAt || !title) return null;
        const n = normalizeUpdateItem({
          publishedAt,
          title: `JUEGO: ${title}`,
          text: ""
        });
        if (!n) return null;
        return {
          ...n,
          __priority: idx,
          __ms: parsePublishedAtToMs(n.publishedAt),
          __kind: "game",
          __gameTitle: title,
          __miscId: "misc_jt",
          __gameId: id
        };
      })
      .filter(Boolean);

    const mediaRaw = Array.isArray(DATA.media) ? DATA.media : [];
    const mediaUpdates = mediaRaw
      .map((m, idx) => {
        const publishedAt = String(m?.addedAt || "").trim();
        const title = String(m?.title || "").trim();
        const id = String(m?.id || "").trim();
        if (!publishedAt || !title) return null;
        const n = normalizeUpdateItem({
          publishedAt,
          title: `MEDIA: ${title}`,
          text: ""
        });
        if (!n) return null;
        return {
          ...n,
          __priority: idx,
          __ms: parsePublishedAtToMs(n.publishedAt),
          __kind: "media",
          __mediaTitle: title,
          __miscId: "misc_av",
          __mediaId: id
        };
      })
      .filter(Boolean);

    const merged = [];
    const seen = new Set();
    for (const u of [...baseUpdates, ...readingUpdates, ...gameUpdates, ...mediaUpdates]) {
      const sig = `${u.publishedAt}|${u.title}|${u.text}`;
      if (seen.has(sig)) continue;
      seen.add(sig);
      merged.push(u);
    }

    // Orden descendente por fecha; a igualdad, menor __priority primero (más reciente en el catálogo).
    merged.sort((a, b) => (a.__ms !== b.__ms ? b.__ms - a.__ms : a.__priority - b.__priority));
    return merged;
  }

  function hashStringFNV1a(str) {
    // FNV-1a 32-bit
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i += 1) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return (h >>> 0).toString(16).padStart(8, "0");
  }

  function getUpdateItemKey(u) {
    const kind = String(u?.__kind || "manual");
    if (kind === "reading" && u.__readingId) return `reading:${String(u.__readingId).trim()}`;
    if (kind === "game" && u.__gameId) return `game:${String(u.__gameId).trim()}`;
    if (kind === "media" && u.__mediaId) return `media:${String(u.__mediaId).trim()}`;
    const sig = `${String(u?.publishedAt || "").trim()}|${String(u?.title || "").trim()}|${String(u?.text || "").trim()}`;
    return `manual:${hashStringFNV1a(sig)}`;
  }

  function loadSeenUpdateIds() {
    try {
      const raw = localStorage.getItem(UPDATES_SEEN_IDS_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(arr)) return new Set();
      return new Set(arr.map((x) => String(x)));
    } catch {
      return new Set();
    }
  }

  function saveSeenUpdateIds(seen) {
    try {
      localStorage.setItem(UPDATES_SEEN_IDS_KEY, JSON.stringify([...seen]));
    } catch {}
  }

  function bootstrapSeenUpdateIdsIfNeeded() {
    try {
      if (localStorage.getItem(UPDATES_SEEN_BOOTSTRAP_KEY) === "1") return;
    } catch {
      return;
    }
    const items = collectAllUpdates();
    const seen = loadSeenUpdateIds();
    const now = Date.now();
    // Evitar resaltar todo el histórico: seed de vistas solo para entradas con más de 14 días.
    // Las recientes quedan pendientes hasta que el usuario abra cada una.
    for (const u of items) {
      if (Number(u.__ms) > 0 && now - Number(u.__ms) > UPDATES_BADGE_EXPIRE_MS) {
        seen.add(getUpdateItemKey(u));
      }
    }
    saveSeenUpdateIds(seen);
    try {
      localStorage.setItem(UPDATES_SEEN_BOOTSTRAP_KEY, "1");
      localStorage.removeItem(UPDATES_LAST_SEEN_HASH_KEY);
    } catch {}
  }

  function markUpdateItemSeen(key) {
    const k = String(key || "").trim();
    if (!k) return;
    bootstrapSeenUpdateIdsIfNeeded();
    const seen = loadSeenUpdateIds();
    if (seen.has(k)) return;
    seen.add(k);
    saveSeenUpdateIds(seen);
    updateUpdatesIndicator({ nudge: false });
  }

  function hasUnseenUpdates() {
    bootstrapSeenUpdateIdsIfNeeded();
    const seen = loadSeenUpdateIds();
    return collectAllUpdates().some((u) => !seen.has(getUpdateItemKey(u)));
  }

  function updateUpdatesIndicator({ nudge } = { nudge: false }) {
    if (!updatesBtnEl) return;
    const hasNew = hasUnseenUpdates();
    updatesBtnEl.classList.toggle("has-updates-new", hasNew);

    if (!hasNew) {
      updatesBtnEl.classList.remove("updates-nudge");
      return;
    }

    if (!nudge) return;
    // Nudge temporal cada vez que entramos en INICIO (si hay novedades sin ver).
    updatesBtnEl.classList.remove("updates-nudge");
    // eslint-disable-next-line no-unused-expressions
    updatesBtnEl.offsetWidth;
    updatesBtnEl.classList.add("updates-nudge");
    setTimeout(() => updatesBtnEl.classList.remove("updates-nudge"), UPDATES_NUDGE_DURATION_MS);
  }

  function tokenizeSearchQuery(raw) {
    return String(raw || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(/\s+/)
      .filter(Boolean);
  }

  function searchHaystackMatchesTokens(tokens, haystack) {
    if (!tokens.length) return false;
    const hay = String(haystack || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      // Convertir a “palabras” para evitar falsos positivos por subcadenas (p. ej. current ⊂ recurrentes)
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
    if (!hay) return false;
    const words = new Set(hay.split(/\s+/).filter(Boolean));
    return tokens.every((t) => words.has(t));
  }

  function collectNewsSearchHits(tokens) {
    const raw = Array.isArray(DATA.news) ? DATA.news : [];
    const hits = [];
    for (const item of raw.map(normalizeNewsItem).filter(Boolean)) {
      const hay = `${item.title} ${item.text} ${item.publishedAt}`;
      if (!searchHaystackMatchesTokens(tokens, hay)) continue;
      hits.push({
        kind: "news",
        section: "INICIO · Noticias",
        title: item.title,
        meta: formatPublishedAt(item.publishedAt),
        url: item.url
      });
    }
    return hits;
  }

  function collectDocenciaSearchHits(tokens) {
    if (!tokens.length) return [];
    const hits = [];
    const sectionTabs = Array.isArray(DATA.sectionTabs) ? DATA.sectionTabs : [];
    for (const level of levels) {
      for (const material of level.materials || []) {
        for (const unit of material.units || []) {
          const stageId = getStageFromLevel(level);
          const baseSection = `DOCENCIA · ${STAGE_OPTIONS[stageId] || stageId} · ${level.label} · ${material.label}`;
          const unitHay = `${unit.label} ${material.label} ${level.label} ${unit.code || ""} ${unit.id || ""} ${String(unit.intro || "").trim()}`;
          const unitMatch = searchHaystackMatchesTokens(tokens, unitHay);
          const unitNorm = String(unitHay)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const onlyUnitTokens = tokens.every((t) => unitNorm.includes(t));

          const tabMatches = [];
          for (const tab of sectionTabs) {
            const tabHay = `${unitHay} ${tab.label} ${tab.id} pdf descarga documento archivo`;
            if (!searchHaystackMatchesTokens(tokens, tabHay)) continue;
            if (onlyUnitTokens) continue;
            tabMatches.push(tab);
          }

          for (const tab of tabMatches) {
            hits.push({
              kind: "doc",
              section: `${baseSection} · ${String(tab.label).toUpperCase()}`,
              title: `${unit.label} — ${tab.label}`,
              meta: "Materiales de la unidad (descargas)",
              path: { level, material, unit },
              tabId: tab.id
            });
          }

          if (unitMatch && tabMatches.length === 0) {
            hits.push({
              kind: "doc",
              section: baseSection,
              title: unit.label,
              meta: unit.code ? `Código ${unit.code}` : unit.id ? `Id ${unit.id}` : "Unidad didáctica",
              path: { level, material, unit },
              tabId: ""
            });
          }
        }
      }
    }
    return hits;
  }

  const DEFAULT_CONTENT_INDEX_ZONES = {
    misc: { label: "MISCELÁNEA", navTarget: "misc" },
    books: { label: "PROYECTOS", navTarget: "books" },
    about: { label: "SOBRE MÍ", navTarget: "about" },
    help: { label: "AYUDA", navTarget: "help" }
  };

  /** Solo entradas explícitas en data.js (no enlaces genéricos al menú). */
  function collectSiteSearchEntriesHits(tokens) {
    if (!tokens.length) return [];
    const hits = [];
    const fromData = Array.isArray(DATA.siteSearchEntries) ? DATA.siteSearchEntries : [];
    for (const entry of fromData) {
      if (!entry || typeof entry !== "object") continue;
      const hay = entry.haystack;
      if (typeof hay !== "string" || !String(hay).trim()) continue;
      if (!searchHaystackMatchesTokens(tokens, hay)) continue;
      const navTarget = String(entry.navTarget || "").trim();
      if (!navTarget) continue;
      hits.push({
        kind: "nav",
        section: String(entry.section || "Web").trim() || "Web",
        title: String(entry.title || "Entrada").trim() || "Entrada",
        meta: String(entry.meta || "").trim(),
        navTarget
      });
    }
    return hits;
  }

  function collectContentIndexSearchHits(tokens) {
    if (!tokens.length) return [];
    const ci = DATA.contentIndex;
    if (!ci || typeof ci !== "object") return [];
    const extraZones =
      typeof DATA.contentIndexZones === "object" && DATA.contentIndexZones && !Array.isArray(DATA.contentIndexZones)
        ? DATA.contentIndexZones
        : {};
    const zoneMap = { ...DEFAULT_CONTENT_INDEX_ZONES, ...extraZones };
    const hits = [];
    for (const [key, items] of Object.entries(ci)) {
      if (!Array.isArray(items)) continue;
      const conf = zoneMap[key];
      if (!conf || typeof conf !== "object" || !String(conf.navTarget || "").trim()) continue;
      const zoneLabel = String(conf.label || key).trim() || key.toUpperCase();
      for (const item of items) {
        if (!item || typeof item !== "object") continue;
        const title = String(item.title || "").trim();
        if (!title) continue;
        const hay = `${title} ${item.description || ""} ${item.keywords || ""} ${item.id || ""} ${item.subSection || ""}`;
        if (!searchHaystackMatchesTokens(tokens, hay)) continue;
        const sub = String(item.subSection || "").trim();
        hits.push({
          kind: "nav",
          section: sub ? `${zoneLabel} · ${sub}` : zoneLabel,
          title,
          meta: String(item.description || item.keywords || "").trim() || `Subapartado en ${zoneLabel}`,
          navTarget: String(conf.navTarget).trim()
        });
      }
    }
    return hits;
  }

  function collectLegislationSearchHits(tokens) {
    const law = DATA.legislation;
    if (!law || !tokens.length) return [];
    const blockLabels = { general: "GENERAL", eso: "ESO", bach: "BACHILLERATO" };
    const hits = [];
    for (const zoneKey of ["national", "asturias"]) {
      const zone = law[zoneKey];
      if (!zone || typeof zone !== "object") continue;
      const zoneTitle = String(zone.title || zoneKey);
      for (const blockKey of ["general", "eso", "bach"]) {
        const items = zone[blockKey];
        if (!Array.isArray(items)) continue;
        const blockLabel = blockLabels[blockKey] || blockKey;
        for (const item of items) {
          const hay = `${item.type || ""} ${item.ref || ""} ${item.title || ""}`;
          if (!searchHaystackMatchesTokens(tokens, hay)) continue;
          hits.push({
            kind: "law",
            section: `LEGISLACIÓN · ${zoneTitle} · ${blockLabel}`,
            title: String(item.title || "").trim(),
            meta: `${item.type || "Norma"} · ${item.ref || ""}`.trim(),
            url: String(item.url || "").trim()
          });
        }
      }
    }
    return hits;
  }

  function collectMiscMenuSearchHits(tokens) {
    if (!tokens.length) return [];
    const items = [
      { id: "misc_3d", label: "DISEÑO E IMPRESIÓN 3D", keywords: "diseño impresion 3d" },
      { id: "misc_pr", label: "PROGRAMACIÓN Y ROBÓTICA", keywords: "programacion robotica" },
      { id: "misc_iot", label: "IoT", keywords: "iot internet de las cosas sensores domotica" },
      { id: "misc_ia", label: "IA", keywords: "inteligencia artificial" },
      { id: "misc_sw", label: "HACKING ÉTICO", keywords: "hacking etico ético ciberseguridad seguridad pentesting" },
      { id: "misc_bc", label: "BLOCKCHAIN Y BIG DATA", keywords: "blockchain big data cadena bloques datos" },
      { id: "misc_ss", label: "SOFT SKILLS", keywords: "habilidades blandas" },
      { id: "misc_lr", label: "LECTURAS RECOMENDADAS", keywords: "libros lecturas" },
      { id: "misc_av", label: "MEDIA", keywords: "media audiovisual audio video av" },
      { id: "misc_jt", label: "JUEGOS", keywords: "juegos gamificacion" },
      { id: "misc_ei", label: "ENLACES DE INTERÉS", keywords: "enlaces enlaces de interes" }
    ];
    const hits = [];
    for (const it of items) {
      const hay = `${it.label} ${it.keywords} ${it.id}`;
      if (!searchHaystackMatchesTokens(tokens, hay)) continue;
      hits.push({
        kind: "nav",
        section: "MISCELÁNEA",
        title: it.label,
        meta: "Subapartado en Miscelánea",
        navTarget: "misc",
        miscId: it.id
      });
    }
    return hits;
  }

  function collectMiscContentSearchHits(tokens) {
    if (!tokens.length) return [];
    const hits = [];

    // Índice de contenido genérico de Miscelánea (data.js → contentIndex.misc)
    const miscIndex = Array.isArray(DATA.contentIndex?.misc) ? DATA.contentIndex.misc : [];
    for (const it of miscIndex) {
      if (!it || typeof it !== "object") continue;
      const title = String(it.title || "").trim();
      if (!title) continue;
      const sub = String(it.subSection || "").trim();
      const keywords = String(it.keywords || "").trim();
      const desc = String(it.description || "").trim();
      const id = String(it.id || "").trim();
      const hay = `${title} ${sub} ${keywords} ${desc} ${id}`;
      if (!searchHaystackMatchesTokens(tokens, hay)) continue;
      const miscId = String(it.miscId || "").trim(); // opcional: permite abrir directamente la tarjeta correcta
      hits.push({
        kind: "nav",
        section: sub ? `MISCELÁNEA · ${sub}` : "MISCELÁNEA",
        title,
        meta: desc || keywords || "Contenido en Miscelánea",
        navTarget: "misc",
        miscId: miscId || ""
      });
    }

    // Lecturas recomendadas (Miscelánea → LECTURAS RECOMENDADAS)
    const readingsRaw = Array.isArray(DATA.readings) ? DATA.readings : [];
    for (const r of readingsRaw) {
      const id = String(r?.id || "").trim();
      const title = String(r?.title || "").trim();
      if (!id || !title) continue;
      const authors = String(r?.authors || "").trim();
      const year = r?.year ? String(r.year) : "";
      const isbn = String(r?.isbn || "").trim();
      const desc = String(r?.description || "").trim();
      const themes = Array.isArray(r?.themes) ? r.themes.map((t) => String(t || "").trim()).filter(Boolean) : [];
      const hay = `${title} ${authors} ${year} ${isbn} ${themes.join(" ")} ${desc} ${id}`;
      if (!searchHaystackMatchesTokens(tokens, hay)) continue;
      hits.push({
        kind: "nav",
        section: "MISCELÁNEA · LECTURAS RECOMENDADAS",
        title,
        meta: `${authors}${authors && year ? " - " : ""}${year}`.trim(),
        navTarget: "misc",
        miscId: "misc_lr",
        readingId: id
      });
    }

    // Juegos (Miscelánea → JUEGOS)
    const gamesRaw = Array.isArray(DATA.games) ? DATA.games : [];
    for (const g of gamesRaw) {
      const id = String(g?.id || "").trim();
      const title = String(g?.title || "").trim();
      if (!id || !title) continue;
      const manufacturer = String(g?.manufacturer || "").trim();
      const language = String(g?.language || "").trim();
      const desc = String(g?.description || "").trim();
      const themes = Array.isArray(g?.themes) ? g.themes.map((t) => String(t || "").trim()).filter(Boolean) : [];
      const hay = `${title} ${manufacturer} ${language} ${themes.join(" ")} ${desc} ${id}`;
      if (!searchHaystackMatchesTokens(tokens, hay)) continue;
      hits.push({
        kind: "nav",
        section: "MISCELÁNEA · JUEGOS",
        title,
        meta: manufacturer ? `${manufacturer}${language ? ` (${language})` : ""}` : language ? `(${language})` : "",
        navTarget: "misc",
        miscId: "misc_jt",
        gameId: id
      });
    }

    return hits;
  }

  function runGlobalSearch() {
    const raw = unitSearchEl ? unitSearchEl.value : "";
    const tokens = tokenizeSearchQuery(raw);
    if (searchResultsEl) searchResultsEl.innerHTML = "";

    if (!tokens.length) {
      showGlobalSearchPage(raw, { emptyQuery: true });
      return;
    }

    const dataJsHits = [
      ...collectSiteSearchEntriesHits(tokens),
      ...collectContentIndexSearchHits(tokens),
      ...collectMiscMenuSearchHits(tokens),
      ...collectMiscContentSearchHits(tokens)
    ];
    const docenciaHits = collectDocenciaSearchHits(tokens);
    const newsHits = collectNewsSearchHits(tokens);
    const lawHits = collectLegislationSearchHits(tokens);
    showGlobalSearchPage(raw, { dataJsHits, docenciaHits, newsHits, lawHits });
  }

  /** Abre Miscelánea → subapartado y, si hay id, hace scroll hasta la ficha. */
  function navigateToMiscContent({ miscId, readingId, gameId, mediaId } = {}) {
    const mid = String(miscId || "").trim();
    if (!mid) {
      applySearchNavTarget("misc");
      return;
    }
    applySearchNavTarget("misc");
    const openAndScroll = () => {
      const b = document.querySelector(`button.misc-card[data-misc-id="${CSS.escape(mid)}"]`);
      if (b instanceof HTMLButtonElement) b.click();

      const rid = String(readingId || "").trim();
      const gid = String(gameId || "").trim();
      const avid = String(mediaId || "").trim();
      const selector = rid
        ? `.reading-card[data-reading-id="${CSS.escape(rid)}"]`
        : gid
          ? `.reading-card[data-game-id="${CSS.escape(gid)}"]`
          : avid
            ? `.reading-card[data-media-id="${CSS.escape(avid)}"]`
            : "";
      if (!selector) return;

      const tryScroll = (triesLeft) => {
        const card = document.querySelector(selector);
        if (card instanceof HTMLElement) {
          card.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
          return;
        }
        if (triesLeft <= 0) return;
        setTimeout(() => tryScroll(triesLeft - 1), 60);
      };
      setTimeout(() => tryScroll(16), 140);
    };
    requestAnimationFrame(() => requestAnimationFrame(openAndScroll));
  }

  function applySearchNavTarget(target) {
    const t = String(target || "").trim();
    if (t === "home") {
      homeBtnEl?.click();
      return;
    }
    if (t === "docencia") {
      docenciaBtnEl?.click();
      return;
    }
    if (t === "legislacion") {
      legislacionBtnEl?.click();
      return;
    }
    if (t === "help") {
      helpBtnEl?.click();
      return;
    }
    if (t === "about") {
      aboutBtnEl?.click();
      return;
    }
    if (t === "books") {
      booksBtnEl?.click();
      return;
    }
    if (t === "misc") {
      miscelaneaBtnEl?.click();
      return;
    }
    if (t === "privacy") {
      setActiveMenu(helpBtnEl);
      showPrivacyPolicyPanel(null);
      currentState = { ...currentState, section: "privacy" };
      pushAppHistory();
    }
    if (t === "updates") {
      setActiveMenu(updatesBtnEl);
      showUpdatesSection();
      currentState = { ...currentState, section: "updates" };
      pushAppHistory();
    }
  }

  function showGlobalSearchPage(rawQuery, bundle) {
    stopWelcomeAnimation();
    contentCardEl?.classList.remove("is-home");
    toggleDocenciaMenu(false);
    toggleContentCard(true);
    tabPanelEl.dataset.unitId = "";
    unitTagEl.textContent = "";
    unitTitleEl.textContent = "BÚSQUEDA";
    const safeQ = escapeHtml(rawQuery.trim());
    breadcrumbsEl.innerHTML = rawQuery.trim()
      ? `<span class="global-search-breadcrumb">Consulta: «${safeQ}»</span>`
      : "";
    progressIndicatorEl.textContent = "";

    setActiveMenu(null);

    if (bundle.emptyQuery) {
          tabPanelEl.innerHTML = `
        <div class="global-search-page">
          <p class="global-search-hint">Escribe una o varias palabras clave y pulsa <strong>BUSCAR</strong> (o Enter).</p>
            </div>
          `;
      currentState = {
        ...currentState,
        section: "search",
        searchQuery: "",
        levelId: "",
        materialId: "",
        unitId: "",
        tabId: ""
      };
      pushAppHistory();
      animateContentSwitch();
      return;
    }

    const { dataJsHits = [], docenciaHits = [], newsHits = [], lawHits = [] } = bundle;
    const rows = [
      ...dataJsHits.map((hit) => ({ kind: "nav", hit })),
      ...docenciaHits.map((hit) => ({ kind: "doc", hit })),
      ...newsHits.map((hit) => ({ kind: "news", hit })),
      ...lawHits.map((hit) => ({ kind: "law", hit }))
    ];
    rows.sort((a, b) => {
      const sa = `${a.hit.section}\n${a.hit.title}`;
      const sb = `${b.hit.section}\n${b.hit.title}`;
      return sa.localeCompare(sb, "es", { sensitivity: "base" });
    });
    const total = rows.length;

    const renderRow = (row, i) => {
      const hit = row.hit;
      const meta = escapeHtml(hit.section);
      const title = escapeHtml(hit.title);
      const sub = escapeHtml(hit.meta);
      const btn = (label) =>
        `<button type="button" class="global-search-hit__btn" data-search-row="${i}">${escapeHtml(label)}</button>`;
      if (row.kind === "nav") {
        return `<li class="global-search-hit" data-search-row="${i}">
          <div class="global-search-hit__meta">${meta}</div>
          <div class="global-search-hit__title">${title}</div>
          <div class="global-search-hit__sub">${sub}</div>
          ${btn("Ir a la sección")}
        </li>`;
      }
      if (row.kind === "doc") {
        const btnLabel = hit.tabId ? "Abrir unidad (pestaña)" : "Abrir en DOCENCIA";
        return `<li class="global-search-hit" data-search-row="${i}">
          <div class="global-search-hit__meta">${meta}</div>
          <div class="global-search-hit__title">${title}</div>
          <div class="global-search-hit__sub">${sub}</div>
          ${btn(btnLabel)}
        </li>`;
      }
      if (row.kind === "news") {
        const titleEl = hit.url
          ? `<a class="global-search-hit__title global-search-hit__title-link" href="${escapeHtml(hit.url)}" target="_blank" rel="noopener noreferrer">${title}</a>`
          : `<div class="global-search-hit__title">${title}</div>`;
        return `<li class="global-search-hit" data-search-row="${i}">
          <div class="global-search-hit__meta">${meta}</div>
          ${titleEl}
          <div class="global-search-hit__sub">${sub}</div>
        </li>`;
      }
      if (row.kind === "law") {
        const titleEl = hit.url
          ? `<a class="global-search-hit__title global-search-hit__title-link" href="${escapeHtml(hit.url)}" target="_blank" rel="noopener noreferrer">${title}</a>`
          : `<div class="global-search-hit__title">${title}</div>`;
        return `<li class="global-search-hit" data-search-row="${i}">
          <div class="global-search-hit__meta">${meta}</div>
          ${titleEl}
          <div class="global-search-hit__sub">${sub}</div>
        </li>`;
      }
      return "";
    };

    const listHtml = rows.map((row, i) => renderRow(row, i)).join("");

    const emptyMsg =
      total === 0
        ? `<p class="global-search-empty">No hay resultados para «<strong>${safeQ}</strong>». Todas las palabras deben aparecer en el mismo elemento. Prueba con menos términos o otras palabras.</p>`
        : `<p class="global-search-count">${total} resultado${total === 1 ? "" : "s"} (todas las palabras clave deben coincidir en cada ítem)</p>`;

    const listSection =
      total === 0
        ? ""
        : `<ul class="global-search-list" aria-label="Resultados de búsqueda">${listHtml}</ul>`;

    tabPanelEl.innerHTML = `
      <div class="global-search-page">
        ${emptyMsg}
        ${listSection}
      </div>
    `;

    tabPanelEl.querySelectorAll("li.global-search-hit").forEach((li) => {
      const i = Number(li.getAttribute("data-search-row"));
      if (Number.isNaN(i) || !rows[i]) return;
      const row = rows[i];
      const btn = li.querySelector("button.global-search-hit__btn");
      if (!btn) return;
      btn.addEventListener("click", () => {
        if (row.kind === "nav") {
          const hit = row.hit;
          if (hit?.navTarget === "misc" && hit?.miscId) {
            navigateToMiscContent({
              miscId: hit.miscId,
              readingId: hit.readingId,
              gameId: hit.gameId,
              mediaId: hit.mediaId
            });
          } else if (hit?.navTarget) {
            applySearchNavTarget(hit.navTarget);
          }
        } else if (row.kind === "doc") {
          const hit = row.hit;
          if (hit?.path) {
            setActiveMenu(docenciaBtnEl);
            openUnitPath({ ...hit.path, tabId: hit.tabId || "" });
          }
        }
      });
    });

    currentState = {
      ...currentState,
      section: "search",
      searchQuery: rawQuery.trim(),
      levelId: "",
      materialId: "",
      unitId: "",
      tabId: ""
    };
    pushAppHistory();
    animateContentSwitch();
  }


  /* Historial del navegador (atrás / adelante) */
  let suppressHistoryPush = false;

  function homeHistoryState() {
    return {
      myweb: 1,
      section: "home",
      stageId: "",
      levelId: "",
      materialId: "",
      unitId: "",
      tabId: "",
      miscId: "",
      searchQuery: "",
      docenciaCollapsed: false
    };
  }

  function snapshotHistoryState() {
    return {
      myweb: 1,
      section: currentState.section || "home",
      stageId: currentState.stageId || "",
      levelId: currentState.levelId || "",
      materialId: currentState.materialId || "",
      unitId: currentState.unitId || "",
      tabId: currentState.tabId || "",
      miscId: (currentState.section || "") === "miscelanea" ? currentState.miscId || "" : "",
      searchQuery: currentState.searchQuery || "",
      docenciaCollapsed: !!currentState.docenciaCollapsed
    };
  }

  function historyStateKey(st) {
    if (!st) return "";
    return [
      st.section || "home",
      st.levelId || "",
      st.materialId || "",
      st.unitId || "",
      st.tabId || "",
      st.miscId || "",
      st.searchQuery || ""
    ].join("|");
  }

  function sameHistoryState(a, b) {
    return historyStateKey(a) === historyStateKey(b);
  }

  function urlFromHistoryState(st) {
    const base = `${location.pathname}${location.search}`;
    const section = st?.section || "home";
    if (section === "home") return base;
    if (section === "help") return `${base}#help`;
    if (section === "privacy") return `${base}#privacy`;
    if (section === "about") return `${base}#about`;
    if (section === "books") return `${base}#books`;
    if (section === "legislacion") return `${base}#legislacion`;
    if (section === "miscelanea") {
      const mid = String(st.miscId || "").trim();
      return mid ? `${base}#miscelanea/${encodeURIComponent(mid)}` : `${base}#miscelanea`;
    }
    if (section === "updates") return `${base}#updates`;
    if (section === "search") {
      const q = encodeURIComponent(st.searchQuery || "");
      return q ? `${base}#search/${q}` : `${base}#search`;
    }
    if (section === "docencia") {
      if (st.levelId && st.materialId && st.unitId) {
        return `${base}#${encodeURIComponent(st.levelId)}/${encodeURIComponent(st.materialId)}/${encodeURIComponent(st.unitId)}`;
      }
      return `${base}#docencia`;
    }
    return base;
  }

  function pushAppHistory() {
    if (suppressHistoryPush) return;
    const st = snapshotHistoryState();
    // No duplicar la misma vista (evita inflar el historial y romper atrás/adelante).
    if (history.state && history.state.myweb === 1 && sameHistoryState(history.state, st)) {
      return;
    }
    history.pushState(st, "", urlFromHistoryState(st));
  }

  /** Tras cargar/recargar: una sola entrada INICIO; el historial interno crece al navegar. */
  function seedAppHistory() {
    const home = homeHistoryState();
    history.replaceState(home, "", urlFromHistoryState(home));
  }

  function openDocenciaUnitFromIds(levelId, materialId, unitId, tabId = "") {
    const level = findLevel(levelId);
    if (!level) return false;
    const material = findMaterial(level, materialId);
    if (!material) return false;
    const stageId = getStageFromLevel(level);
    const stageLevels = levels.filter((item) => getStageFromLevel(item) === stageId);
    stageSelectEl.value = stageId;
    fillSelect(levelSelectEl, stageLevels, "Selecciona nivel...");
    levelSelectEl.value = level.id;
    fillSelect(materialSelectEl, level.materials || [], "Selecciona materia...");
    materialSelectEl.value = material.id;
    const units = material.units || [];
    fillSelect(unitSelectEl, units, "Selecciona unidad...");
    if (units.length === 0) {
      setActiveMenu(docenciaBtnEl);
      toggleDocenciaMenu(true);
      showConstructionMessage(level, material);
      return true;
    }
    const unit = findUnit(material, unitId);
    if (!unit) return false;
    unitSelectEl.value = unit.id;
    setActiveMenu(docenciaBtnEl);
    toggleDocenciaMenu(true);
    onUnitSelected({ level, material, unit, tabId });
    return true;
  }

  function restoreHistorySnapshot(st) {
    if (!st || typeof st !== "object") return;
    currentState = {
      ...currentState,
      section: st.section || "home",
      stageId: st.stageId || "",
      levelId: st.levelId || "",
      materialId: st.materialId || "",
      unitId: st.unitId || "",
      tabId: st.tabId || "",
      miscId: st.miscId || "",
      searchQuery: st.searchQuery || "",
      docenciaCollapsed: !!st.docenciaCollapsed
    };

    const section = currentState.section;
    if (section === "home") {
      setActiveMenu(homeBtnEl);
      toggleDocenciaMenu(false);
      toggleContentCard(true);
      if (unitSearchEl) unitSearchEl.value = "";
      if (searchResultsEl) searchResultsEl.innerHTML = "";
      resetToHome();
      return;
    }
    if (section === "help") {
      setActiveMenu(helpBtnEl);
      showHelpForm();
      return;
    }
    if (section === "privacy") {
      setActiveMenu(helpBtnEl);
      showPrivacyPolicyPanel(null);
      return;
    }
    if (section === "about") {
      setActiveMenu(aboutBtnEl);
      showAboutSection();
      return;
    }
    if (section === "books") {
      setActiveMenu(booksBtnEl);
      showBooksSection();
      return;
    }
    if (section === "legislacion") {
      setActiveMenu(legislacionBtnEl);
      showLegislacionSection();
      return;
    }
    if (section === "miscelanea") {
      setActiveMenu(miscelaneaBtnEl);
      showMiscelaneaSection({ openMiscId: currentState.miscId || "" });
      return;
    }
    if (section === "updates") {
      setActiveMenu(updatesBtnEl);
      showUpdatesSection();
      return;
    }
    if (section === "search") {
      if (unitSearchEl) unitSearchEl.value = currentState.searchQuery || "";
      runGlobalSearch();
      return;
    }
    if (section === "docencia") {
      if (currentState.levelId && currentState.materialId && currentState.unitId) {
        openDocenciaUnitFromIds(
          currentState.levelId,
          currentState.materialId,
          currentState.unitId,
          currentState.tabId
        );
        return;
      }
      setActiveMenu(docenciaBtnEl);
      toggleDocenciaMenu(true);
      toggleContentCard(false);
      setDocenciaCollapsed(false);
      updateDocenciaMenuTitle();
      progressIndicatorEl.textContent = "Docencia";
      if (searchResultsEl) searchResultsEl.innerHTML = "";
      return;
    }
    setActiveMenu(homeBtnEl);
    resetToHome();
  }

  function applyRouteFromLocationHash() {
    const raw = String(location.hash || "").replace(/^#/, "");
    if (!raw || raw === "home") {
      restoreHistorySnapshot({ ...snapshotHistoryState(), section: "home", levelId: "", materialId: "", unitId: "", tabId: "", searchQuery: "" });
      return;
    }
    if (raw === "miscelanea" || raw.startsWith("miscelanea/")) {
      const miscId = raw === "miscelanea" ? "" : decodeURIComponent(raw.slice("miscelanea/".length));
      restoreHistorySnapshot({
        myweb: 1,
        section: "miscelanea",
        stageId: "",
        levelId: "",
        materialId: "",
        unitId: "",
        tabId: "",
        miscId,
        searchQuery: "",
        docenciaCollapsed: false
      });
      return;
    }
    if (raw === "help" || raw === "privacy" || raw === "about" || raw === "books" || raw === "legislacion" || raw === "updates" || raw === "docencia") {
      restoreHistorySnapshot({
        myweb: 1,
        section: raw,
        stageId: "",
        levelId: "",
        materialId: "",
        unitId: "",
        tabId: "",
        miscId: "",
        searchQuery: "",
        docenciaCollapsed: false
      });
      return;
    }
    if (raw === "search" || raw.startsWith("search/")) {
      const q = raw === "search" ? "" : decodeURIComponent(raw.slice("search/".length));
      restoreHistorySnapshot({ ...snapshotHistoryState(), section: "search", searchQuery: q });
      return;
    }
    const parsed = parseHash();
    if (parsed) {
      restoreHistorySnapshot({
        ...snapshotHistoryState(),
        section: "docencia",
        levelId: parsed.levelId,
        materialId: parsed.materialId,
        unitId: parsed.unitId
      });
      return;
    }
    restoreHistorySnapshot({ ...snapshotHistoryState(), section: "home" });
  }

  function showHelpForm(draft = null) {
    contentCardEl?.classList.remove("is-home");
    toggleDocenciaMenu(false);
    toggleContentCard(true);
    tabPanelEl.dataset.unitId = "";
    unitTagEl.textContent = "";
    unitTitleEl.textContent = "AYUDA";
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";
    stopWelcomeAnimation();
    tabPanelEl.innerHTML = `
      <form id="help-form" class="help-form" novalidate>
        <div class="help-row">
          <label class="help-field">
            <span>NOMBRE Y APELLIDOS <span class="req-asterisk" aria-hidden="true">*</span></span>
            <input id="help-name" name="name" type="text" maxlength="120" autocomplete="name" required />
          </label>
          <label class="help-field">
            <span>CORREO ELECTRÓNICO <span class="req-asterisk" aria-hidden="true">*</span></span>
            <input id="help-email" name="email" type="email" maxlength="180" autocomplete="email" required />
          </label>
        </div>
        <label class="help-field">
          <span>ASUNTO <span class="req-asterisk" aria-hidden="true">*</span></span>
          <input id="help-subject" name="subject" type="text" maxlength="180" required />
        </label>
        <label class="help-field">
          <span>DESCRIPCIÓN <span class="req-asterisk" aria-hidden="true">*</span></span>
          <textarea id="help-description" name="message" rows="8" required></textarea>
        </label>
        <!-- Honeypot antispam (Web3Forms): debe permanecer vacío / sin marcar -->
        <input type="checkbox" name="botcheck" class="help-botcheck" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <div class="help-consent-group" role="group" aria-label="Consentimientos">
          <label class="help-consent">
            <input id="help-read" type="checkbox" required />
            <span>
              He leído la información de
              <a class="help-privacy-link" href="./privacidad.html" rel="noopener noreferrer"
                ><strong>privacidad y protección de datos</strong></a
              >. <span class="req-asterisk" aria-hidden="true">*</span>
            </span>
          </label>
          <label class="help-consent">
            <input id="help-consent" type="checkbox" required />
            <span>Doy mi consentimiento para el tratamiento de mis datos con la finalidad de gestionar esta consulta. <span class="req-asterisk" aria-hidden="true">*</span></span>
          </label>
        </div>
        <div class="help-required-legend" aria-label="Campos obligatorios">
          <span class="req-asterisk" aria-hidden="true">*</span> Campo obligatorio
        </div>
        <button type="submit" class="help-submit" id="help-submit-btn">Enviar mensaje</button>
        <p id="help-form-status" class="help-form-status" role="status" aria-live="polite" hidden></p>
      </form>
    `;

    const formEl = document.getElementById("help-form");
    const nameEl = document.getElementById("help-name");
    const emailEl = document.getElementById("help-email");
    const subjectEl = document.getElementById("help-subject");
    const descriptionEl = document.getElementById("help-description");
    const readEl = document.getElementById("help-read");
    const consentEl = document.getElementById("help-consent");
    const submitBtnEl = document.getElementById("help-submit-btn");
    const statusEl = document.getElementById("help-form-status");
    const botcheckEl = formEl?.querySelector?.('input[name="botcheck"]');
    if (!formEl || !nameEl || !emailEl || !subjectEl || !descriptionEl || !readEl || !consentEl || !submitBtnEl || !statusEl) return;

    // Restablecer borrador (si venimos de leer privacidad)
    if (draft && typeof draft === "object") {
      nameEl.value = String(draft.name || "");
      emailEl.value = String(draft.email || "");
      subjectEl.value = String(draft.subject || "");
      descriptionEl.value = String(draft.description || "");
      readEl.checked = !!draft.read;
      consentEl.checked = !!draft.consent;
    }

    const getDraft = () => ({
      name: nameEl.value,
      email: emailEl.value,
      subject: subjectEl.value,
      description: descriptionEl.value,
      read: readEl.checked,
      consent: consentEl.checked,
    });

    // Abrir política de privacidad en la misma ventana (sin perder el borrador)
    const privacyLinkEl = formEl.querySelector(".help-privacy-link");
    if (privacyLinkEl) {
      privacyLinkEl.addEventListener("click", (e) => {
              e.preventDefault();
        showPrivacyPolicyPanel(getDraft());
        currentState = { ...currentState, section: "privacy" };
        pushAppHistory();
      });
    }

    const setHelpStatus = (kind, text) => {
      statusEl.hidden = !text;
      statusEl.textContent = text || "";
      statusEl.classList.remove("is-ok", "is-error");
      if (kind === "ok") statusEl.classList.add("is-ok");
      if (kind === "error") statusEl.classList.add("is-error");
    };

    formEl.addEventListener("submit", async (event) => {
      event.preventDefault();
      setHelpStatus("", "");
      if (!formEl.checkValidity()) {
        formEl.reportValidity();
        return;
      }
      const fullName = String(nameEl.value || "").trim();
      const fromEmail = String(emailEl.value || "").trim();
      const subject = String(subjectEl.value || "").trim();
      const description = String(descriptionEl.value || "").trim();
      if (!fullName || !fromEmail || !subject || !description || !readEl.checked || !consentEl.checked) return;

      // Honeypot: si un bot lo marca, abortar en silencio.
      if (botcheckEl?.checked) return;

      const helpCfg = DATA.helpContact && typeof DATA.helpContact === "object" ? DATA.helpContact : {};
      const accessKey = String(helpCfg.web3formsAccessKey || "").trim();
      const notifyEmail = String(helpCfg.notifyEmail || "franciscojcr@educastur.org").trim();
      const fromName = String(helpCfg.fromName || "T·I·D·A hub — AYUDA").trim();

      if (!accessKey) {
        setHelpStatus(
          "error",
          "El envío aún no está configurado (falta la clave de Web3Forms). Contacta con el responsable del sitio."
        );
        return;
      }

      const now = new Date();
      const message = [
        `Nombre y apellidos: ${fullName}`,
        `Email de contacto: ${fromEmail}`,
        `Destino de notificación: ${notifyEmail}`,
        ``,
        `Descripción:`,
        description,
        ``,
        `Leído privacidad y protección de datos: Sí (marcado)`,
        `Consentimiento RGPD: Sí (marcado)`,
        `Enviado: ${now.toISOString()}`,
      ].join("\n");

      submitBtnEl.disabled = true;
      const prevLabel = submitBtnEl.textContent;
      submitBtnEl.textContent = "Enviando…";
      setHelpStatus("", "Enviando el mensaje…");

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `[T·I·D·A hub] ${subject}`,
            from_name: fromName,
            name: fullName,
            email: fromEmail,
            replyto: fromEmail,
            message,
            botcheck: "",
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data?.success) {
          const detail = typeof data?.message === "string" && data.message ? ` (${data.message})` : "";
          throw new Error(`No se pudo enviar${detail}`);
        }

        // Confirmación en la propia web y retorno a INICIO (mensaje de bienvenida).
        unitTitleEl.textContent = "AYUDA";
        breadcrumbsEl.textContent = "";
        progressIndicatorEl.textContent = "";
        tabPanelEl.innerHTML = `
          <div class="help-sent" role="status" aria-live="polite">
            <p class="help-sent__label">Enviado</p>
            <p class="help-sent__hint">Volviendo al inicio…</p>
          </div>
        `;
        window.setTimeout(() => {
          homeBtnEl?.click();
        }, 1600);
        return;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        setHelpStatus(
          "error",
          "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde o escribe directamente a " + notifyEmail + "."
        );
        submitBtnEl.disabled = false;
        submitBtnEl.textContent = prevLabel || "Enviar mensaje";
      }
    });
    animateContentSwitch();
  }

  function showPrivacyPolicyPanel(draft) {
    contentCardEl?.classList.remove("is-home");
    toggleDocenciaMenu(false);
    toggleContentCard(true);
    tabPanelEl.dataset.unitId = "";
    unitTagEl.textContent = "";
    unitTitleEl.innerHTML =
      'AYUDA <button type="button" class="help-title-back" aria-label="Volver">← VOLVER</button>';
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";
    stopWelcomeAnimation();

    tabPanelEl.innerHTML = `
      <div class="help-form help-privacy-panel">
        <h3 class="privacy-block-heading">POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h3>
        <div class="privacy-stack">
          <div class="help-privacy privacy-card">
            <div class="privacy-grid" role="presentation">
              <div class="privacy-col">
                <div class="privacy-section">
                  <strong>1) Responsable del tratamiento</strong>
                  <div class="privacy-section-body">
                    Francisco Carnero Rodríguez (<a href="mailto:franciscojcr@educastur.org">franciscojcr@educastur.org</a>).
                  </div>
                </div>

                <div class="privacy-section">
                  <strong>2) Datos personales que se tratan</strong>
                  <div class="privacy-section-body">
                    - Nombre y apellidos.
                    <br />
                    - Correo electrónico.
                    <br />
                    - Asunto y descripción de la consulta.
                    <br />
                    - Cualquier dato adicional que la persona usuaria incluya voluntariamente en el mensaje.
                  </div>
                </div>

                <div class="privacy-section">
                  <strong>3) Finalidad del tratamiento</strong>
                  <div class="privacy-section-body">Atender, gestionar y responder a las consultas enviadas desde AYUDA.</div>
                </div>

                <div class="privacy-section">
                  <strong>4) Base jurídica (legitimación)</strong>
                  <div class="privacy-section-body">
                    El tratamiento se basa en el consentimiento (art. 6.1.a del RGPD), prestado al marcar las casillas de lectura de privacidad y consentimiento y
                    enviar el formulario.
                    <br />
                    Puedes retirar tu consentimiento en cualquier momento; la retirada no afectará a la licitud del tratamiento basado en el consentimiento previo a
                    su retirada.
                  </div>
                </div>

                <div class="privacy-section">
                  <strong>5) Carácter obligatorio de los datos</strong>
                  <div class="privacy-section-body">
                    El nombre y apellidos, el correo electrónico, el asunto, la descripción y los consentimientos son necesarios para poder gestionar la consulta. Si
                    no se facilitan, no se podrá tramitar el envío.
                  </div>
                </div>

                <div class="privacy-section">
                  <strong>6) Destinatarios</strong>
                  <div class="privacy-section-body">
                    Los datos del formulario se comunican a <strong>Web3Forms</strong>
                    (<span> (</span><a href="https://web3forms.com/" target="_blank" rel="noopener noreferrer">web3forms.com</a><span>)</span>,
                    que actúa como encargado del tratamiento solo para recibir el envío y notificarlo por correo electrónico al responsable
                    (<a href="mailto:franciscojcr@educastur.org">franciscojcr@educastur.org</a>).
                    No se cederán a otros terceros, salvo obligación legal.
                  </div>
                </div>

                <div class="privacy-section">
                  <strong>7) Proveedores y transferencias</strong>
                  <div class="privacy-section-body">
                    El formulario de AYUDA se envía a través del servicio <strong>Web3Forms</strong>
                    (<span> (</span><a href="https://web3forms.com/" target="_blank" rel="noopener noreferrer">https://web3forms.com/</a><span>)</span>,
                    que procesa la solicitud en sus servidores y reenvía una notificación por correo electrónico al responsable.
                    Puedes consultar su política de privacidad en
                    <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">web3forms.com/privacy</a>.
                    <br />
                    Web3Forms puede tratar datos fuera del Espacio Económico Europeo. Cuando proceda, se aplicarán las garantías exigidas por el RGPD
                    (por ejemplo, decisión de adecuación o cláusulas contractuales tipo) conforme a lo indicado por el proveedor.
                    <br />
                    La bandeja de destino del responsable está asociada a <a href="mailto:franciscojcr@educastur.org">franciscojcr@educastur.org</a>
                    (servicio de correo de Educastur / administración educativa), que tratará el mensaje conforme a sus propias condiciones.
                    El plan gratuito de Web3Forms puede conservar un historial temporal de envíos en su panel (p. ej. unos 30 días).
                    <br />
                    El sitio se aloja en <strong>GitHub Pages</strong> (GitHub, Inc.), que puede generar registros técnicos de acceso (por ejemplo, dirección IP y
                    datos del navegador) conforme a sus condiciones de servicio.
                  </div>
                </div>
              </div>

              <div class="privacy-col">
                <div class="privacy-section">
                  <strong>8) Conservación</strong>
                  <div class="privacy-section-body">
                    Los datos de la consulta se conservarán mientras se gestiona y, como máximo orientativo, hasta 12 meses después de su cierre, salvo que un plazo
                    legal exija o permita una conservación distinta. El historial temporal en Web3Forms suele limitarse a unos 30 días según el plan.
                  </div>
                </div>

                <div class="privacy-section">
                  <strong>9) Derechos de las personas</strong>
                  <div class="privacy-section-body">
                    Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el
                    consentimiento en cualquier momento, escribiendo a <a href="mailto:franciscojcr@educastur.org">franciscojcr@educastur.org</a>.
                    <br />
                    Para facilitar la tramitación, indica en el asunto: “Protección de datos – Ejercicio de derechos” y especifica el derecho que deseas ejercer.
                    <br />
                    También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
                  </div>
                </div>

                <div class="privacy-section">
                  <strong>10) Decisiones automatizadas y perfiles</strong>
                  <div class="privacy-section-body">No se toman decisiones automatizadas ni se elaboran perfiles con los datos enviados desde la sección AYUDA.</div>
                </div>

                <div class="privacy-section">
                  <strong>11) Menores</strong>
                  <div class="privacy-section-body">
                    Si tienes menos de 14 años, solo podrás enviar el formulario con el consentimiento de tu padre, madre o tutor/a legal (art. 7 LOPDGDD). Si eres
                    menor de edad con 14 años o más, se recomienda consultar con tu tutor/a antes de facilitar datos personales.
                  </div>
                </div>

                <div class="privacy-section">
                  <strong>12) Seguridad y recomendaciones</strong>
                  <div class="privacy-section-body">
                    Se aplican medidas razonables para proteger la información (incluye controles del proveedor Web3Forms, como filtrado antispam básico).
                    Aun así, el correo electrónico y los intermediarios de envío no son canales totalmente exentos de riesgos; evita incluir datos
                    especialmente sensibles (por ejemplo, salud, ideología, datos de terceros) en la descripción.
                    <br />
                    Recuerda el principio de minimización: aporta únicamente la información necesaria para gestionar tu consulta.
                    <br />
                    Este sitio no utiliza cookies de publicidad ni de analítica. Solo se usa almacenamiento local del navegador (localStorage) para recordar si
                    has visto las novedades, sin identificar personalmente a la persona usuaria.
                  </div>
                </div>

                <div class="privacy-section">
                  <strong>13) Actualizaciones</strong>
                  <div class="privacy-section-body">Esta política puede actualizarse para adaptarse a cambios legales o del funcionamiento del sitio.</div>
                </div>

                <p class="privacy-card-caption" role="note">
                  Según el
                  <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=es" target="_blank" rel="noopener noreferrer"
                    >Reglamento (UE) 2016/679 (RGPD)</a
                  >
                  y
                  <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673" target="_blank" rel="noopener noreferrer"
                    >Ley Orgánica 3/2018 (LOPDGDD)</a
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const titleBackBtn = unitTitleEl.querySelector(".help-title-back");
    titleBackBtn?.addEventListener("click", () => {
      try {
        if (history.state?.myweb === 1 && history.state.section === "privacy") {
          history.back();
          return;
        }
      } catch {}
      unitTitleEl.textContent = "AYUDA";
      showHelpForm(draft);
      currentState = { ...currentState, section: "help" };
      pushAppHistory();
    });
    animateContentSwitch();
  }

  function showAboutSection() {
    contentCardEl?.classList.remove("is-home");
    toggleDocenciaMenu(false);
    toggleContentCard(true);
    tabPanelEl.dataset.unitId = "";
    unitTagEl.textContent = "";
    unitTitleEl.textContent = "SOBRE MÍ";
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";
    stopWelcomeAnimation();
    tabPanelEl.innerHTML = `
      <div class="empty-state about-section" lang="es">
        <div class="about-section__layout">
          <div class="about-section__photo">
            <img
              src="./image/yo.png"
              alt="Fotografía del autor del sitio"
              draggable="false"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div class="about-section__body">
            <p>
              Ingeniero de Minas (especialista en metalurgia y energía), comencé mi carrera profesional en el ámbito empresarial como ingeniero de I+D+i, jefe de taller y proyectos y dirección de producción en el sector del metal; trayectoria que fui compatibilizando con estudios de máster y doctorado, manteniendo siempre el contacto y el interés por el mundo académico, al cual me dedico actualmente. He sido profesor de Formación Profesional en Organización y Proyectos de Fabricación Mecánica y, en la actualidad, imparto Tecnología, Ingeniería y Digitalización Aplicada en Educación Secundaria y Bachillerato.
            </p>
            <p>
              Entre mis intereses están el entorno maker aplicado al diseño y la impresión 3D, la programación (Python) y la robótica, tecnología Blockchain y el uso de nuevas tecnologías IA, entre muchos otros.
            </p>
            <p>
              En esta web pretendo reunir todo aquello que considero de interés para el desempeño de mi labor docente y para facilitar el aprendizaje y el estudio del alumnado, además de servir como espacio de divulgación personal y profesional orientado al desarrollo de las habilidades técnicas, digitales y personales para la sociedad actual y futura. Espero que los contenidos te resulten útiles.
            </p>
            <p>
              Si necesitas resolver alguna duda o ampliar información, o si consideras que algún material de este sitio vulnera derechos de autor o no se utiliza conforme a la licencia que le corresponde, comunícamelo por el apartado <strong>AYUDA</strong>, así revisaré el caso y corregiré el error a la mayor brevedad posible.
            </p>
            <p class="about-section__signoff">¡Un saludo!<br />Fran.</p>
          </div>
        </div>
      </div>
    `;
    animateContentSwitch();
  }

  function showBooksSection() {
    contentCardEl?.classList.remove("is-home");
    toggleDocenciaMenu(false);
    toggleContentCard(true);
    tabPanelEl.dataset.unitId = "";
    unitTagEl.textContent = "";
    unitTitleEl.textContent = "PROYECTOS";
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";
    stopWelcomeAnimation();
    tabPanelEl.innerHTML = `
      <div class="empty-state construction-notice">
        <strong>EN CONSTRUCCIÓN</strong>
      </div>
    `;
    animateContentSwitch();
  }

  function showLegislacionSection() {
    contentCardEl?.classList.remove("is-home");
    toggleDocenciaMenu(false);
    toggleContentCard(true);
    tabPanelEl.dataset.unitId = "";
    unitTagEl.textContent = "";
    unitTitleEl.textContent = "LEGISLACIÓN";
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";
    stopWelcomeAnimation();
    const data = window.MYWEB_DATA || {};
    const law = data.legislation || {};

    const lawFlagEs = `<span class="law-block__flag law-block__flag--es" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="27" height="18" focusable="false"><rect width="3" height="0.75" fill="#AA151B"/><rect y="0.75" width="3" height="0.5" fill="#F1BF00"/><rect y="1.25" width="3" height="0.75" fill="#AA151B"/></svg></span>`;
    const lawFlagAs = `<span class="law-block__flag law-block__flag--as" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60" width="27" height="18" focusable="false"><rect width="90" height="60" fill="#009FE3"/><path fill="#F7D117" d="M41 6h8v20h20v8H49v20h-8V34H21v-8h20z"/></svg></span>`;

    const lawTypeRank = (type) => {
      const t = String(type || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (t.includes("constitucion")) return 0;
      if (t.includes("ley organica")) return 1;
      if (t.includes("ley")) return 2;
      if (t.includes("real decreto-ley") || t.includes("real decreto ley") || t.includes("decreto-ley") || t.includes("decreto ley"))
        return 3;
      if (t.includes("real decreto")) return 4;
      if (t.includes("decreto")) return 5;
      if (t.includes("orden")) return 6;
      if (t.includes("resolucion")) return 7;
      if (t.includes("instruccion")) return 8;
      if (t.includes("circular")) return 9;
      if (t.includes("recomendacion")) return 10;
      return 50;
    };

    /** Clave numérica mayor = publicación más reciente (para ordenar tras el rango normativo). */
    const lawPublicationKey = (item) => {
      const ref = String(item?.ref || "");
      const url = String(item?.url || "");
      let y = 0;
      let m = 0;
      let d = 0;

      const pathDate = url.match(/\/(\d{4})\/(\d{2})\/(\d{2})(?:\/|$|\?)/);
      if (pathDate) {
        y = parseInt(pathDate[1], 10);
        m = parseInt(pathDate[2], 10);
        d = parseInt(pathDate[3], 10);
      }
      const disp = url.match(/dispositionDate=(\d{1,2})%2F(\d{1,2})%2F(\d{4})/i);
      if (!y && disp) {
        d = parseInt(disp[1], 10);
        m = parseInt(disp[2], 10);
        y = parseInt(disp[3], 10);
      }
      if (!y) {
        const boe = ref.match(/BOE-A-(\d{4})/);
        if (boe) y = parseInt(boe[1], 10);
      }
      if (!y) {
        const bp = ref.match(/BOPA\s+(\d{4})-/i);
        if (bp) y = parseInt(bp[1], 10);
      }
      if (!y) {
        const c = ref.match(/^(\d{4})\//);
        if (c) y = parseInt(c[1], 10);
      }
      if (!m) m = 12;
      if (!d) d = 31;

      let seq = 0;
      const boeTail = ref.match(/BOE-A-\d{4}-(\d+)/);
      if (boeTail) seq = parseInt(boeTail[1], 10);
      const bopaTail = ref.match(/BOPA\s+\d{4}-(\d+)/i);
      if (bopaTail) seq = parseInt(bopaTail[1], 10);

      return y * 1e9 + m * 1e7 + d * 1e5 + Math.min(seq, 99999);
    };

    const renderLawList = (items) => {
      const list = Array.isArray(items) ? items : [];
      if (!list.length) return `<div class="empty-state construction-notice"><strong>EN CONSTRUCCIÓN</strong></div>`;
      const sorted = list.slice().sort((x, y) => {
        const pinX = x?.pinnedFirst ? 1 : 0;
        const pinY = y?.pinnedFirst ? 1 : 0;
        if (pinX !== pinY) return pinY - pinX;
        const rx = lawTypeRank(x?.type);
        const ry = lawTypeRank(y?.type);
        if (rx !== ry) return rx - ry;
        const kx = lawPublicationKey(x);
        const ky = lawPublicationKey(y);
        if (kx !== ky) return ky - kx;
        return String(x?.ref || "").localeCompare(String(y?.ref || ""), "es", { sensitivity: "base", numeric: true });
      });

      return `
        <ul class="law-list">
          ${sorted
            .map((n) => {
              const safeRef = escapeHtml(n.ref || "");
              const safeTitle = escapeHtml(n.title || "");
              const safeUrl = escapeHtml(n.url || "");
              return `
                <li class="law-item">
                  <div class="law-meta">${safeRef}</div>
                  ${
                    safeUrl
                      ? `<a class="law-title law-title-link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeTitle}</a>`
                      : `<div class="law-title">${safeTitle}</div>`
                  }
                </li>
              `;
            })
            .join("")}
        </ul>
      `;
    };

    tabPanelEl.innerHTML = `
      <div class="law-page">
        <div class="law-page__row law-page__row--titles">
          <div class="law-block law-block--title-only">
            <h3 class="law-block__title">${lawFlagEs}<span class="law-block__title-text">${escapeHtml(law?.national?.title || "Nacional")}</span></h3>
          </div>
          <div class="law-block law-block--title-only">
            <h3 class="law-block__title">${lawFlagAs}<span class="law-block__title-text">${escapeHtml(law?.asturias?.title || "Asturias")}</span></h3>
          </div>
        </div>
        <div class="law-page__row">
          <div class="law-block law-block--section">
            <h4 class="law-subtitle law-subtitle--general">GENERAL</h4>
            ${renderLawList(law?.national?.general)}
          </div>
          <div class="law-block law-block--section">
            <h4 class="law-subtitle law-subtitle--general">GENERAL</h4>
            ${renderLawList(law?.asturias?.general)}
          </div>
        </div>
        <div class="law-page__row">
          <div class="law-block law-block--section">
            <h4 class="law-subtitle law-subtitle--eso">ESO</h4>
            ${renderLawList(law?.national?.eso)}
          </div>
          <div class="law-block law-block--section">
            <h4 class="law-subtitle law-subtitle--eso">ESO</h4>
            ${renderLawList(law?.asturias?.eso)}
          </div>
        </div>
        <div class="law-page__row">
          <div class="law-block law-block--section">
            <h4 class="law-subtitle law-subtitle--bach">BACHILLERATO</h4>
            ${renderLawList(law?.national?.bach)}
          </div>
          <div class="law-block law-block--section">
            <h4 class="law-subtitle law-subtitle--bach">BACHILLERATO</h4>
            ${renderLawList(law?.asturias?.bach)}
          </div>
        </div>
      </div>
    `;
    animateContentSwitch();
  }

  function showMiscelaneaSection(opts = {}) {
    const openMiscId = String(opts?.openMiscId || "").trim();
    contentCardEl?.classList.remove("is-home");
    toggleDocenciaMenu(false);
    toggleContentCard(true);
    tabPanelEl.dataset.unitId = "";
    unitTagEl.textContent = "";
    unitTitleEl.textContent = "MISCELÁNEA";
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";
    stopWelcomeAnimation();
    // Alinear el icono lateral de detalle con la "M" del título (se recalcula al entrar en detalle).
    document.documentElement.style.removeProperty("--misc-aside-top");
    document.documentElement.style.removeProperty("--misc-aside-left");
    document.documentElement.classList.remove("misc-fly-target-hidden");
    const items = [
      { id: "misc_3d", label: "DISEÑO E IMPRESIÓN 3D", labelHtml: "DISEÑO<br />E<br />IMPRESIÓN 3D", icon: "3D" },
      { id: "misc_pr", label: "PROGRAMACIÓN Y ROBÓTICA", labelHtml: "PROGRAMACIÓN<br />Y<br />ROBÓTICA", icon: "PR" },
      { id: "misc_iot", label: "IoT", icon: "IoT" },
      { id: "misc_ia", label: "IA", icon: "IA" },
      { id: "misc_sw", label: "HACKING ÉTICO", labelHtml: "HACKING<br />ÉTICO", icon: "hacking" },
      { id: "misc_bc", label: "BLOCKCHAIN Y BIG DATA", labelHtml: "BLOCKCHAIN<br />Y<br />BIG DATA", icon: "BC" },
      { id: "misc_ss", label: "SOFT SKILLS", labelHtml: "SOFT<br />SKILLS", icon: "SS" },
      { id: "misc_lr", label: "LECTURAS RECOMENDADAS", icon: "LR" },
      { id: "misc_av", label: "MEDIA", icon: "MD" },
      { id: "misc_jt", label: "JUEGOS", icon: "JT" },
      { id: "misc_ei", label: "ENLACES DE INTERÉS", labelHtml: "ENLACES<br />DE<br />INTERÉS", icon: "EI" }
    ];

    const setMiscTitle = (sectionTitle) => {
      unitTitleEl.innerHTML = `MISCELÁNEA / ${escapeHtml(sectionTitle)}
        <button type="button" class="help-title-back misc-title-back" aria-label="Volver">← VOLVER</button>`;
      const backBtn = unitTitleEl.querySelector(".misc-title-back");
      backBtn?.addEventListener("click", () => {
        // Preferir historial del navegador (misma ruta que la flecha atrás).
        try {
          if (history.state?.myweb === 1 && String(history.state.miscId || "").trim()) {
            history.back();
            return;
          }
        } catch {}
        currentState = { ...currentState, section: "miscelanea", miscId: "" };
        unitTitleEl.textContent = "MISCELÁNEA";
        renderMenu();
        pushAppHistory();
      });
    };

    const renderCard = (it) => `
      <button type="button" class="misc-card unit-material-card" data-misc-id="${escapeHtml(it.id)}">
        <div class="misc-card__icon unit-material-card__icon">
          <img
            src="./icons/${escapeHtml(it.icon)}.png?v=${ICONS_VERSION}"
            alt=""
            decoding="async"
            loading="lazy"
          />
        </div>
        <span class="misc-card__label unit-material-card__label">${it.labelHtml || escapeHtml(it.label)}</span>
      </button>
    `;

    let flyEl = null;
    let flyAnim = null;

    const syncMiscAsideAlignment = () =>
      new Promise((resolve) => {
        // Esperar a que el DOM pinte y el layout se estabilice antes de medir.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const titleRect = unitTitleEl?.getBoundingClientRect?.();
            const asideEl = tabPanelEl?.querySelector?.(".misc-detail__aside");
            const iconWrapEl = asideEl?.querySelector?.(".unit-material-card__icon");
            if (!titleRect || !Number.isFinite(titleRect.left) || !Number.isFinite(titleRect.bottom) || !asideEl || !iconWrapEl) {
              resolve();
              return;
            }

            // 1) Vertical: colocar el marco del icono por debajo del título (sin solapar).
            const top = Math.round(titleRect.bottom + 10);
            document.documentElement.style.setProperty("--misc-aside-top", `${top}px`);

            // 2) Horizontal: alinear el borde izquierdo del marco del icono con la "M" (inicio del título).
            const iconRect = iconWrapEl.getBoundingClientRect();
            const asideRect = asideEl.getBoundingClientRect();
            if (!Number.isFinite(iconRect.left) || !Number.isFinite(asideRect.width)) {
              resolve();
              return;
            }
            const dx = titleRect.left - iconRect.left;

            const viewportW = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            const desiredLeft = dx; // el aside estaba en left:0, movemos lo necesario
            const maxLeft = Math.max(0, viewportW - asideRect.width);
            const clampedLeft = Math.min(Math.max(0, Math.round(desiredLeft)), Math.round(maxLeft));
            document.documentElement.style.setProperty("--misc-aside-left", `${clampedLeft}px`);

            // Un frame extra para que estas variables afecten al layout antes de animar.
            requestAnimationFrame(() => resolve());
          });
        });
      });

    const cleanupFly = () => {
      try {
        flyAnim?.cancel?.();
      } catch {}
      flyAnim = null;
      flyEl?.remove?.();
      flyEl = null;
    };

    const prefersReducedMotion = () => {
      try {
        return !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return false;
      }
    };

    const flyIconTo = async ({ fromRect, fromIconHtml, fromRadius, toIconWrapEl }) => {
      cleanupFly();
      if (!fromRect || !fromIconHtml || !toIconWrapEl) return;
      if (prefersReducedMotion()) {
        document.documentElement.classList.remove("misc-fly-target-hidden");
        return;
      }

      const toRect = toIconWrapEl.getBoundingClientRect();
      if (!fromRect.width || !fromRect.height || !toRect.width || !toRect.height) return;

      // Clon flotante (icono completo con su marco).
      const flyWrap = document.createElement("div");
      flyWrap.innerHTML = fromIconHtml;
      const clone = flyWrap.firstElementChild;
      if (!clone) return;
      clone.style.position = "fixed";
      clone.style.left = `${fromRect.left}px`;
      clone.style.top = `${fromRect.top}px`;
      clone.style.width = `${fromRect.width}px`;
      clone.style.height = `${fromRect.height}px`;
      clone.style.zIndex = "9999";
      clone.style.pointerEvents = "none";
      clone.style.transformOrigin = "center";
      clone.style.borderRadius = fromRadius || clone.style.borderRadius || "12px";
      clone.style.willChange = "transform, opacity";
      document.body.appendChild(clone);
      flyEl = clone;

      // Ocultar el destino completo (incluye marco/sombra) hasta que termine la animación.
      const prevVis = toIconWrapEl.style.visibility;
      toIconWrapEl.style.visibility = "hidden";
      const prevOpacity = toIconWrapEl.style.opacity;
      const prevTransition = toIconWrapEl.style.transition;

      const dx = toRect.left - fromRect.left;
      const dy = toRect.top - fromRect.top;
      const sx = toRect.width / fromRect.width;
      const sy = toRect.height / fromRect.height;

      flyAnim = clone.animate(
        [
          { transform: "translate(0px, 0px) scale(1, 1)", opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, opacity: 1 }
        ],
        { duration: 820, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "forwards" }
      );

      try {
        await flyAnim.finished;
      } catch {
        // cancelado
      } finally {
        document.documentElement.classList.remove("misc-fly-target-hidden");
        // Corrección final: si el layout se ha movido (fuentes/cálculos), ajustar el clon al destino real.
        try {
          const toRect2 = toIconWrapEl.getBoundingClientRect();
          if (toRect2 && toRect2.width && toRect2.height) {
            const dx2 = toRect2.left - fromRect.left;
            const dy2 = toRect2.top - fromRect.top;
            const sx2 = toRect2.width / fromRect.width;
            const sy2 = toRect2.height / fromRect.height;
            if (dx2 !== dx || dy2 !== dy || sx2 !== sx || sy2 !== sy) {
              await clone
                .animate(
                  [
                    { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, opacity: 1 },
                    { transform: `translate(${dx2}px, ${dy2}px) scale(${sx2}, ${sy2})`, opacity: 1 }
                  ],
                  { duration: 90, easing: "ease-out", fill: "forwards" }
                )
                .finished;
            }
          }
        } catch {
          // ignore
        }

        // Handoff suave: crossfade corto para que parezca el mismo icono.
        try {
          const crossfadeMs = 140;
          // Preparar destino invisible pero presente.
          toIconWrapEl.style.transition = "none";
          toIconWrapEl.style.opacity = "0";
          toIconWrapEl.style.visibility = prevVis || "visible";

          // Forzar frame para aplicar opacity 0 antes de animar.
          await new Promise((r) => requestAnimationFrame(() => r()));

          // Mostrar destino y desvanecer clon a la vez.
          toIconWrapEl.style.transition = `opacity ${crossfadeMs}ms ease`;
          toIconWrapEl.style.opacity = prevOpacity || "1";

          await clone
            .animate([{ opacity: 1 }, { opacity: 0 }], { duration: crossfadeMs, easing: "ease", fill: "forwards" })
            .finished;
        } catch {
          // Si falla, al menos restaurar destino.
          toIconWrapEl.style.visibility = prevVis || "visible";
          toIconWrapEl.style.opacity = prevOpacity;
        } finally {
          toIconWrapEl.style.transition = prevTransition;
          cleanupFly();
        }
      }
    };

    const renderMenu = () => {
      unitTitleEl.textContent = "MISCELÁNEA";
      document.documentElement.style.removeProperty("--misc-aside-top");
      document.documentElement.style.removeProperty("--misc-aside-left");
      document.documentElement.classList.remove("misc-fly-target-hidden");
      const topRow = items.filter((x) => ["misc_3d", "misc_pr", "misc_iot", "misc_ia", "misc_sw", "misc_bc"].includes(x.id));
      const bottomRow = items.filter((x) => ["misc_ss", "misc_lr", "misc_av", "misc_jt", "misc_ei"].includes(x.id));
      tabPanelEl.innerHTML = `
        <div class="misc-grid" role="list" aria-label="Accesos de Miscelánea">
          <div class="misc-row misc-row--top" role="presentation">
            ${topRow.map(renderCard).join("")}
          </div>
          <div class="misc-row misc-row--bottom" role="presentation">
            ${bottomRow.map(renderCard).join("")}
          </div>
        </div>
      `;

      for (const btn of tabPanelEl.querySelectorAll(".misc-card")) {
        btn.addEventListener("click", async () => {
          const id = btn.getAttribute("data-misc-id") || "";
          const it = items.find((x) => x.id === id);
          if (!it) return;
          const fromIconWrapEl = btn.querySelector(".unit-material-card__icon");
          const fromRect = fromIconWrapEl?.getBoundingClientRect?.();
          const fromIconHtml = fromIconWrapEl ? fromIconWrapEl.outerHTML : "";
          const fromRadius = fromIconWrapEl ? getComputedStyle(fromIconWrapEl).borderRadius : "";

          await renderDetail(it, { recordHistory: true });
          const toIconWrapEl = tabPanelEl.querySelector(".misc-detail__aside .unit-material-card__icon");
          flyIconTo({ fromRect, fromIconHtml, fromRadius, toIconWrapEl });
        });
      }
    };

    const renderDetail = async (it, { recordHistory = true } = {}) => {
      setMiscTitle(it.label);
      currentState = { ...currentState, section: "miscelanea", miscId: String(it.id || "").trim() };
      if (recordHistory) pushAppHistory();
      const isReadings = it.id === "misc_lr";
      const isGames = it.id === "misc_jt";
      const isMedia = it.id === "misc_av";
      tabPanelEl.innerHTML = `
        <div class="misc-detail${isReadings || isGames || isMedia ? " misc-detail--readings" : ""}">
          <aside class="misc-detail__aside${isReadings || isGames || isMedia ? " misc-detail__aside--readings" : ""}" aria-label="${escapeHtml(it.label)}">
            <div class="misc-detail__card unit-material-card" role="presentation">
              <div class="misc-card__icon unit-material-card__icon">
                <img
                  src="./icons/${escapeHtml(it.icon)}.png?v=${ICONS_VERSION}"
                  alt=""
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </div>
            ${
              isReadings
                ? `
                  <div class="readings-aside-filters" role="group" aria-label="Filtros de lecturas recomendadas">
                      <label class="readings-filter">
                        <span>TEMÁTICA</span>
                        <select id="readings-theme">
                          <option value="">Todas</option>
                        <option value="Biografías">Biografías</option>
                        <option value="Blockchain & Big Data">Blockchain &amp; Big Data</option>
                          <option value="Ciencia">Ciencia</option>
                        <option value="Diseño e Impresión 3D">Diseño e Impresión 3D</option>
                        <option value="Economía & Finanzas">Economía &amp; Finanzas</option>
                          <option value="Educación">Educación</option>
                        <option value="Electrónica">Electrónica</option>
                          <option value="Energía">Energía</option>
                        <option value="Gestión & Producción">Gestión &amp; Producción</option>
                        <option value="Histórico">Histórico</option>
                        <option value="IA & IoT">IA &amp; IoT</option>
                        <option value="Infantil & Juvenil">Infantil &amp; Juvenil</option>
                        <option value="Matemáticas">Matemáticas</option>
                        <option value="Pensamiento">Pensamiento</option>
                        <option value="Programación y Robótica">Programación y Robótica</option>
                          <option value="Tecnología">Tecnología</option>
                        </select>
                      </label>
                      <label class="readings-filter">
                        <span>ORDEN</span>
                        <select id="readings-order">
                          <option value="newest" selected>Más nuevo → más antiguo</option>
                          <option value="oldest">Más antiguo → más nuevo</option>
                          <option value="title">Título (A–Z)</option>
                          <option value="title_desc">Título (Z–A)</option>
                        </select>
                      </label>
                    </div>
                `
                : isGames
                  ? `
                    <div class="readings-aside-filters" role="group" aria-label="Filtros de juegos">
                      <label class="readings-filter">
                        <span>TEMÁTICA</span>
                        <select id="games-theme">
                          <option value="" selected>Todas</option>
                          <option value="Energía">Energía</option>
                          <option value="Histórico">Histórico</option>
                          <option value="Mecánica">Mecánica</option>
                          <option value="Estrategia">Estrategia</option>
                        </select>
                      </label>
                      <label class="readings-filter">
                        <span>ORDEN</span>
                        <select id="games-order">
                          <option value="newest" selected>Más nuevo → más antiguo</option>
                          <option value="oldest">Más antiguo → más nuevo</option>
                          <option value="title">Título (A–Z)</option>
                          <option value="title_desc">Título (Z–A)</option>
                        </select>
                      </label>
                    </div>
                  `
                  : isMedia
                    ? `
                      <div class="readings-aside-filters" role="group" aria-label="Filtros de media">
                        <label class="readings-filter">
                          <span>TEMÁTICA</span>
                          <select id="media-theme">
                            <option value="" selected>Todos</option>
                            <option value="Películas">Películas</option>
                            <option value="Series">Series</option>
                            <option value="Documentales">Documentales</option>
                            <option value="Cortos">Cortos</option>
                          </select>
                        </label>
                        <label class="readings-filter">
                          <span>ORDEN</span>
                          <select id="media-order">
                            <option value="newest" selected>Más nuevo → más antiguo</option>
                            <option value="oldest">Más antiguo → más nuevo</option>
                            <option value="title">Título (A–Z)</option>
                            <option value="title_desc">Título (Z–A)</option>
                          </select>
                        </label>
                      </div>
                    `
                  : ""
            }
          </aside>
          <section class="misc-detail__content" aria-label="Contenido">
            ${
              isReadings
                ? `
                  <div class="readings-page" aria-label="Lecturas recomendadas">
                    <div id="readings-list" class="readings-grid" aria-live="polite"></div>
                    <div id="readings-cover-modal" class="readings-cover-modal" role="dialog" aria-modal="true" aria-label="Portada a tamaño real" hidden>
                      <div class="readings-cover-modal__backdrop" data-close="1" aria-hidden="true"></div>
                      <div class="readings-cover-modal__panel" role="document">
                        <button type="button" class="readings-cover-modal__close" aria-label="Cerrar" title="Cerrar">×</button>
                        <img class="readings-cover-modal__img" alt="" />
                      </div>
                    </div>
                  </div>
                `
                : isGames
                  ? `
                    <div class="readings-page" aria-label="Juegos">
                      <div id="games-list" class="readings-grid" aria-live="polite"></div>
                      <div id="games-cover-modal" class="readings-cover-modal" role="dialog" aria-modal="true" aria-label="Imagen a tamaño real" hidden>
                        <div class="readings-cover-modal__backdrop" data-close="1" aria-hidden="true"></div>
                        <div class="readings-cover-modal__panel" role="document">
                          <button type="button" class="readings-cover-modal__close" aria-label="Cerrar" title="Cerrar">×</button>
                          <div class="readings-cover-modal__thumbs" aria-label="Miniaturas"></div>
                          <img class="readings-cover-modal__img" alt="" />
                        </div>
                      </div>
                    </div>
                  `
                  : isMedia
                    ? `
                      <div class="readings-page" aria-label="Media">
                        <div id="media-list" class="readings-grid" aria-live="polite"></div>
                        <div id="media-cover-modal" class="readings-cover-modal" role="dialog" aria-modal="true" aria-label="Imagen a tamaño real" hidden>
                          <div class="readings-cover-modal__backdrop" data-close="1" aria-hidden="true"></div>
                          <div class="readings-cover-modal__panel" role="document">
                            <button type="button" class="readings-cover-modal__close" aria-label="Cerrar" title="Cerrar">×</button>
                            <img class="readings-cover-modal__img" alt="" />
                          </div>
                        </div>
                  </div>
                `
                : `
                  <div class="empty-state construction-notice">
                    <strong>PRÓXIMAMENTE</strong>
                  </div>
                `
            }
          </section>
        </div>
      `;
      // Evitar que el icono final se vea antes de que llegue el clon animado.
      document.documentElement.classList.add("misc-fly-target-hidden");
      await syncMiscAsideAlignment();

      if (isReadings) {
        const normalizeReading = (item) => {
          const id = String(item?.id || "").trim();
          const addedAt = String(item?.addedAt || "").trim();
          const title = String(item?.title || "").trim();
          const authors = String(item?.authors || "").trim();
          const year = Number(item?.year || 0);
          const isbn = String(item?.isbn || "").trim();
          const description = String(item?.description || "").trim();
          const cover = String(item?.cover || "").trim();
          const themesRaw = Array.isArray(item?.themes) ? item.themes.map((t) => String(t || "").trim()).filter(Boolean) : [];
          const themesNorm = themesRaw.map((t) => {
            if (t === "Diseño 3D" || t === "Impresión 3D") return "Diseño e Impresión 3D";
            if (t === "Big Data" || t === "Blockchain") return "Blockchain & Big Data";
            if (t === "Producción") return "Gestión & Producción";
            if (t === "Robótica" || t === "Programación") return "Programación y Robótica";
            if (t === "IA" || t === "IoT") return "IA & IoT";
            if (t === "Economía") return "Economía & Finanzas";
            if (t === "Infantil" || t === "Juvenil") return "Infantil & Juvenil";
            return t;
          });
          const themesDedup = Array.from(new Set(themesNorm));
          const themes = themesDedup.length ? themesDedup : ["Pensamiento"];
          if (!id || !addedAt || !title) return null;
          const ms = parsePublishedAtToMs(addedAt);
          const bookMs = year ? new Date(year, 0, 1, 0, 0, 0, 0).getTime() : ms;
          return { id, addedAt, ms, bookMs, title, authors, year, isbn, description, cover, themes };
        };

        const readingsRaw = Array.isArray(DATA.readings) ? DATA.readings : [];
        const readings = readingsRaw
          .map((r, idx) => {
            const n = normalizeReading(r);
            if (!n) return null;
            return { ...n, __idx: idx };
          })
          .filter(Boolean);

        // Catálogo antepuesto (idx 0 = más reciente): por fecha desc; a igualdad, menor idx primero.
        readings.sort((a, b) => (a.ms !== b.ms ? b.ms - a.ms : a.__idx - b.__idx));

        const themeEl = document.getElementById("readings-theme");
        const orderEl = document.getElementById("readings-order");
        const listEl = document.getElementById("readings-list");
        const modalEl = document.getElementById("readings-cover-modal");
        if (!themeEl || !orderEl || !listEl) return;

        const escape = escapeHtml;
        const openCoverModal = ({ src, alt }) => {
          if (!modalEl) return;
          const imgEl = modalEl.querySelector(".readings-cover-modal__img");
          if (!(imgEl instanceof HTMLImageElement)) return;
          // Guardar foco previo para restaurarlo al cerrar.
          modalEl.__restoreFocusEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
          imgEl.onload = null;
          imgEl.onerror = null;
          imgEl.src = src;
          imgEl.alt = alt || "Portada";
          modalEl.hidden = false;
          document.documentElement.classList.add("readings-cover-modal-open");

          // Foco inicial: botón de cerrar (mejor UX teclado).
          const closeBtn = modalEl.querySelector(".readings-cover-modal__close");
          if (closeBtn instanceof HTMLElement) closeBtn.focus();
        };
        const closeCoverModal = () => {
          if (!modalEl) return;
          const imgEl = modalEl.querySelector(".readings-cover-modal__img");
          if (imgEl instanceof HTMLImageElement) {
            imgEl.onload = null;
            imgEl.onerror = null;
            imgEl.removeAttribute("src");
            imgEl.alt = "";
          }
          modalEl.hidden = true;
          document.documentElement.classList.remove("readings-cover-modal-open");

          // Restaurar foco al elemento que abrió el modal.
          const restoreEl = modalEl.__restoreFocusEl;
          modalEl.__restoreFocusEl = null;
          if (restoreEl instanceof HTMLElement) restoreEl.focus();
        };

        const getModalFocusableBounds = () => {
          if (!modalEl || modalEl.hidden) return null;
          const nodes = Array.from(
            modalEl.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")
          ).filter((el) => el instanceof HTMLElement && !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
          const first = nodes[0];
          const last = nodes[nodes.length - 1];
          if (!(first instanceof HTMLElement) || !(last instanceof HTMLElement)) return null;
          return { first, last };
        };

        const render = () => {
          const theme = String(themeEl.value || "");
          const order = String(orderEl.value || "newest");

          let rows = readings.slice();
          if (theme) rows = rows.filter((r) => r.themes.includes(theme));

          if (order === "oldest") {
            // Si no hay temática (Todas), ordenar por entrada en la sección (addedAt).
            // Si hay temática concreta, ordenar por fecha del libro (`year`).
            // Empate: mayor idx primero (entrada más antigua en el catálogo antepuesto).
            rows.sort((a, b) => {
              const ka = theme ? a.bookMs : a.ms;
              const kb = theme ? b.bookMs : b.ms;
              return ka !== kb ? ka - kb : b.__idx - a.__idx;
            });
          } else if (order === "title") {
            rows.sort((a, b) => a.title.localeCompare(b.title, "es", { sensitivity: "base" }));
          } else if (order === "title_desc") {
            rows.sort((a, b) => b.title.localeCompare(a.title, "es", { sensitivity: "base" }));
          } else {
            // "newest" (por defecto):
            // - TEMÁTICA = Todas → por entrada en la sección (addedAt)
            // - TEMÁTICA concreta → por fecha del libro (`year`)
            // Empate: menor idx primero (más reciente antepuesto en data.js).
            rows.sort((a, b) => {
              const ka = theme ? a.bookMs : a.ms;
              const kb = theme ? b.bookMs : b.ms;
              return ka !== kb ? kb - ka : a.__idx - b.__idx;
            });
          }

          const formatDate = (d) => {
            const v = String(d || "").slice(0, 10);
            return /^\d{4}-\d{2}-\d{2}$/.test(v) ? `${v.slice(0, 4)}.${v.slice(5, 7)}.${v.slice(8, 10)}` : v;
          };

          if (!rows.length) {
            listEl.innerHTML = `
              <div class="empty-state construction-notice">
                <strong>SIN RESULTADOS</strong>
                <br />
                Prueba con otra temática.
              </div>
            `;
            return;
          }

          listEl.innerHTML = rows
            .map((r, idx) => {
              const coverInner = r.cover
                ? `<img class="reading-cover__img" src="${escape(r.cover)}" alt="Portada: ${escape(r.title)}" loading="lazy" decoding="async" />`
                : `<div class="reading-cover__fallback" aria-hidden="true">${escape(r.title.slice(0, 1).toUpperCase())}</div>`;
              const coverBtn = `<button type="button" class="reading-cover-btn" aria-label="Abrir portada: ${escape(r.title)}">${coverInner}</button>`;
              return `
                <article class="reading-card" data-reading-id="${escape(r.id)}">
                  <div class="reading-cover">${coverBtn}</div>
                  <div class="reading-meta">
                    <div class="reading-title-row">
                      <h4 class="reading-title">${escape(r.title)}</h4>
                    </div>
                    <div class="reading-sub">
                      <div class="reading-sub-row">
                      ${r.authors ? `<span class="reading-authors">${escape(r.authors)}</span>` : ""}
                        ${
                          r.authors && r.year
                            ? `<span class="reading-year">(${escape(String(r.year))})</span>`
                            : r.year
                              ? `<span class="reading-year">${escape(String(r.year))}</span>`
                              : ""
                        }
                      </div>
                      ${r.isbn ? `<div class="reading-sub-row"><span class="reading-isbn">ISBN ${escape(r.isbn)}</span></div>` : ""}
                    </div>
                    ${r.description ? `<p class="reading-desc">${escape(r.description)}</p>` : ""}
                  </div>
                </article>
              `;
            })
            .join("");
        };

        themeEl.addEventListener("change", render);
        orderEl.addEventListener("change", render);

        // Visor de portada (clic/teclado en el botón).
        listEl.addEventListener("click", (event) => {
          const t = event.target;
          if (!(t instanceof Element)) return;
          const btn = t.closest(".reading-cover-btn");
          if (!(btn instanceof HTMLElement)) return;
          const img = btn.querySelector(".reading-cover__img");
          if (!(img instanceof HTMLImageElement)) return;
          openCoverModal({ src: String(img.currentSrc || img.src || ""), alt: img.alt || "" });
        });

        if (modalEl) {
          modalEl.addEventListener("click", (event) => {
            const t = event.target;
            if (!(t instanceof Element)) return;
            if (t.matches("[data-close='1']") || t.closest(".readings-cover-modal__close")) closeCoverModal();
          });
          // Capturar ESC aquí para que no dispare el atajo global (ESC -> INICIO).
          document.addEventListener(
            "keydown",
            (event) => {
              if (!modalEl || modalEl.hidden) return;
              if (event.key === "Tab") {
                const bounds = getModalFocusableBounds();
                if (!bounds) return;
                const { first, last } = bounds;
                const active = document.activeElement;
                if (!(active instanceof HTMLElement)) return;
                if (event.shiftKey && active === first) {
                  event.preventDefault();
                  last.focus();
                } else if (!event.shiftKey && active === last) {
                  event.preventDefault();
                  first.focus();
                }
                return;
              }
              if (event.key !== "Escape") return;
              event.preventDefault();
              event.stopPropagation();
              // eslint-disable-next-line no-unused-expressions
              event.stopImmediatePropagation?.();
              closeCoverModal();
            },
            true
          );
        }

        render();
      }

      if (isGames) {
        const normalizeGame = (item) => {
          const id = String(item?.id || "").trim();
          const addedAt = String(item?.addedAt || "").trim();
          const title = String(item?.title || "").trim();
          const manufacturer = String(item?.manufacturer || "").trim();
          const language = String(item?.language || "").trim();
          const description = String(item?.description || "").trim();
          const themesRaw = Array.isArray(item?.themes) ? item.themes.map((t) => String(t || "").trim()).filter(Boolean) : [];
          const themes = themesRaw.length ? themesRaw : ["Estrategia"];
          const imagesRaw = Array.isArray(item?.images) ? item.images.map((x) => String(x || "").trim()).filter(Boolean) : [];
          if (!id || !addedAt || !title || imagesRaw.length === 0) return null;
          const ms = parsePublishedAtToMs(addedAt);
          return { id, addedAt, ms, bookMs: ms, title, manufacturer, language, description, themes, images: imagesRaw };
        };

        const gamesRaw = Array.isArray(DATA.games) ? DATA.games : [];
        const games = gamesRaw
          .map((g, idx) => {
            const n = normalizeGame(g);
            if (!n) return null;
            return { ...n, __idx: idx };
          })
          .filter(Boolean);

        // Catálogo antepuesto (idx 0 = más reciente): por fecha desc; a igualdad, menor idx primero.
        games.sort((a, b) => (a.ms !== b.ms ? b.ms - a.ms : a.__idx - b.__idx));

        const themeEl = document.getElementById("games-theme");
        const orderEl = document.getElementById("games-order");
        const listEl = document.getElementById("games-list");
        const modalEl = document.getElementById("games-cover-modal");
        if (!themeEl || !orderEl || !listEl) return;

        let modalImages = [];
        let modalIdx = 0;
        const renderModalThumbs = () => {
          if (!modalEl) return;
          const thumbsEl = modalEl.querySelector(".readings-cover-modal__thumbs");
          if (!(thumbsEl instanceof HTMLElement)) return;
          if (modalImages.length <= 1) {
            thumbsEl.innerHTML = "";
            thumbsEl.hidden = true;
            return;
          }
          thumbsEl.hidden = false;
          thumbsEl.innerHTML = modalImages
            .map((src, idx) => {
              const isActive = idx === modalIdx;
              return `
                <button type="button" class="readings-cover-modal__thumb${isActive ? " is-active" : ""}" data-modal-idx="${idx}" aria-label="Ver imagen ${idx + 1}">
                  <img src="${escapeHtml(src)}" alt="" loading="lazy" decoding="async" />
                </button>
              `;
            })
            .join("");
        };
        const openModal = ({ images, alt }) => {
          if (!modalEl) return;
          const imgEl = modalEl.querySelector(".readings-cover-modal__img");
          if (!(imgEl instanceof HTMLImageElement)) return;
          modalEl.__restoreFocusEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
          modalImages = Array.isArray(images) ? images.filter(Boolean) : [];
          modalIdx = 0;
          imgEl.src = modalImages[modalIdx] || "";
          imgEl.alt = alt || "Imagen";
          renderModalThumbs();
          modalEl.hidden = false;
          document.documentElement.classList.add("readings-cover-modal-open");

          const closeBtn = modalEl.querySelector(".readings-cover-modal__close");
          if (closeBtn instanceof HTMLElement) closeBtn.focus();
        };
        const closeModal = () => {
          if (!modalEl) return;
          const imgEl = modalEl.querySelector(".readings-cover-modal__img");
          if (imgEl instanceof HTMLImageElement) {
            imgEl.removeAttribute("src");
            imgEl.alt = "";
          }
          const thumbsEl = modalEl.querySelector(".readings-cover-modal__thumbs");
          if (thumbsEl instanceof HTMLElement) {
            thumbsEl.innerHTML = "";
            thumbsEl.hidden = true;
          }
          modalImages = [];
          modalIdx = 0;
          modalEl.hidden = true;
          document.documentElement.classList.remove("readings-cover-modal-open");

          const restoreEl = modalEl.__restoreFocusEl;
          modalEl.__restoreFocusEl = null;
          if (restoreEl instanceof HTMLElement) restoreEl.focus();
        };

        const getModalFocusableBounds = () => {
          if (!modalEl || modalEl.hidden) return null;
          const nodes = Array.from(
            modalEl.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")
          ).filter((el) => el instanceof HTMLElement && !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
          const first = nodes[0];
          const last = nodes[nodes.length - 1];
          if (!(first instanceof HTMLElement) || !(last instanceof HTMLElement)) return null;
          return { first, last };
        };
        const selectModalImage = (idx) => {
          if (!modalEl || modalImages.length === 0) return;
          const i = Number(idx);
          if (!Number.isFinite(i) || i < 0 || i >= modalImages.length) return;
          const imgEl = modalEl.querySelector(".readings-cover-modal__img");
          if (!(imgEl instanceof HTMLImageElement)) return;
          modalIdx = i;
          imgEl.src = modalImages[modalIdx] || "";
          renderModalThumbs();
        };

        const escape = escapeHtml;
        const render = () => {
          const theme = String(themeEl.value || "");
          const order = String(orderEl.value || "newest");

          let rows = games.slice();
          if (theme) rows = rows.filter((g) => g.themes.includes(theme));

          if (order === "oldest") {
            // Criterio igual que lecturas: si TODAS -> por entrada (addedAt). Si temática concreta -> por "fecha" del ítem (aquí coincide).
            rows.sort((a, b) => (a.ms !== b.ms ? a.ms - b.ms : b.__idx - a.__idx));
          } else if (order === "title") {
            rows.sort((a, b) => a.title.localeCompare(b.title, "es", { sensitivity: "base" }));
          } else if (order === "title_desc") {
            rows.sort((a, b) => b.title.localeCompare(a.title, "es", { sensitivity: "base" }));
          } else {
            rows.sort((a, b) => (a.ms !== b.ms ? b.ms - a.ms : a.__idx - b.__idx));
          }

          if (!rows.length) {
            listEl.innerHTML = `
              <div class="empty-state construction-notice">
                <strong>SIN RESULTADOS</strong>
                <br />
                Prueba con otra temática.
              </div>
            `;
            return;
          }

          listEl.innerHTML = rows
            .map((g) => {
              const img0 = g.images[0] || "";
              const coverInner = img0
                ? `<img class="reading-cover__img" src="${escape(img0)}" alt="Imagen: ${escape(g.title)}" loading="lazy" decoding="async" />`
                : `<div class="reading-cover__fallback" aria-hidden="true">${escape(g.title.slice(0, 1).toUpperCase())}</div>`;
              const coverBtn = `<button type="button" class="reading-cover-btn" aria-label="Abrir imagen: ${escape(g.title)}">${coverInner}</button>`;
              const imagesAttr = escape(g.images.join("|"));
              return `
                <article class="reading-card game-card" data-game-id="${escape(g.id)}" data-game-images="${imagesAttr}">
                  <div class="reading-cover">${coverBtn}</div>
                  <div class="reading-meta">
                    <div class="reading-title-row">
                      <h4 class="reading-title">${escape(g.title)}</h4>
                    </div>
                    <div class="reading-sub">
                      <div class="reading-sub-row">
                        ${
                          g.manufacturer
                            ? `<span class="reading-authors">${escape(g.manufacturer)}${g.language ? ` <span class="game-language">(${escape(g.language)})</span>` : ""}</span>`
                            : g.language
                              ? `<span class="game-language">(${escape(g.language)})</span>`
                              : ""
                        }
                      </div>
                    </div>
                    ${g.description ? `<p class="reading-desc">${escape(g.description).replaceAll("\n", "<br />")}</p>` : ""}
                  </div>
                </article>
              `;
            })
            .join("");
        };

        themeEl.addEventListener("change", render);
        orderEl.addEventListener("change", render);

        // Visor de imágenes del juego (clic/teclado en el botón).
        listEl.addEventListener("click", (event) => {
          const t = event.target;
          if (!(t instanceof Element)) return;
          const btn = t.closest(".reading-cover-btn");
          if (!(btn instanceof HTMLElement)) return;
          const img = btn.querySelector(".reading-cover__img");
          if (!(img instanceof HTMLImageElement)) return;
          const card = btn.closest("[data-game-images]");
          if (!(card instanceof HTMLElement)) return;
          const raw = String(card.getAttribute("data-game-images") || "");
          const images = raw.split("|").map((x) => x.trim()).filter(Boolean);
          openModal({ images, alt: img.alt || "" });
        });

        if (modalEl) {
          modalEl.addEventListener("click", (event) => {
            const t = event.target;
            if (!(t instanceof Element)) return;
            if (t.matches("[data-close='1']") || t.closest(".readings-cover-modal__close")) closeModal();
            const thumbBtn = t.closest(".readings-cover-modal__thumb");
            if (thumbBtn instanceof HTMLElement) {
              selectModalImage(thumbBtn.getAttribute("data-modal-idx"));
            }
          });
          document.addEventListener(
            "keydown",
            (event) => {
              if (!modalEl || modalEl.hidden) return;
              if (event.key === "Tab") {
                const bounds = getModalFocusableBounds();
                if (!bounds) return;
                const { first, last } = bounds;
                const active = document.activeElement;
                if (!(active instanceof HTMLElement)) return;
                if (event.shiftKey && active === first) {
                  event.preventDefault();
                  last.focus();
                } else if (!event.shiftKey && active === last) {
                  event.preventDefault();
                  first.focus();
                }
                return;
              }
              if (event.key !== "Escape") return;
              event.preventDefault();
              event.stopPropagation();
              // eslint-disable-next-line no-unused-expressions
              event.stopImmediatePropagation?.();
              closeModal();
            },
            true
          );
        }

        render();
      }

      if (isMedia) {
        const normalizeMedia = (item) => {
          const id = String(item?.id || "").trim();
          const addedAt = String(item?.addedAt || "").trim();
          const title = String(item?.title || "").trim();
          const year = Number(item?.year || 0);
          const age = String(item?.age || "").trim();
          const description = String(item?.description || "").trim();
          const themesRaw = Array.isArray(item?.themes) ? item.themes.map((t) => String(t || "").trim()).filter(Boolean) : [];
          const themes = themesRaw.length ? themesRaw : ["Películas"];
          const poster = String(item?.poster || item?.cover || "").trim();
          if (!id || !addedAt || !title) return null;
          const ms = parsePublishedAtToMs(addedAt);
          const itemMs = year ? new Date(year, 0, 1, 0, 0, 0, 0).getTime() : ms;
          return { id, addedAt, ms, itemMs, title, year, age, description, themes, poster };
        };

        const mediaRaw = Array.isArray(DATA.media) ? DATA.media : [];
        const media = mediaRaw
          .map((m, idx) => {
            const n = normalizeMedia(m);
            if (!n) return null;
            return { ...n, __idx: idx };
          })
          .filter(Boolean);

        // Catálogo antepuesto (idx 0 = más reciente): por fecha desc; a igualdad, menor idx primero.
        media.sort((a, b) => (a.ms !== b.ms ? b.ms - a.ms : a.__idx - b.__idx));

        const themeEl = document.getElementById("media-theme");
        const orderEl = document.getElementById("media-order");
        const listEl = document.getElementById("media-list");
        const modalEl = document.getElementById("media-cover-modal");
        if (!themeEl || !orderEl || !listEl) return;

        const escape = escapeHtml;
        const openCoverModal = ({ src, alt }) => {
          if (!modalEl) return;
          const imgEl = modalEl.querySelector(".readings-cover-modal__img");
          if (!(imgEl instanceof HTMLImageElement)) return;
          modalEl.__restoreFocusEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
          imgEl.onload = null;
          imgEl.onerror = null;
          imgEl.src = src;
          imgEl.alt = alt || "Imagen";
          modalEl.hidden = false;
          document.documentElement.classList.add("readings-cover-modal-open");

          const closeBtn = modalEl.querySelector(".readings-cover-modal__close");
          if (closeBtn instanceof HTMLElement) closeBtn.focus();
        };
        const closeCoverModal = () => {
          if (!modalEl) return;
          const imgEl = modalEl.querySelector(".readings-cover-modal__img");
          if (imgEl instanceof HTMLImageElement) {
            imgEl.onload = null;
            imgEl.onerror = null;
            imgEl.removeAttribute("src");
            imgEl.alt = "";
          }
          modalEl.hidden = true;
          document.documentElement.classList.remove("readings-cover-modal-open");

          const restoreEl = modalEl.__restoreFocusEl;
          modalEl.__restoreFocusEl = null;
          if (restoreEl instanceof HTMLElement) restoreEl.focus();
        };

        const getModalFocusableBounds = () => {
          if (!modalEl || modalEl.hidden) return null;
          const nodes = Array.from(
            modalEl.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")
          ).filter((el) => el instanceof HTMLElement && !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
          const first = nodes[0];
          const last = nodes[nodes.length - 1];
          if (!(first instanceof HTMLElement) || !(last instanceof HTMLElement)) return null;
          return { first, last };
        };

        const render = () => {
          const theme = String(themeEl.value || "");
          const order = String(orderEl.value || "newest");

          let rows = media.slice();
          if (theme) rows = rows.filter((m) => m.themes.includes(theme));

          if (order === "oldest") {
            rows.sort((a, b) => {
              const ka = theme ? a.itemMs : a.ms;
              const kb = theme ? b.itemMs : b.ms;
              return ka !== kb ? ka - kb : b.__idx - a.__idx;
            });
          } else if (order === "title") {
            rows.sort((a, b) => a.title.localeCompare(b.title, "es", { sensitivity: "base" }));
          } else if (order === "title_desc") {
            rows.sort((a, b) => b.title.localeCompare(a.title, "es", { sensitivity: "base" }));
          } else {
            rows.sort((a, b) => {
              const ka = theme ? a.itemMs : a.ms;
              const kb = theme ? b.itemMs : b.ms;
              return ka !== kb ? kb - ka : a.__idx - b.__idx;
            });
          }

          if (!rows.length) {
            listEl.innerHTML = media.length
              ? `
                <div class="empty-state construction-notice">
                  <strong>SIN RESULTADOS</strong>
                  <br />
                  Prueba con otra temática.
                </div>
              `
              : `
                <div class="empty-state construction-notice">
                  <strong>PRÓXIMAMENTE</strong>
                </div>
              `;
            return;
          }

          listEl.innerHTML = rows
            .map((m) => {
              const posterInner = m.poster
                ? `<img class="reading-cover__img" src="${escape(m.poster)}" alt="Imagen: ${escape(m.title)}" loading="lazy" decoding="async" />`
                : `<div class="reading-cover__fallback" aria-hidden="true">${escape(m.title.slice(0, 1).toUpperCase())}</div>`;
              const posterBtn = `<button type="button" class="reading-cover-btn" aria-label="Abrir imagen: ${escape(m.title)}">${posterInner}</button>`;
              return `
                <article class="reading-card" data-media-id="${escape(m.id)}">
                  <div class="reading-cover">${posterBtn}</div>
                  <div class="reading-meta">
                    <div class="reading-title-row">
                      <h4 class="reading-title">${escape(m.title)}${m.age ? ` <span class="reading-age">(${escape(String(m.age))})</span>` : ""}</h4>
                    </div>
                    <div class="reading-sub">
                      <div class="reading-sub-row">
                        ${m.year ? `<span class="reading-year">${escape(String(m.year))}</span>` : ""}
                      </div>
                    </div>
                    ${m.description ? `<p class="reading-desc">${escape(m.description)}</p>` : ""}
                  </div>
                </article>
              `;
            })
            .join("");
        };

        themeEl.addEventListener("change", render);
        orderEl.addEventListener("change", render);

        // Visor de póster (clic/teclado en el botón).
        listEl.addEventListener("click", (event) => {
          const t = event.target;
          if (!(t instanceof Element)) return;
          const btn = t.closest(".reading-cover-btn");
          if (!(btn instanceof HTMLElement)) return;
          const img = btn.querySelector(".reading-cover__img");
          if (!(img instanceof HTMLImageElement)) return;
          openCoverModal({ src: String(img.currentSrc || img.src || ""), alt: img.alt || "" });
        });

        if (modalEl) {
          modalEl.addEventListener("click", (event) => {
            const t = event.target;
            if (!(t instanceof Element)) return;
            if (t.matches("[data-close='1']") || t.closest(".readings-cover-modal__close")) closeCoverModal();
          });
          // Capturar ESC aquí para que no dispare el atajo global (ESC -> INICIO).
          document.addEventListener(
            "keydown",
            (event) => {
              if (!modalEl || modalEl.hidden) return;
              if (event.key === "Tab") {
                const bounds = getModalFocusableBounds();
                if (!bounds) return;
                const { first, last } = bounds;
                const active = document.activeElement;
                if (!(active instanceof HTMLElement)) return;
                if (event.shiftKey && active === first) {
                  event.preventDefault();
                  last.focus();
                } else if (!event.shiftKey && active === last) {
                  event.preventDefault();
                  first.focus();
                }
                return;
              }
              if (event.key !== "Escape") return;
              event.preventDefault();
              event.stopPropagation();
              // eslint-disable-next-line no-unused-expressions
              event.stopImmediatePropagation?.();
              closeCoverModal();
            },
            true
          );
        }

        render();
      }
    };

    // Vista inicial: hub o subapartado (p. ej. al restaurar historial / hash).
    if (openMiscId) {
      const it = items.find((x) => x.id === openMiscId);
      if (it) {
        void renderDetail(it, { recordHistory: false });
        animateContentSwitch();
        return;
      }
    }
    currentState = { ...currentState, section: "miscelanea", miscId: "" };
    renderMenu();
    animateContentSwitch();
  }

  function getStageFromLevel(level) {
    if (!level || !level.id) return "";
    if (level.id.startsWith("eso")) return "eso";
    if (level.id.startsWith("bach")) return "bach";
    return "";
  }

  function resetSelect(selectEl, placeholder) {
    selectEl.innerHTML = "";
    const option = document.createElement("option");
    option.value = "";
    option.textContent = placeholder;
    selectEl.appendChild(option);
    selectEl.value = "";
    selectEl.disabled = true;
  }

  function fillSelect(selectEl, items, placeholder) {
    resetSelect(selectEl, placeholder);
    if (!items || items.length === 0) return;
    selectEl.disabled = false;
    for (const item of items) {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.label;
      selectEl.appendChild(option);
    }
  }

  function renderSearchResults(results) {
    if (!searchResultsEl) return;
    searchResultsEl.innerHTML = "";
    if (!results || results.length === 0) return;

    const top = results.slice(0, 8);
    for (const result of top) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "search-result-btn";
      btn.textContent = `${result.unit.label} · ${result.material.label} · ${result.level.label}`;
      btn.addEventListener("click", () => {
        setActiveMenu(docenciaBtnEl);
        if (unitSearchEl) unitSearchEl.value = result.unit.label;
        openUnitPath(result);
        searchResultsEl.innerHTML = "";
      });
      searchResultsEl.appendChild(btn);
    }
  }

  function searchUnits(term) {
    const q = term.trim().toLowerCase();
    if (!q) return [];
    const matches = [];
    for (const level of levels) {
      for (const material of level.materials || []) {
        for (const unit of material.units || []) {
          const hay = `${unit.label} ${material.label} ${level.label}`.toLowerCase();
          if (hay.includes(q)) matches.push({ level, material, unit });
        }
      }
    }
    return matches;
  }

  function openUnitPath({ level, material, unit, tabId = "" }) {
    const stageId = getStageFromLevel(level);
    const stageLevels = levels.filter((item) => getStageFromLevel(item) === stageId);
    stageSelectEl.value = stageId;
    fillSelect(levelSelectEl, stageLevels, "Selecciona nivel...");
    levelSelectEl.value = level.id;
    fillSelect(materialSelectEl, level.materials || [], "Selecciona materia...");
    materialSelectEl.value = material.id;
    fillSelect(unitSelectEl, material.units || [], "Selecciona unidad...");
    unitSelectEl.value = unit.id;
    toggleDocenciaMenu(true);
    toggleContentCard(true);
    onUnitSelected({ level, material, unit, tabId });
  }

  function findLevel(levelId) {
    return levels.find((level) => level.id === levelId) || null;
  }

  function findMaterial(level, materialId) {
    if (!level) return null;
    return (level.materials || []).find((material) => material.id === materialId) || null;
  }

  function findUnit(material, unitId) {
    if (!material) return null;
    return (material.units || []).find((unit) => unit.id === unitId) || null;
  }

  function getMaterialPdfFile(unit, sectionId, tabDef) {
    const map = unit.pdfs;
    if (map && typeof map === "object" && map[sectionId]) {
      const name = String(map[sectionId]).trim();
      if (name) return name;
    }
    return tabDef.pdfFile || `${sectionId}.pdf`;
  }

  function getUnitSectionDownloads(unit, sectionId, tabDef) {
    const list = unit?.downloads?.[sectionId];
    if (Array.isArray(list) && list.length) {
      return list
        .map((it) => ({
          label: String(it?.label || "").trim(),
          file: String(it?.file || "").trim()
        }))
        .filter((it) => it.label && it.file);
    }
    // Compatibilidad: si solo hay 1 PDF por sección (pdfs / pdfFile).
    const pdf = getMaterialPdfFile(unit, sectionId, tabDef);
    if (pdf) {
      return [{ label: `${tabDef.label} (PDF)`, file: pdf }];
    }
    return [];
  }

  function renderUnitOverview(unit, detailEl) {
    detailEl.innerHTML = "";
    const heading = document.createElement("div");
    heading.className = "unit-section-heading";

    const title = document.createElement("h3");
    title.className = "unit-section-title";
    title.textContent = "PRESENTACIÓN";

    const subtitle = document.createElement("p");
    subtitle.className = "unit-section-subtitle";
    subtitle.textContent = "";

    heading.append(title, subtitle);
    detailEl.appendChild(heading);

    const body = document.createElement("div");
    body.className = "unit-overview";

    // Si en el futuro añades un campo `intro` en data.js, se mostrará aquí.
    const intro = (unit?.intro && String(unit.intro).trim()) || "";
    body.innerHTML = intro
      ? `<p>${intro}</p>`
      : `
        <div class="empty-state construction-notice">
          <strong>EN PRUEBAS</strong>
          <br />
          Selecciona una sección a la izquierda para ver sus descargas.
        </div>
      `;

    detailEl.appendChild(body);
  }

  function renderUnitSectionDetails({ unit, tab, detailEl }) {
    detailEl.innerHTML = "";
    const heading = document.createElement("div");
    heading.className = "unit-section-heading";

    const title = document.createElement("h3");
    title.className = "unit-section-title";
    title.textContent = tab.label.toUpperCase();

    const subtitle = document.createElement("p");
    subtitle.className = "unit-section-subtitle";
    subtitle.textContent = "Archivos de descarga";

    heading.append(title, subtitle);
    detailEl.appendChild(heading);

    const downloads = getUnitSectionDownloads(unit, tab.id, tab);

    // Si todavía no existen archivos, mostramos placeholder.
    // (No hacemos fetch/HEAD para comprobar existencia; se añadirá cuando estén disponibles.)
    const listWrap = document.createElement("div");
    listWrap.className = "unit-downloads";

    const expected = downloads.map((d) => d.file);
    const empty = document.createElement("div");
    empty.className = "unit-downloads-empty";
    empty.innerHTML = `
      <div class="empty-state construction-notice">
        <strong>PRÓXIMAMENTE</strong>
        <br />
        Aquí aparecerán los archivos de ${tab.label.toLowerCase()}.
      </div>
    `;
    listWrap.appendChild(empty);

    // Dejamos preparada la estructura para cuando existan archivos (render de enlaces).
    if (expected.length) {
      const hint = document.createElement("p");
      hint.className = "unit-downloads-hint";
      hint.textContent = `Ruta esperada: /content/${unit.id}/(${expected.join(", ")})`;
      listWrap.appendChild(hint);
    }

    detailEl.appendChild(listWrap);
  }

  function renderUnitMaterialsDetail(unit, activeTabId) {
    const split = document.createElement("div");
    split.className = "unit-materials-split";

    const nav = document.createElement("div");
    nav.className = "unit-materials-nav";
    nav.setAttribute("role", "list");

    const detail = document.createElement("section");
    detail.className = "unit-materials-detail";
    detail.setAttribute("aria-live", "polite");

    const tabsById = new Map(DATA.sectionTabs.map((t) => [t.id, t]));
    const firstTab = DATA.sectionTabs[0];
    const initialTab = activeTabId ? tabsById.get(activeTabId) : null;

    const setActive = (tab) => {
      for (const btn of nav.querySelectorAll(".unit-material-nav-item")) {
        btn.classList.toggle("is-active", btn.dataset.tabId === tab.id);
        btn.setAttribute("aria-current", btn.dataset.tabId === tab.id ? "true" : "false");
      }
      currentState.tabId = tab.id;
      renderUnitSectionDetails({ unit, tab, detailEl: detail });
    };

    for (const tab of DATA.sectionTabs) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "unit-material-nav-item unit-material-card";
      btn.dataset.tabId = tab.id;
      btn.setAttribute("role", "listitem");
      btn.setAttribute("aria-label", `${tab.label}: ver descargas`);

      const iconWrap = document.createElement("div");
      iconWrap.className = "unit-material-card__icon";
      iconWrap.innerHTML = SECTION_ICONS[tab.id] || SECTION_ICONS.recursos;

      const label = document.createElement("span");
      label.className = "unit-material-card__label";
      label.textContent = tab.label.toUpperCase();

      btn.append(iconWrap, label);
      btn.addEventListener("click", () => setActive(tab));
      nav.appendChild(btn);
    }

    split.append(nav, detail);

    const pane = document.createElement("div");
    pane.className = "unit-materials-pane is-detail";
    pane.appendChild(split);

    if (initialTab) {
      setActive(initialTab);
    } else {
      // Vista inicial: presentación de la unidad (sin sección activa)
      for (const btn of nav.querySelectorAll(".unit-material-nav-item")) {
        btn.classList.remove("is-active");
        btn.removeAttribute("aria-current");
      }
      currentState.tabId = "";
      renderUnitOverview(unit, detail);
    }
    return pane;
  }

  function renderUnitMaterials(unit, activeTabId) {
    if (!unit?.id || !Array.isArray(DATA.sectionTabs) || DATA.sectionTabs.length === 0) return;
    stopWelcomeAnimation();
    tabPanelEl.dataset.unitId = unit.id;

    tabPanelEl.innerHTML = "";
    tabPanelEl.appendChild(renderUnitMaterialsDetail(unit, activeTabId));
  }

  function showConstructionMessage(level, material) {
    contentCardEl?.classList.remove("is-home");
    toggleContentCard(true);
    tabPanelEl.dataset.unitId = "";
    unitTagEl.textContent = "";
    unitTitleEl.textContent = material.label;
    // Evitar repetir Etapa/Nivel/Materia en la tarjeta central.
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";
    updateDocenciaMenuTitle();
    stopWelcomeAnimation();
    tabPanelEl.innerHTML = `
      <div class="empty-state construction-notice">
        <strong>EN CONSTRUCCIÓN</strong>
        <br />
        Esta materia aún no tiene unidades cargadas.
      </div>
    `;
  }

  function onUnitSelected({ level, material, unit, tabId = "" }) {
    contentCardEl?.classList.remove("is-home");
    toggleContentCard(true);
    stopWelcomeAnimation();
    unitTagEl.textContent = "";
    unitTitleEl.textContent = unit.label;
    // Evitar repetir Etapa/Nivel/Materia/Unidad (ya se muestra el título).
    breadcrumbsEl.textContent = "";
    progressIndicatorEl.textContent = "";
    updateDocenciaMenuTitle();
    // Al tener selección completa, plegar el panel automáticamente (sin esperar a cargar Markdown).
    setDocenciaCollapsed(true);

    tabPanelEl.dataset.unitId = unit.id;
    const tab = String(tabId || "").trim();
    renderUnitMaterials(unit, tab);

    currentState = {
      ...currentState,
      section: "docencia",
      stageId: getStageFromLevel(level),
      levelId: level.id,
      materialId: material.id,
      unitId: unit.id,
      tabId: tab
    };
    pushAppHistory();
  }

  function parseHash() {
    // Esperado: #levelId/materialId/unitId
    const raw = location.hash.replace("#", "");
    if (!raw) return null;
    const parts = raw.split("/").filter(Boolean);
    if (parts.length < 3) return null;
    return {
      levelId: decodeURIComponent(parts[0]),
      materialId: decodeURIComponent(parts[1]),
      unitId: decodeURIComponent(parts[2])
    };
  }

  function onStageChanged() {
    const stageId = stageSelectEl.value;
    const stageLevels = levels.filter((level) => getStageFromLevel(level) === stageId);
    fillSelect(levelSelectEl, stageLevels, "Selecciona nivel...");
    resetSelect(materialSelectEl, "Selecciona materia...");
    resetSelect(unitSelectEl, "Selecciona unidad...");
    tabPanelEl.dataset.unitId = "";

    if (!stageId) {
      resetToHome();
      return;
    }

    toggleContentCard(false);
    currentState = { ...currentState, section: "docencia", stageId, levelId: "", materialId: "", unitId: "" };
    updateDocenciaMenuTitle();
  }

  function onLevelChanged() {
    const level = findLevel(levelSelectEl.value);
    resetSelect(materialSelectEl, "Selecciona materia...");
    resetSelect(unitSelectEl, "Selecciona unidad...");
    tabPanelEl.dataset.unitId = "";

    if (!level) return;
    fillSelect(materialSelectEl, level.materials || [], "Selecciona materia...");
    toggleContentCard(false);
    currentState = {
      ...currentState,
      section: "docencia",
      stageId: getStageFromLevel(level),
      levelId: level.id,
      materialId: "",
      unitId: ""
    };
    updateDocenciaMenuTitle();
  }

  function onMaterialChanged() {
    const level = findLevel(levelSelectEl.value);
    const material = findMaterial(level, materialSelectEl.value);
    resetSelect(unitSelectEl, "Selecciona unidad...");
    tabPanelEl.dataset.unitId = "";

    if (!level || !material) return;
    const units = material.units || [];
    fillSelect(unitSelectEl, units, "Selecciona unidad...");

    if (units.length === 0) {
      showConstructionMessage(level, material);
      return;
    }

    toggleContentCard(false);
    currentState = {
      ...currentState,
      section: "docencia",
      stageId: getStageFromLevel(level),
      levelId: level.id,
      materialId: material.id,
      unitId: ""
    };
    updateDocenciaMenuTitle();
  }

  function onUnitChanged() {
    const level = findLevel(levelSelectEl.value);
    const material = findMaterial(level, materialSelectEl.value);
    const unit = findUnit(material, unitSelectEl.value);
    if (!level || !material || !unit) return;
    onUnitSelected({ level, material, unit });
  }

  // Pie: año actual + versión desde data.js → siteMeta (única fuente de verdad).
  const yearCurrentEl = document.getElementById("year-current");
  if (yearCurrentEl) {
    yearCurrentEl.textContent = String(new Date().getFullYear());
  }
  const siteVersionEl = document.getElementById("site-version");
  if (siteVersionEl) {
    const ver = String(DATA.siteMeta?.version || "").trim();
    if (ver) siteVersionEl.textContent = ver.startsWith("v") ? ver : `v${ver}`;
  }

  resetToHome();
  toggleContentCard(true);
  toggleDocenciaMenu(false);
  updateUpdatesIndicator({ nudge: false });

  function syncBrandLogoSize() {
    if (!brandTitleEl || !brandLogoEl) return;
    const h = Math.round(brandTitleEl.getBoundingClientRect().height);
    if (!h || h < 10) return;
    const size = Math.round(h * 1.7);
    brandLogoEl.style.width = `${size}px`;
    brandLogoEl.style.height = `${size}px`;
    brandLogoEl.style.borderRadius = "0";
  }

  syncBrandLogoSize();
  window.addEventListener("resize", syncBrandLogoSize);
  window.addEventListener("resize", syncHomeNewsDock);
  window.addEventListener("load", syncHomeNewsDock);
  stageSelectEl.addEventListener("change", onStageChanged);
  levelSelectEl.addEventListener("change", onLevelChanged);
  materialSelectEl.addEventListener("change", onMaterialChanged);
  unitSelectEl.addEventListener("change", onUnitChanged);

  if (homeBtnEl) {
    homeBtnEl.addEventListener("click", () => {
      setActiveMenu(homeBtnEl);
      toggleDocenciaMenu(false);
      toggleContentCard(true);
      if (unitSearchEl) unitSearchEl.value = "";
      if (searchResultsEl) searchResultsEl.innerHTML = "";
      resetToHome();
      currentState = {
        ...currentState,
        section: "home",
        levelId: "",
        materialId: "",
        unitId: "",
        tabId: "",
        searchQuery: ""
      };
      pushAppHistory();
    });
  }

  if (docenciaBtnEl) {
    docenciaBtnEl.addEventListener("click", () => {
      setActiveMenu(docenciaBtnEl);
      toggleDocenciaMenu(true);
      toggleContentCard(false);
      setDocenciaCollapsed(false);
      updateDocenciaMenuTitle();
      progressIndicatorEl.textContent = "Docencia";
      if (searchResultsEl) searchResultsEl.innerHTML = "";
      currentState = {
        ...currentState,
        section: "docencia",
        levelId: "",
        materialId: "",
        unitId: "",
        tabId: ""
      };
      pushAppHistory();
    });
  }

  if (aboutBtnEl) {
    aboutBtnEl.addEventListener("click", () => {
      setActiveMenu(aboutBtnEl);
      showAboutSection();
      currentState = { ...currentState, section: "about" };
      pushAppHistory();
    });
  }

  if (booksBtnEl) {
    booksBtnEl.addEventListener("click", () => {
      setActiveMenu(booksBtnEl);
      showBooksSection();
      currentState = { ...currentState, section: "books" };
      pushAppHistory();
    });
  }

  if (legislacionBtnEl) {
    legislacionBtnEl.addEventListener("click", () => {
      setActiveMenu(legislacionBtnEl);
      showLegislacionSection();
      currentState = { ...currentState, section: "legislacion" };
      pushAppHistory();
    });
  }

  if (miscelaneaBtnEl) {
    miscelaneaBtnEl.addEventListener("click", () => {
      setActiveMenu(miscelaneaBtnEl);
      currentState = { ...currentState, section: "miscelanea", miscId: "" };
      showMiscelaneaSection();
      pushAppHistory();
    });
  }

  if (helpBtnEl) {
    helpBtnEl.addEventListener("click", () => {
      setActiveMenu(helpBtnEl);
      showHelpForm();
      currentState = { ...currentState, section: "help" };
      pushAppHistory();
    });
  }

  if (updatesBtnEl) {
    updatesBtnEl.addEventListener("click", () => {
      setActiveMenu(updatesBtnEl);
      showUpdatesSection();
      currentState = { ...currentState, section: "updates" };
      pushAppHistory();
    });
  }

  window.addEventListener("popstate", (event) => {
    suppressHistoryPush = true;
    try {
      if (event.state && event.state.myweb === 1) {
        restoreHistorySnapshot(event.state);
      } else if (location.hash && location.hash !== "#" && location.hash !== "#home") {
        applyRouteFromLocationHash();
      } else {
        restoreHistorySnapshot(homeHistoryState());
      }
    } finally {
      suppressHistoryPush = false;
    }
  });


  if (docenciaToggleBtnEl) {
    docenciaToggleBtnEl.addEventListener("click", () => {
      setDocenciaCollapsed(!docenciaMenuEl.classList.contains("is-collapsed"));
    });
  }

  if (unitSearchEl) {
    unitSearchEl.addEventListener("input", () => {
      const q = unitSearchEl.value.trim().toLowerCase();
      if (!docenciaMenuEl.classList.contains("is-hidden")) {
        const matches = searchUnits(unitSearchEl.value);
        renderSearchResults(matches);
      } else if (searchResultsEl) {
        searchResultsEl.innerHTML = "";
      }
      if (!materialSelectEl.value) return;
      const level = findLevel(levelSelectEl.value);
      const material = findMaterial(level, materialSelectEl.value);
      if (!material) return;
      const filteredUnits = (material.units || []).filter((unit) => unit.label.toLowerCase().includes(q));
      fillSelect(unitSelectEl, filteredUnits, "Selecciona unidad...");
    });
  }

  if (quickSearchFormEl) {
    quickSearchFormEl.addEventListener("submit", (event) => {
      event.preventDefault();
      runGlobalSearch();
    });
  } else if (unitSearchBtnEl) {
    unitSearchBtnEl.addEventListener("click", () => {
      runGlobalSearch();
    });
    unitSearchEl?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        runGlobalSearch();
      }
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "/" && !event.ctrlKey && !event.metaKey && unitSearchEl && !docenciaMenuEl.classList.contains("is-hidden")) {
      event.preventDefault();
      unitSearchEl.focus();
      unitSearchEl.select();
    }
    if (event.key === "Escape") {
      if (homeBtnEl) homeBtnEl.click();
    }
  });

  // Carga/recarga: siempre INICIO y historial nuevo desde la portada (no restaurar sección previa).
  suppressHistoryPush = true;
  try {
    currentState = {
      ...currentState,
      section: "home",
      stageId: "",
      levelId: "",
      materialId: "",
      unitId: "",
      tabId: "",
      miscId: "",
      searchQuery: ""
    };
      setActiveMenu(homeBtnEl);
    toggleDocenciaMenu(false);
    toggleContentCard(true);
    if (unitSearchEl) unitSearchEl.value = "";
    if (searchResultsEl) searchResultsEl.innerHTML = "";
    resetToHome();
      updateUpdatesIndicator({ nudge: true });
  } finally {
    suppressHistoryPush = false;
  }
  seedAppHistory();

  // Tooltips en iconos de cabecera.
  for (const btn of navButtons) {
    if (!btn.title) btn.title = btn.textContent?.trim() || "";
  }

  /**
   * Rueda del ratón → scroll del contenedor activo aunque el puntero esté
   * en cabecera, márgenes o zonas sin overflow propio (p. ej. body bloqueado
   * y scroll solo en #tab-panel). No interfiere con paneles anidados
   * (.home-news, modales, etc.): ahí manda el scroll nativo.
   */
  function isVerticallyScrollable(el) {
    if (!(el instanceof Element)) return false;
    const st = window.getComputedStyle(el);
    const oy = st.overflowY;
    if (oy !== "auto" && oy !== "scroll" && oy !== "overlay") return false;
    return el.scrollHeight > el.clientHeight + 1;
  }

  function normalizeWheelDeltaY(e) {
    if (e.deltaMode === 1) return e.deltaY * 16;
    if (e.deltaMode === 2) return e.deltaY * Math.max(window.innerHeight || 800, 1);
    return e.deltaY;
  }

  function canScrollVertically(el, deltaY) {
    if (!isVerticallyScrollable(el)) return false;
    const max = el.scrollHeight - el.clientHeight;
    if (deltaY > 0) return el.scrollTop < max - 1;
    if (deltaY < 0) return el.scrollTop > 1;
    return max > 0;
  }

  function getMainVerticalScroller() {
    if (tabPanelEl && isVerticallyScrollable(tabPanelEl)) return tabPanelEl;
    const root = document.scrollingElement || document.documentElement;
    if (root && root.scrollHeight > root.clientHeight + 1) return root;
    return null;
  }

  window.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || e.defaultPrevented) return;
      const deltaY = normalizeWheelDeltaY(e);
      if (!deltaY) return;

      let node = e.target;
      if (node && node.nodeType === Node.TEXT_NODE) node = node.parentElement;

      let nestedScroller = null;
      while (node && node !== document.documentElement) {
        if (node instanceof HTMLElement && isVerticallyScrollable(node)) {
          nestedScroller = node;
          break;
        }
        node = node.parentElement;
      }

      const main = getMainVerticalScroller();
      // Paneles anidados (NOTICIAS, thumbs de modal…): scroll nativo propio.
      if (nestedScroller && (!main || nestedScroller !== main)) return;
      if (!main || !canScrollVertically(main, deltaY)) return;
      e.preventDefault();
      main.scrollTop += deltaY;
    },
    { passive: false }
  );
})();

