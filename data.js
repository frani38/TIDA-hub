// Datos del árbol de navegación: Nivel -> Materia -> Unidades.
// Este archivo se consume desde app.js.
//
// Materiales por unidad (PDF): coloca los archivos en /content/<unitId>/
// con los nombres definidos en sectionTabs (pdfFile), salvo que la unidad
// defina un mapa opcional pdfs: { teoria: "otro-nombre.pdf", ... }.
//
// Búsqueda rápida (cabecera):
// - siteSearchEntries: añade filas { section, title, meta, haystack, navTarget } para cualquier
//   página o bloque nuevo (haystack = todo el texto que debe poder encontrarse).
// - contentIndex: subapartados por zona (misc, books, about, help). Cada ítem { id, title, description?,
//   keywords?, subSection? } se indexa solo; al crear MISCELÁNEA → misc, PROYECTOS → books, etc.

window.MYWEB_DATA = {
  /*
    Versión del pie: MAJOR.MINOR.PATCH (tres dígitos). Única fuente de verdad.
    El agente debe incrementarla en cada cambio (regla .cursor/rules/version-semver.mdc).
    El pie muestra "v" + version al cargar.
  */
  siteMeta: {
    version: "1.2.24",
    updated: "2026-10-28",
  },

  /*
    Formulario AYUDA → Web3Forms (https://web3forms.com/).
    1) Crea una Access Key con el correo de destino (p. ej. franciscojcr@educastur.org).
    2) Pega la clave en web3formsAccessKey.
    3) Restrict to Domains es función Pro; en free basta antispam del proveedor + honeypot del formulario.
    La clave es pública en el cliente (diseño de Web3Forms); no es un secreto de servidor.
  */
  helpContact: {
    web3formsAccessKey: "f8614300-23c6-4018-a6cd-f493de766271",
    notifyEmail: "franciscojcr@educastur.org",
    fromName: "T·I·D·A hub — AYUDA",
  },

  legislation: {
    national: {
      title: "Nacional",
      general: [
        {
          type: "Ley Orgánica",
          ref: "BOE-A-2006-7899",
          title: "Ley Orgánica 2/2006, de 3 de mayo, de Educación (LOE).",
          url: "https://www.boe.es/eli/es/lo/2006/05/03/2/con",
        },
        {
          type: "Ley Orgánica",
          ref: "BOE-A-2020-17264",
          title:
            "Ley Orgánica 3/2020, de 29 de diciembre, por la que se modifica la LOE (LOMLOE).",
          url: "https://www.boe.es/eli/es/lo/2020/12/29/3",
        },
        {
          type: "Recomendación (UE)",
          ref: "2018/C 189/01",
          title:
            "Recomendación del Consejo, de 22 de mayo de 2018, relativa a las competencias clave para el aprendizaje permanente.",
          url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=uriserv:OJ.C_.2018.189.01.0001.01.SPA&toc=OJ:C:2018:189:TOC",
        },
      ],
      eso: [
        {
          type: "Real Decreto",
          ref: "BOE-A-2022-4975",
          title:
            "Real Decreto 217/2022, de 29 de marzo, por el que se establece la ordenación y las enseñanzas mínimas de la Educación Secundaria Obligatoria.",
          url: "https://www.boe.es/eli/es/rd/2022/03/29/217/con",
        },
        {
          type: "Real Decreto",
          ref: "BOE-A-2021-18812",
          title:
            "Real Decreto 984/2021, de 16 de noviembre, por el que se regula la evaluación y la promoción en Primaria y la evaluación, promoción y titulación en ESO, Bachillerato y FP.",
          url: "https://www.boe.es/eli/es/rd/2021/11/16/984/con",
        },
      ],
      bach: [
        {
          type: "Real Decreto",
          ref: "BOE-A-2022-5521",
          title:
            "Real Decreto 243/2022, de 5 de abril, por el que se establecen la ordenación y las enseñanzas mínimas del Bachillerato.",
          url: "https://www.boe.es/eli/es/rd/2022/04/05/243/con",
        },
        {
          type: "Real Decreto",
          ref: "BOE-A-2021-18812",
          title:
            "Real Decreto 984/2021, de 16 de noviembre, por el que se regula la evaluación y la promoción en Primaria y la evaluación, promoción y titulación en ESO, Bachillerato y FP.",
          url: "https://www.boe.es/eli/es/rd/2021/11/16/984/con",
        },
      ],
    },
    asturias: {
      title: "Principado de Asturias",
      general: [
        {
          type: "Circular",
          ref: "Circular inicio curso 2025-2026 · centros públicos",
          pinnedFirst: true,
          title:
            "Circular de inicio de curso 2025-2026 para centros docentes públicos no universitarios del Principado de Asturias (Consejería de Educación).",
          url: "https://www.educastur.es/documents/34868/38433/20250708_CIC-centros-PUBLICOS.pdf/120546d7-d967-ecfe-c8ae-e00236fa7546",
        },
        {
          type: "Ley",
          ref: "BOE-A-2013-11336",
          title:
            "Ley 3/2013, de 28 de junio, de medidas de autoridad del profesorado (Principado de Asturias).",
          url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2013-11336",
        },
        {
          type: "Decreto",
          ref: "BOPA 2007-2022002",
          title:
            "Decreto 249/2007, de 26 de septiembre, por el que se regulan los derechos y deberes del alumnado y normas de convivencia en los centros docentes no universitarios sostenidos con fondos públicos del Principado de Asturias.",
          url: "https://miprincipado.asturias.es/bopa/disposiciones?p_p_id=pa_sede_bopa_web_portlet_SedeBopaDispositionWeb&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_pa_sede_bopa_web_portlet_SedeBopaDispositionWeb_mvcRenderCommandName=%2Fdisposition%2Fdetail&p_r_p_dispositionText=2007-2022002&p_r_p_dispositionReference=2007-2022002&p_r_p_dispositionDate=22%2F10%2F2007",
        },
        {
          type: "Decreto",
          ref: "BOPA 2019-01286",
          title:
            "Decreto 7/2019, de 6 de febrero, de primera modificación del Decreto 249/2007 (derechos y deberes del alumnado y normas de convivencia).",
          url: "https://miprincipado.asturias.es/bopa/2019/02/11/2019-01286.pdf",
        },
        {
          type: "Decreto",
          ref: "BOPA 2019-02195",
          title:
            "Rectificación de errores del Decreto 7/2019, de 6 de febrero, de primera modificación del Decreto 249/2007.",
          url: "https://miprincipado.asturias.es/bopa/2019/03/07/2019-02195.pdf",
        },
      ],
      eso: [
        {
          type: "Decreto",
          ref: "BOPA 2022-06713",
          title:
            "Decreto 59/2022, de 30 de agosto, por el que se regula la ordenación y se establece el currículo de la Educación Secundaria Obligatoria en el Principado de Asturias.",
          url: "https://miprincipado.asturias.es/bopa/2022/09/01/2022-06713.pdf",
        },
        {
          type: "Resolución",
          ref: "BOPA 2023-04236",
          title:
            "Resolución de 11 de mayo de 2023, de la Consejería de Educación, por la que se regulan aspectos de la ordenación académica de las enseñanzas de la Educación Secundaria Obligatoria y de la evaluación del aprendizaje del alumnado.",
          url: "https://miprincipado.asturias.es/bopa/2023/05/18/2023-04236.pdf",
        },
        {
          type: "Resolución",
          ref: "BOPA 2024-02591",
          title:
            "Resolución de 19 de marzo de 2024, de la Consejería de Educación, por la que se regulan aspectos de la ordenación académica del programa de diversificación curricular de la Educación Secundaria Obligatoria.",
          url: "https://miprincipado.asturias.es/bopa/2024/03/26/2024-02591.pdf",
        },
      ],
      bach: [
        {
          type: "Decreto",
          ref: "BOPA 2022-06714",
          title:
            "Decreto 60/2022, de 30 de agosto, por el que se regula la ordenación y se establece el currículo del Bachillerato en el Principado de Asturias.",
          url: "https://miprincipado.asturias.es/bopa/2022/09/01/2022-06714.pdf",
        },
        {
          type: "Resolución",
          ref: "BOPA 2023-03825",
          title:
            "Resolución de 28 de abril de 2023, de la Consejería de Educación, por la que se regulan aspectos de la ordenación académica de las enseñanzas del Bachillerato y de la evaluación del aprendizaje del alumnado.",
          url: "https://miprincipado.asturias.es/bopa/2023/05/09/2023-03825.pdf",
        },
      ],
    },
  },
  // Noticias para la portada. Formato recomendado:
  // - publishedAt: único campo de fecha/hora (la que ve el usuario).
  //   Es la fecha y hora que tú asignas al dar de alta la noticia en esta web, en formato "YYYY-MM-DDTHH:mm" (sin Z).
  //   No tiene por qué coincidir con la fecha del artículo externo.
  // { publishedAt: "YYYY-MM-DDTHH:mm", title: "Título", text: "Texto breve", url: "https://..." }
  news: [
    {
      publishedAt: "2026-10-27T09:56",
      title: "Eslovaquia conecta un nuevo reactor nuclear a su red eléctrica",
      text: "La central de Mochovce ha conectado su cuarto reactor VVER-440 (471 MW) a la red eslovaca, con una puesta en marcha gradual desde el 15 de octubre. Con cinco reactores en operación, el país prevé que la nuclear aporte cerca del 77% de su electricidad y poder exportar energía desde 2027.",
      url: "https://www.foronuclear.org/actualidad/noticias/eslovaquia-conecta-un-nuevo-reactor-nuclear-a-su-red-electrica/"
    },
    {
      publishedAt: "2026-10-27T09:50",
      title: "La IA y la computación cuántica aceleran el diseño de nuevos materiales",
      text: "Un equipo de la Universidad de Washington combina inteligencia artificial y ordenadores cuánticos para simular sistemas atómicos a gran escala y estudiar estados exóticos de la materia, abriendo vías hacia nuevos dispositivos de computación y electrónica más eficientes.",
      url: "https://www.agenciasinc.es/Noticias/La-IA-y-la-computacion-cuantica-aceleran-el-diseno-de-nuevos-materiales"
    },
    {
      publishedAt: "2026-10-27T09:45",
      title: "Apocalipsis en PHP: dos vulnerabilidades críticas sin corregir ponen en peligro cualquier web",
      text: "Dos fallos críticos en PHP (PHP2Shell, CVSS 9.2) permiten ejecución remota de código sin autenticación en instalaciones web (PHP-FPM, mod_php, cgi y similares). Ya hay parches en las ramas 8.5.12, 8.4.27, 8.3.36 y 8.2.35; conviene actualizar cuanto antes.",
      url: "https://www.redeszone.net/noticias/seguridad/dos-vulnerabilidades-criticas-php-peligro-web/"
    },
    {
      publishedAt: "2026-05-01T14:00",
      title: "Crean los primeros \"neurobots\" de células vivas que fabrican su propio cerebro",
      text: "Ingeniería de sistemas vivos: células de rana se autoorganizan e integran precursores neuronales para crear biobots autónomos con redes neuronales funcionales, explorando la frontera entre robótica y biología.",
      url: "https://muyinteresante.okdiario.com/tecnologia/neurobots-celulas-vivas-neuronas-harvard-tufts.html"
    },
    {
      publishedAt: "2026-04-23T09:00",
      title: 'Nirav Patel (CEO de Framework) quiere acabar con Windows: "Es el MacBook Pro para usuarios de Linux"',
      text: "Framework apuesta por un portátil modular con Linux preinstalado de fábrica y certificación Ubuntu, con el objetivo de atraer tanto a usuarios de Windows como a quienes vienen de MacBook.",
      url: "https://computerhoy.20minutos.es/tecnologia/nirav-patel-ceo-framework-quiere-acabar-con-windows-con-su-nuevo-pc-es-macbook-pro-para-usuarios-linux_6961233_0.html?mrfcid=2026042269e5dd01434f0d7ca5b61a02"
    },
    {
      publishedAt: "2026-04-21T12:30",
      title: "Cuanto más grande, más rápido: crean la primera batería cuántica que desafía las leyes de la lógica",
      text: "Un prototipo de batería cuántica basado en superabsorción muestra un escalado “superextensivo”: a más moléculas acopladas en una microcavidad, mayor potencia de carga. El reto ahora es retener la energía durante más tiempo sin perder coherencia.",
      url: "https://muyinteresante.okdiario.com/tecnologia/bateria-cuantica-superabsorcion-quach.html"
    },
    {
      publishedAt: "2026-04-20T12:00",
      title: "Un robot humanoide corre 21 km en 50:26 y supera el récord humano mundial… pero hay un detalle clave en su victoria",
      text: "Un robot humanoide completó una media maratón en 50:26, mejorando ampliamente las marcas humanas; el artículo destaca factores como su diseño biomecánico y la refrigeración líquida para sostener el rendimiento.",
      url: "https://muyinteresante.okdiario.com/tecnologia/un-robot-humanoide-corre-21-km-en-5026-y-supera-el-record-humano-mundial-pero-hay-un-detalle-clave-en-su-victoria.html"
    },
    {
      publishedAt: "2026-04-17T10:00",
      title: 'Qué es Nvidia Ising, el "sistema operativo" de IA para ordenadores cuánticos que quiere cambiarlo todo',
      text: "NVIDIA presenta Ising, una familia open source de modelos de IA para calibración y corrección de errores en hardware cuántico, con el objetivo de automatizar ajustes y acelerar la computación cuántica estable y útil.",
      url: "https://computerhoy.20minutos.es/software/que-es-nvidia-ising-sistema-operativo-ia-para-ordenadores-cuanticos-que-quiere-cambiarlo-todo_6958896_0.html"
    },
    {
      publishedAt: "2026-04-16T11:00",
      title: "El Día Q, el momento en el que los ordenadores cuánticos descubrirán todos los secretos",
      text: "La llegada de ordenadores cuánticos capaces de ejecutar el algoritmo de Shor con miles de cúbits corregidos podría romper el cifrado RSA-2048 en horas o días; por ahora la inestabilidad de los cúbits mantiene lejos ese escenario.",
      url: "https://www.nationalgeographic.com.es/tecnologia/este-podria-ser-dia-q-momento-que-ordenadores-cuanticos-descubriran-todos-secretos_27974"
    },
    {
      publishedAt: "2026-04-15T08:30",
      title: "Crean un dispositivo que imita la física del cerebro humano para reducir un 70% el consumo de la IA",
      text: "Investigación de la Universidad de Cambridge: un memristor basado en óxido de hafnio que integra memoria y procesamiento para reducir el consumo energético en hardware neuromórfico.",
      url: "https://muyinteresante.okdiario.com/tecnologia/chip-neuromorfico-cambridge-ia-energia.html"
    },
    {
      publishedAt: "2026-04-13T11:05",
      title:
        "Confirman el rediseño más inesperado de las pilas de hidrógeno: 75% más potencia y una microarquitectura que cambia su futuro",
      text: "Investigadores de la UNSW proponen una microarquitectura con canales de ~100 μm para evacuar agua y gas dentro de la celda, reduciendo el “ahogo” por acumulación de agua y aumentando el rendimiento.",
      url: "https://muyinteresante.okdiario.com/tecnologia/confirman-el-rediseno-mas-inesperado-de-las-pilas-de-hidrogeno-75-mas-potencia-y-una-microarquitectura-que-cambia-su-futuro.html",
    },
    {
      publishedAt: "2026-04-13T09:25",
      title: 'Steve Jobs, cofundador de Apple, sobre la vida: "Tu tiempo es limitado, así que no lo desperdicies..."',
      text: "Recordatorio sobre priorizar lo importante y no vivir según expectativas ajenas, a partir del discurso de Stanford (2005).",
      url: "https://computerhoy.20minutos.es/tendencias/steve-jobs-cofundador-apple-sobre-vida-tu-tiempo-es-limitado-asi-que-no-desperdicies_6936100_0.html",
    },
    {
      publishedAt: "2026-04-11T13:11",
      title:
        "Anthropic no liberará Claude Mythos: la IA halló miles de vulnerabilidades críticas en SO y navegadores",
      text: "Anthropic mantiene enjaulado el agente Mythos Preview y convoca a decenas de firmas (Project Glasswing) para corregir fallos antes de que modelos similares acaben en malas manos; el informe destaca su capacidad inusual de convertir muchas de esas vulnerabilidades en exploits.",
      url: "https://computerhoy.20minutos.es/ciberseguridad/anthropic-mete-una-jaula-su-nueva-ia-claude-mythos-ha-encontrado-miles-vulnerabilidades-criticas-todos-los-sistemas-operativos-todos-los-navegadores_6955318_0.html",
    },
    {
      publishedAt: "2026-04-08T18:00",
      title: "Los precios de la memoria han empezado a caer en algunos mercados. Aún queda mucho para dar por cerrada la crisis de la IA",
      text: "La DDR5 empieza a bajar en retail en algunos mercados; el ajuste apunta a inventario/demanda, no a un cambio de ciclo.",
      url: "https://www.xataka.com/componentes/precios-memoria-han-empezado-a-caer-algunos-mercados-queda-mucho-para-dar-cerrada-crisis-ia"
    },
    {
      publishedAt: "2026-04-08T18:02",
      title: "Robots microscópicos impresos en 3D que nadan y navegan como organismos vivos",
      text: "Microrrobots flexibles impresos a escala micrométrica que se mueven con campo eléctrico y muestran comportamiento “tipo vivo” sin sensores ni software.",
      url: "https://www.3dnatives.com/es/robots-microscopicos-impresos-3d-01042026/"
    },
    {
      publishedAt: "2026-04-08T18:04",
      title: "Un brazo robótico del MIT materializa objetos a partir de órdenes de voz en cuestión de minutos",
      text: "Un sistema combina IA generativa 3D y ensamblaje robótico para convertir instrucciones habladas en objetos modulares en pocos minutos.",
      url: "https://www.elperiodico.com/es/tendencias21/20251209/nuevo-robot-transforma-voz-objetos-124588976"
    }
  ],

  // Novedades/mejoras de la web (panel NOVEDADES).
  // Formato:
  // { publishedAt: "YYYY-MM-DDTHH:mm", title: "Título breve", text: "Detalle (opcional)",
  //   navTarget?: "misc"|"docencia"|..., miscId?: "misc_lr", readingId?/gameId?/mediaId?, url? }
  // Los libros/juegos/media con `addedAt` generan entradas automáticas LIBRO:/JUEGO:/MEDIA:
  // cuyo título enlaza al elemento en Miscelánea.
  updates: [],

  // Lecturas recomendadas (Miscelánea → LECTURAS RECOMENDADAS)
  // `addedAt` se usa para ordenar/mostrar primero lo más reciente.
  // cover: ruta local recomendada (por ejemplo: "./assets/books/<id>.jpg")
  readings: [
    {
      id: "pentesting_con_kali",
      addedAt: "2026-10-27",
      themes: ["Programación y Robótica"],
      cover: "./books/0103.jpg",
      title: "Pentesting con Kali",
      authors: "Pablo González Pérez, Germán Sánchez Garcés y Jose Miguel Soriano de la Cámara",
      year: 2020,
      isbn: "978-8409221042",
      description:
        "Este libro explora Kali Linux, la distribución de ciberseguridad que renovó completamente el legado de BackTrack, ofreciendo en siete años mejoras sustanciales en estabilidad, optimización, actualización de herramientas y adaptación a tecnologías emergentes como arquitecturas ARM, Docker y NetHunter. A través de sus capítulos, se examinan las principales facetas de auditoría de sistemas: recogida de información, análisis de vulnerabilidades y su explotación, abordando tanto aspectos teóricos como prácticos en auditoría web, wireless y redes. El texto también dedica especial atención al análisis forense guiado por Kali Linux, permitiendo visualizar y estudiar casos relevantes para profesionales del sector."
    },
    {
      id: "fundamentos_de_linux_para_hackers",
      addedAt: "2026-10-27",
      themes: ["Programación y Robótica"],
      cover: "./books/0102.jpg",
      title: "Fundamentos de Linux para Hackers",
      authors: "OccupyTheWeb",
      year: 2026,
      isbn: "978-8426740618",
      description:
        "Fundamentos de Linux para Hackers ofrece una base sólida y práctica para iniciarse en el hacking ético, la ciberseguridad y las pruebas de intrusión. Enseña a dominar Kali Linux —el sistema operativo de referencia para análisis forense digital y pruebas de intrusión— desde la instalación en máquina virtual hasta la manipulación de texto, gestión de permisos y uso de variables de entorno. Mediante explicaciones claras, ejercicios y simulaciones reales, el lector adquiere competencias clave en seguridad informática, anonimato en red y automatización con scripts en Bash y Python. Los temas cubiertos incluyen: ocultar rastros modificando configuraciones de red, escribir utilidades propias para escanear conexiones y monitorizar redes inalámbricas, navegación anónima mediante Tor, VPNs, proxies y correo cifrado, creación de scripts de Bash para identificar objetivos en rangos de IP, explotación de servicios como MySQL, Apache y OpenSSH, y desarrollo de herramientas propias como cámaras espía remotas o descifradores de contraseñas. Esta edición incluye actualizaciones para nuevas versiones de Kali y Linux, un enfoque más seguro sobre privilegios de superusuario, mejoras en registro de Bluetooth y un nuevo capítulo sobre inteligencia artificial en ciberseguridad."
    },
    {
      id: "inteligencia_artificial_para_investigadores",
      addedAt: "2026-10-27",
      themes: ["IA & IoT"],
      cover: "./books/0101.jpg",
      title: "Inteligencia Artificial para investigadores",
      authors: "José Manuel Ortega Candel",
      year: 2026,
      isbn: "979-1399082708",
      description:
        "La inteligencia artificial ya no pertenece al futuro de la ciencia: forma parte de su presente. Con estrategias concretas y herramientas reales, este libro te muestra cómo integrarla en todas las fases de tu investigación —del análisis de datos a la redacción de artículos— manteniendo intactos el rigor y la profundidad de tu trabajo. Investigar más rápido, publicar con mayor impacto y ampliar tu influencia empiezan aquí."
    },
    {
      id: "ia_para_la_vida_cotidiana",
      addedAt: "2026-10-27",
      themes: ["IA & IoT"],
      cover: "./books/0100.jpg",
      title: "IA para la vida cotidiana",
      authors: "Marisa Tormo",
      year: 2026,
      isbn: "979-1399082722",
      description:
        "Este libro nace para desmontar la creencia de que «la inteligencia artificial no es para mí»: aunque sientas que todo avanza demasiado rápido o que se habla en otro idioma, ya la usas diariamente sin darte cuenta —en tu móvil, correo, recomendaciones y herramientas cotidianas—. Su propósito es ayudarte a incorporarla a tu vida de forma sencilla, práctica y sin tecnicismos. A través de ejemplos reales, ejercicios, talleres y prompts listos para usar, junto a AiTina, tu asistente virtual, aprenderás a organizar tu hogar y planificar viajes, crear hábitos adaptados a tu estilo de vida, gestionar tus finanzas, ahorrar tiempo en el trabajo, mantener bajo control correos y archivos. La clave no está en saber más tecnología, sino en aprender a utilizarla a tu favor: tú llevas el manillar y la IA te ayuda a pedalear."
    },
    {
      id: "chernobil_01_23_40",
      addedAt: "2026-10-27",
      themes: ["Histórico"],
      cover: "./books/0099.jpg",
      title: "Chernóbil 01:23:40",
      authors: "Andrew Leatherbarrow",
      year: 2019,
      isbn: "978-8417761752",
      description:
        "Esta obra reconstruye el accidente de la central nuclear de Chernóbil —desencadenado a la 01:23:40 del 26 de abril de 1986 durante una prueba nocturna mal ejecutada— combinando dos hilos narrativos. Por un lado, una exposición cronológica y muy documentada (fruto, según el propio autor, de unos cinco años de investigación) que arranca con una breve historia de la energía nuclear y los accidentes previos, explica cómo el diseño del reactor RBMK y una cadena de errores humanos, presiones de producción y ocultación soviética hicieron posible la explosión, y sigue después con la lucha por contener el núcleo, la evacuación, la limpieza y el juicio posterior. Por otro, el relato en primera persona de sus propios viajes a la Zona de Exclusión, con las gestiones burocráticas, los desplazamientos y lo que encontró sobre el terreno décadas después. El resultado es una obra divulgativa y accesible, pensada explícitamente para cubrir el hueco de un relato riguroso pero relativamente breve, que insiste en repartir responsabilidades entre los fabricantes del reactor, los operadores y el sistema político."
    },
    {
      id: "energia_nuclear_salvara_mundo",
      addedAt: "2026-04-15",
      themes: ["Energía"],
      cover: "./books/0001.jpg",
      title: "La energía nuclear salvará el mundo: Derribando mitos sobre la energía nuclear",
      authors: "Alfredo García (@OperadorNuclear)",
      year: 2021,
      isbn: "978-8408226772",
      description:
        "Es un error equiparar a los operadores nucleares con Homer Simpson o imaginar que España podría sufrir una catástrofe tipo Chernóbil. Además, la realidad energética actual nos dice que no podemos abandonar la nuclear sin disparar las emisiones de CO2 y la contaminación. Para mantener nuestra red eléctrica alimentando desde patinetes hasta coches eléctricos, es urgente cambiar la percepción sobre estas centrales. En su libro, Alfredo García ('Operador Nuclear') desmonta mitos recurrentes —como la caducidad de los reactores a los 40 años, el agotamiento del uranio o la posibilidad de explosiones— y ofrece una visión clara: la energía nuclear sigue siendo la única fuente limpia y eficiente capaz de generar electricidad de forma constante, al margen del clima."
    },
    {
      id: "geoestrategia_bombilla_cielo_limpio",
      addedAt: "2026-04-15",
      themes: ["Energía"],
      cover: "./books/0002.jpg",
      title: "Geoestrategia de la bombilla: Energía nuclear para un cielo limpio",
      authors: "Alfredo García (@OperadorNuclear)",
      year: 2022,
      isbn: "978-8411001144",
      description:
        "Geoestrategia de la bombilla aborda el desafío global de crear un sistema energético sostenible, limpio y accesible, destacando que no hay soluciones mágicas, sino equilibrios entre ventajas e inconvenientes. El libro analiza cómo la cadena energética —desde la extracción de minerales hasta la distribución— redefine el orden mundial, impulsando o hundiendo naciones y desatando conflictos. Con una perspectiva histórica y política, la obra expone las contradicciones actuales y propone soluciones realistas basadas en la ciencia, abarcando desde recursos subterráneos hasta tecnologías nucleares avanzadas."
    },
    {
      id: "mago_vida_epoca_nikola_tesla",
      addedAt: "2026-04-15",
      themes: ["Biografías"],
      cover: "./books/0003.jpg",
      title: "Mago - La vida y la época de Nikola Tesla: Biografía de un genio",
      authors: "Marc Seifer (Autor), Jordi Font i Barris (Traductor)",
      year: 2024,
      isbn: "978-8411721721",
      description:
        "Descubre la vida del hombre que muchos consideran el padre de la tecnología eléctrica moderna: Nikola Tesla (1856-1943). Reconocido como la inspiración detrás de la radio, los robots y el radar, Tesla es el verdadero santo patrón de la electricidad. Esta biografía definitiva, construida sobre documentos inéditos y material original nunca antes publicado, profundiza en la mente del genio que revolucionó el mundo. Desde la canalización de la corriente alterna y la iluminación de neón hasta las gigantescas turbinas de las Cataratas del Niágara, el libro narra sus logros más trascendentales. Una obra visualmente rica que incluye dieciséis páginas de ilustraciones, destacando la icónica portada de la revista Time de julio de 1931, dedicada exclusivamente a su legendaria carrera."
    },
    {
      id: "nikola_tesla_infantil",
      addedAt: "2026-04-15",
      themes: ["Infantil & Juvenil"],
      cover: "./books/0004.jpg",
      title: "Nikola Tesla",
      authors: "Daniel Balmaceda",
      year: 2019,
      isbn: "978-9876377829",
      description:
        "Un niño nacido bajo una tormenta trajo consigo un don especial: la luz. Desde pequeño, su imaginación le mostraba inventos que podrían cambiar el mundo. Su corazón deseaba que todos pudieran tener energía gratis y sin pagar nada. Quería ser recordado como un gran héroe al lado de otros inventores famosos, pero a veces la vida es complicada y no siempre recibimos el reconocimiento justo por nuestras buenas ideas. Este es el cuento de ese soñador que nunca dejó de creer."
    },
    {
      id: "claves_exito_toyota",
      addedAt: "2026-04-22",
      themes: ["Gestión & Producción"],
      cover: "./books/0005.jpg",
      title: "Las claves del éxito Toyota.",
      authors: "Jeffrey K. Liker (Autor), Lluís Cuatrecasas Arbós (Traductor)",
      year: 2010,
      isbn: "978-8498750744",
      description:
        "Las claves del éxito de Toyota revela el verdadero fundamento del modelo de gestión de Toyota, más allá de las herramientas Lean que se han popularizado globalmente. El libro expone los 14 principios fundamentales que guían la cultura organizacional de la empresa japonesa, integrando cuatro elementos esenciales: filosofía a largo plazo, procesos robustos, desarrollo de personas y soluciones a problemas. Su valor radica en la aplicabilidad transversal: explica qué aspectos pueden adaptarse a cualquier organización, ya sea del sector servicios o industrial, y cómo combinar estos elementos transforma una empresa hacia una cultura Lean auténtica. No se trata de copiar superficialmente, sino de aprender del modo de proceder de Toyota para construir una base sólida de excelencia operativa."
    },
    {
      id: "impresion_3d_2ed",
      addedAt: "2026-04-22",
      themes: ["Diseño e Impresión 3D"],
      cover: "./books/0006.jpg",
      title: "Impresión 3D (2º edición)",
      authors: "Sergio Gómez González",
      year: 2020,
      isbn: "978-8426727121",
      description:
        "Impresión 3D es el manual de referencia más vendido y valorado en español para iniciarse en esta tecnología de forma rápida y práctica. Esta edición actualizada, ilustrada con más de 600 imágenes a color, guía al lector a través de todo el flujo de trabajo utilizando herramientas gratuitas: desde el diseño CAD, escaneo o reconstrucción médica (DICOM), pasando por la verificación de mallas y el slicing (generación de G-Codes), hasta la impresión final. El libro abarca consejos de diseño, tipos de filamentos, repositorios de modelos gratuitos, servicios de impresión a domicilio y las configuraciones clave de impresoras FDM, destacando las mejores marcas del mercado. Su enfoque práctico se refuerza con 33 ejercicios paso a paso que cubren aspectos críticos como la creación de soportes y la preparación de archivos. Es la herramienta ideal tanto para principiantes como para quienes buscan dominar los secretos de la impresión 3D."
    },
    {
      id: "aprender_impresion_3d_makers_100_ejercicios",
      addedAt: "2026-04-22",
      themes: ["Diseño e Impresión 3D"],
      cover: "./books/0007.jpg",
      title: "Aprender Impresión 3D para makers con 100 ejercicios prácticos",
      authors: "David Martín Cruz",
      year: 2019,
      isbn: "978-8426727473",
      description:
        "Este manual práctico es la guía ideal para materializar proyectos personales en casa mediante impresión 3D. Compatible con la mayoría de las impresoras, ofrece conocimientos esenciales y técnicas demostradas a través de ejemplos reales y ejercicios para dominar el equipo. El libro cubre aspectos fundamentales como el ensamblaje y revisión de componentes, selección de impresoras y filamentos, técnicas de nivelación, resolución de averías comunes, mantenimiento y mejoras de hardware, así como el diseño e impresión de modelos. Además, incluye un código de acceso para descargar contenido adicional gratuito en línea. Es una herramienta sencilla y divertida para quienes desean aprender a imprimir su propia realidad."
    },
    {
      id: "como_funcionan_las_cosas_ingles",
      addedAt: "2026-04-22",
      themes: ["Ciencia", "Infantil & Juvenil", "Tecnología"],
      cover: "./books/0008.jpg",
      title: "Cómo funcionan las cosas (Inglés)",
      authors: "David Macaulay",
      year: 2023,
      isbn: "978-0241569764",
      description:
        "The Way Things Work Now es una enciclopedia extraordinaria escrita e ilustrada por David Macaulay para niños a partir de 9 años. La obra revela la ciencia detrás de cientos de tecnologías, mostrando el funcionamiento interno de máquinas que van desde relojes y bicicletas hasta motores a reacción e Internet. Esta edición actualizada incorpora tecnologías modernas como pantallas táctiles y smartphones, además de explicar sistemas complejos como cohetes espaciales y reactores nucleares. Mediante ilustraciones únicas y el uso de mamuts para añadir humor, Macaulay logra que los principios científicos sean accesibles y divertidos, transformando el aprendizaje en una experiencia fascinante para lectores de todas las edades."
    },
    {
      id: "mates_a_lo_grande_mamuts",
      addedAt: "2026-04-22",
      themes: ["Infantil & Juvenil", "Matemáticas"],
      cover: "./books/0009.jpg",
      title: "Mates a lo grande: El mundo de los números explicado por mamuts",
      authors: "David Macaulay",
      year: 2022,
      isbn: "978-0241582831",
      description:
        "Mates a lo grande es una propuesta original y divertida para aprender matemáticas, creada por el galardonado autor e ilustrador David Macaulay. En esta obra, un grupo de curiosos mamuts actúa como guía para explorar conceptos fundamentales como el cálculo, la geometría, las medidas, los ángulos, los gráficos y las ecuaciones. Siguiendo el estilo no convencional que caracteriza a Macaulay —autor de clásicos como Cómo funcionan las cosas y Ciencia a lo grande—, el libro presenta más de 60 temas esenciales acompañados de textos explicativos e ilustraciones de apoyo. El objetivo es claro: permitir que los lectores dominen los principios básicos de las matemáticas mientras se divierten, demostrando que el aprendizaje puede ser una experiencia entretenida y fascinante."
    },
    {
      id: "ciencia_a_lo_grande_mamuts",
      addedAt: "2026-04-22",
      themes: ["Ciencia", "Infantil & Juvenil"],
      cover: "./books/0010.jpg",
      title: "Ciencia a lo grande: El mundo explicado por mamuts",
      authors: "David Macaulay",
      year: 2020,
      isbn: "978-0241470336",
      description:
        "En Ciencia a lo grande, un grupo de intrépidos mamuts curiosos actúa como guía para explorar los fundamentos de la física, la biología y la química en una lectura original y amena. Esta obra combina entretenimiento y educación al responder preguntas esenciales como por qué flotan los objetos, qué contiene una célula o cómo funcionan los imanes. A través de más de 60 temas básicos, el libro presenta explicaciones claras apoyadas por diagramas ilustrativos, convirtiéndose en la introducción ideal a los principios científicos para jóvenes espíritus inquietos que desean descubrir el mundo que les rodea de forma divertida."
    },
    {
      id: "ayuda_hijos_matematicas_guia_visual",
      addedAt: "2026-04-22",
      themes: ["Educación", "Matemáticas"],
      cover: "./books/0011.jpg",
      title: "Ayuda a tus hijos con las matemáticas: Una guía visual única paso a paso",
      authors: "DK (Varios Autores)",
      year: 2019,
      isbn: "978-0241420577",
      description:
        "Ayuda a tus hijos con las matemáticas es una guía visual diseñada para que los padres acompañen a sus hijos en el estudio del álgebra, la geometría y la estadística de manera sencilla y efectiva. Utilizando imágenes, diagramas y ejemplos paso a paso, el libro enseña a los adultos a resolver problemas junto a sus hijos, cubriendo un espectro que va desde la aritmética básica hasta temas complejos como la trigonometría y las estadísticas. Esta edición actualizada incorpora los últimos cambios del Currículo Nacional del Reino Unido y añade contenido esencial sobre números romanos, medición del tiempo, fracciones y tablas de multiplicar. Para facilitar el aprendizaje, la obra también incluye un glosario completo de términos y símbolos matemáticos clave, permitiendo abordar cualquier desafío numérico con total confianza."
    },
    {
      id: "armas_destruccion_matematica_big_data",
      addedAt: "2026-04-22",
      themes: ["Blockchain & Big Data", "Matemáticas"],
      cover: "./books/0012.jpg",
      title: "Armas de destrucción matemática: Cómo el Big Data aumenta la desigualdad y amenaza la democracia",
      authors: "Cathy O'Neil",
      year: 2018,
      isbn: "978-8494740848",
      description:
        "Vivimos en la edad del algoritmo, donde modelos matemáticos opacos y no regulados toman decisiones vitales en lugar de humanos. Lejos de garantizar la equidad teórica de juzgar a todos bajo las mismas reglas, estos sistemas refuerzan la discriminación y crean espirales viciosas que favorecen a los afortunados mientras castigan a los oprimidos. Cathy O'Neil advierte sobre estas \"armas de destrucción matemática\" que, bajo una falsa apariencia de objetividad, califican a estudiantes, conceden préstamos, evalúan trabajadores y fijan libertades condicionales, configurando un futuro donde el big data perpetúa la desigualdad estructural en lugar de resolverla."
    },
    {
      id: "ecologista_nuclear",
      addedAt: "2026-04-23",
      themes: ["Energía"],
      cover: "./books/0013.jpg",
      title: "El ecologista nuclear",
      authors: "J. J. Gómez Cadenas",
      year: 2009,
      isbn: "978-8467030990",
      description:
        "El desafío más crítico que enfrenta la humanidad en este siglo es el cambio climático. Existe un amplio consenso científico sobre que el rápido incremento de los gases de efecto invernadero podría tener consecuencias devastadoras para nuestra civilización. La quema masiva de carbón para la generación eléctrica es uno de los principales impulsores del alarmante aumento del CO2 atmosférico. En las próximas décadas, la única alternativa viable a los combustibles fósiles parece ser un sistema energético híbrido que combine la energía nuclear con una fuerte integración de fuentes renovables, especialmente la eólica. Enfrentar a estas dos tecnologías es un error irresponsable; en lugar de verlas como antagonistas, deberían considerarse aliadas estratégicas en la lucha contra el verdadero enemigo: el cambio climático, una amenaza que podría destruir nuestro mundo globalizado mucho antes de lo que imaginamos."
    },
    {
      id: "abrir_en_caso_de_apocalipsis",
      addedAt: "2026-05-01",
      themes: ["Tecnología"],
      cover: "./books/0014.jpg",
      title: "Abrir en caso de apocalipsis",
      authors: "Lewis Dartnell (Autor), Francisco José Ramos Mena (Traductor)",
      year: 2015,
      isbn: "978-8499924724",
      description:
        "Una pandemia sin control, el choque de un asteroide o tal vez una guerra atómica; da igual la causa, el mundo que conocíamos se ha desvanecido y los pocos que quedan deben empezar desde cero. ¿Qué saberes esenciales se requieren para reconstruir la civilización? Después de reunir lo que aún sirve, ¿por dónde comenzar a fabricar lo indispensable? ¿De qué manera plantar cultivos, producir energía, elaborar fármacos o obtener metal de la tierra? ¿Es posible saltarse etapas y evitar otra edad oscura para recuperar el progreso?\n\nLa vida moderna nos ha alejado de los mecanismos básicos que sostienen nuestra existencia, así como de los principios científicos que nos permiten comprender y crear por nosotros mismos. \"Abrir en caso de apocalipsis\" es un recorrido de descubrimiento, un manual que detalla todo lo necesario sobre nuestro entorno. Una guía ágil para reiniciar la sociedad que cambiará nuestra visión del mundo y nos será útil cuando este haya dejado de existir tal como lo conocemos."
    },
    {
      id: "verdad_sobre_chernobil",
      addedAt: "2026-05-01",
      themes: ["Energía", "Histórico"],
      cover: "./books/0015.jpg",
      title: "La verdad sobre Chernóbil",
      authors: "Grigori Medvédev",
      year: 2011,
      isbn: "978-8478920495",
      description:
        "La verdad sobre Chernóbil es un libro testimonial e investigativo de Grigori Medvédev, ingeniero nuclear soviético con conocimiento directo del funcionamiento de las centrales de la URSS.\n\nLa obra examina el accidente de 1986 desafiando la versión oficial soviética. Medvédev revela, con rigor técnico pero lenguaje accesible, las causas reales del desastre en el reactor 4: defectos de diseño del RBMK, fallos críticos en seguridad y errores humanos exacerbados por presión política y una cultura del secretismo. Mediante testimonios, análisis técnico y periodismo, el autor expone cómo la opacidad, la desinformación y la improvisación pusieron en riesgo tanto a los trabajadores como a millones de personas. El libro documenta también las consecuencias ambientales y humanas, el sacrificio de los \"liquidadores\" y el trauma social del desastre. En esencia, es una crítica al sistema soviético, una advertencia sobre los peligros de la energía nuclear mal gestionada y un documento fundamental para comprender el verdadero alcance de esta catástrofe tecnológica del siglo XX."
    },
    {
      id: "nikola_tesla_mi_vida_mi_investigacion",
      addedAt: "2026-05-01",
      themes: ["Biografías", "Tecnología"],
      cover: "./books/0016.jpg",
      title: "Nikola Tesla: Mi Vida, Mi Investigación",
      authors:
        "Nikola Tesla (Autor), Pedro Jose Barrios Rodriguez (Traductor), Ramon Felipe Rodriguez Lopez (Traductor)",
      year: 2015,
      isbn: "978-1512108538",
      description:
        "A pesar de que la historia suele favorecer a los vencedores, Nikola Tesla ha sido injustamente eclipsado por Thomas Edison en los registros oficiales, a pesar de que sus innovaciones transformaron la electricidad de curiosidad teórica en la base tecnológica del mundo moderno. Su legado visionario cambió permanentemente nuestra relación con la energía, aunque la narrativa dominante ha minimizado su contribución.\n\nEl libro \"Nikola Tesla: Mi Vida, Mi Investigación\" rescata esta figura mediante una combinación de biografía, autobiografía y explicaciones accesibles de sus trabajos más importantes, complementada con cien páginas de fotografías inéditas que documentan su vida desde el nacimiento hasta su muerte en 1943, ofreciendo una visión completa del genio que alimentó el futuro."
    },
    {
      id: "nikola_tesla_charo_gonzalez_casas",
      addedAt: "2026-05-01",
      themes: ["Tecnología"],
      cover: "./books/0017.jpg",
      title: "Nikola Tesla",
      authors: "Charo González Casas",
      year: 2018,
      isbn: "978-8491113164",
      description:
        "Ni Marconi inventó la radio ni Edison la luz; ambos logros, junto con cientos de patentes que incluyen la corriente alterna, el radar, el control remoto y los robots, fueron apropiados de Nikola Tesla, considerado por muchos el mayor inventor de la historia. Su visión más ambiciosa, proveer electricidad inalámbrica, gratuita y universal, fue sofocada por la codicia de los magnates que rechazaron financiar un modelo sin contadores ni ganancias, lo que derivó en el silencio, la ridiculización y la pobreza de Tesla en sus últimos años.\n\nNacido en la era del vapor, Tesla transformó el mundo con la energía de los electrones, pero su legado sigue marginado en los libros de texto. Su vida, marcada por la castidad y un final solitario, se presenta como un martirio ante la mezquindad del poder y el olvido colectivo. Es urgente reconocer su verdadera estatura y devolverle el lugar que merece en nuestra memoria histórica."
    },
    {
      id: "mis_inventos_autobiografia_tesla",
      addedAt: "2026-05-01",
      themes: ["Biografías", "Tecnología"],
      cover: "./books/0018.jpg",
      title: "Mis Inventos: Autobiografía de Nikola Tesla",
      authors: "Nikola Tesla (Autor), Vicente Alegre (Traductor)",
      year: 2024,
      isbn: "978-8410245464",
      description:
        "Mis Inventos ofrece una ventana directa a la mente de Nikola Tesla, el científico visionario y genio inventor. En esta autobiografía íntima, Tesla narra sus logros más destacados, sus luchas personales y las ideas que transformaron el mundo.\n\nAdéntrate en la trayectoria de un genio malentendido, cuyas teorías y descubrimientos establecieron los cimientos de la tecnología contemporánea. Esta obra constituye una lectura indispensable para comprender el legado perdurable de uno de los innovadores más extraordinarios de la historia."
    },
    {
      id: "crisis_tecnologia_calvo_hernando",
      addedAt: "2026-05-01",
      themes: ["Tecnología"],
      cover: "./books/0019.jpg",
      title: "La crisis de la tecnología: [desde la amenaza tecnológica hasta las alternativas energéticas y ecologistas]",
      authors: "Manuel Calvo Hernando",
      year: 1980,
      isbn: "978-8402075932",
      description:
        "La crisis de la tecnología: [desde la amenaza tecnológica hasta las alternativas energéticas y ecologistas] es un libro escrito por Manuel Calvo Hernando y publicado por primera vez en 1980 por Editorial Bruguera en su colección \"Libro Blanco\". La obra analiza los efectos negativos del desarrollo tecnológico desmedido, abordando temas como la amenaza ecológica, el agotamiento de recursos naturales y la necesidad de alternativas energéticas sostenibles.\n\nEl libro forma parte de una reflexión crítica temprana sobre la relación entre tecnología, medio ambiente y sociedad, anticipándose a debates contemporáneos sobre sostenibilidad digital y la huella ecológica de la industria tecnológica. Calvo Hernando explora cómo el progreso tecnológico, lejos de resolver todos los problemas humanos, puede generar nuevas crisis si no se orienta desde principios ecológicos y éticos."
    },
    {
      id: "historia_ciencia_tecnologia_torregrosa",
      addedAt: "2026-05-01",
      themes: ["Tecnología", "Histórico", "Ciencia"],
      cover: "./books/0020.jpg",
      title: "Historia de la Ciencia y la Tecnología",
      authors: "Daniel Carlos Torregrosa López",
      year: 2025,
      isbn: "979-1387556204",
      description:
        "Este recorrido por la historia de la ciencia y la tecnología, estructurado en 70 capítulos ágiles, traza la evolución del ingenio humano desde la invención de la rueda hasta las redes neuronales actuales. A través de anécdotas y figuras clave como Herón de Alejandría, Galileo, William Herschel y Ada Lovelace, el libro destaca los momentos decisivos que han moldeado nuestra civilización, mostrando cómo cada gran avance se construye sobre los cimientos de descubrimientos previos.\n\nMás allá de una simple cronología, la obra revela los patrones subyacentes que conectan las innovaciones, demostrando cómo las ideas que parecían imposibles se convierten en realidad gracias a la búsqueda incesante de conocimiento. Es una lectura esencial para entender nuestro pasado tecnológico y proyectar hacia dónde nos dirige la frontera de la inteligencia artificial."
    },
    {
      id: "etica_robots_coeckelbergh",
      addedAt: "2026-05-01",
      themes: ["Tecnología", "Programación y Robótica"],
      cover: "./books/0021.jpg",
      title: "La ética de los robots",
      authors: "Mark Coeckelbergh",
      year: 2024,
      isbn: "978-8437647067",
      description:
        "¿Poseen los robots agencia moral? ¿Pueden ser juzgados por sus actos, desplazan a los humanos del mercado laboral o les debemos algún tipo de deuda ética? Estas interrogantes definen el desafío moral que enfrentamos ante la proliferación de dispositivos inteligentes cada vez más avanzados.\n\nEn esta obra, concebida como una brújula para navegar dicho escenario inédito, Mark Coeckelbergh aborda estas dudas examinando un amplio espectro de tecnologías, desde robots de compañía hasta drones de combate. Su tesis central sostiene que los dilemas de la robótica no se limitan a las máquinas, sino que revelan y cuestionan la propia esencia de la humanidad."
    },
    {
      id: "tirania_tecnologia_peralez_benito",
      addedAt: "2026-05-01",
      themes: ["Tecnología"],
      cover: "./books/0022.jpg",
      title: "La tiranía de la Tecnología",
      authors: "Tomás Peralez Benito",
      year: 2024,
      isbn: "978-8412546798",
      description:
        "Desde su aparición a finales del siglo XVIII, la tecnología se ha vinculado indisolublemente al progreso, integrándose con relativa facilidad en la vida privada a pesar de ciertas resistencias. Sin embargo, en las últimas décadas del siglo pasado, el surgimiento del paradigma digital —un modelo algebraico impulsado por capacidades computacionales sin precedentes— transformó radicalmente el ecosistema tecnológico, superando incluso a la inteligencia humana en desafíos como el ajedrez en 1996.\n\nLa tiranía de la tecnología ofrece una crítica severa de la dependencia actual, donde la red global y los miles de millones de dispositivos conectados han generado una nueva sociedad caracterizada por la sustitución de lo real por lo virtual, la conversación por el mensaje y la contemplación por la captura efímera de imágenes. Ante la pasividad impuesta por la inteligencia artificial, la amenaza de los Big Data y la ciberdelincuencia, el texto plantea si hemos sido engañados por las ambiciones corporativas y concluye que la única solución reside en la acción consciente de las personas, pues nadie vendrá a rescatarnos."
    },
    {
      id: "robots_vida_ser_humano_peralez_benito",
      addedAt: "2026-05-01",
      themes: ["Tecnología", "Programación y Robótica"],
      cover: "./books/0023.jpg",
      title: "Los robots en la vida del ser humano",
      authors: "Tomás Peralez Benito",
      year: 2022,
      isbn: "978-8412286151",
      description:
        "Desde la palanca de Arquímedes hasta la máquina de vapor de Watt, la evolución técnica culminó en el siglo XX con el nacimiento de la robótica. Los brazos mecánicos, guiados por la electrónica, comenzaron primero a complementar y luego a sustituir el trabajo humano en las fábricas, expandiéndose hasta competir con sus creadores en fuerza, habilidad y memoria.\n\nEste libro explora la robótica industrial, ocupacional y social, describiendo sus principios tecnológicos y catalogando humanoides y mascotas robóticas que asisten en tareas complejas. Su aplicación en el cuidado de mayores, niños y la sanidad resulta indispensable, actuando como nuevos sirvientes mecánicos que compensan las limitaciones físicas humanas. Además, aborda la necesidad de regulación legal para establecer la responsabilidad de las \"personas electrónicas\" ante daños a terceros, y cierra con un epílogo crítico de la doctora Concha Germán Bes sobre la robototerapia en afecciones físicas y mentales."
    },
    {
      id: "aqui_hay_dragones_haggstrom",
      addedAt: "2026-05-01",
      themes: ["Tecnología", "Ciencia"],
      cover: "./books/0024.jpg",
      title: "Aquí hay dragones: Ciencia, tecnología y futuro de la humanidad",
      authors: "Olle Häggström (Autor), Juan Carlos Ruiz Franco (Traductor)",
      year: 2016,
      isbn: "978-8416511099",
      description:
        "Aquí hay dragones: Ciencia, tecnología y futuro de la humanidad desafía la noción ingenua de que el avance científico y tecnológico es intrínsecamente positivo. Sus autores advierten que esta perspectiva es peligrosamente simplista: aunque disciplinas como la biotecnología, la nanotecnología y la inteligencia artificial prometen potenciar nuestras capacidades, también encierran riesgos existenciales, incluida la posibilidad de la extinción humana. El título evoca los antiguos mapas medievales que ilustraban dragones en tierras ignotas, sirviendo como metáfora de los peligros impredecibles que acechan en el futuro tecnológico.\n\nLejos de proponer una pausa al progreso, la obra insta a \"cartografiar\" anticipadamente estos territorios de riesgo para actuar con prudencia. Su propósito es estimular una reflexión crítica que permita maximizar los beneficios de la ciencia mientras se mitigan sus amenazas, fomentando así una visión más madura, responsable y equilibrada del destino de la humanidad."
    },
    {
      id: "firmado_nikola_tesla_escritos_cartas_1890_1943",
      addedAt: "2026-05-01",
      themes: ["Biografías"],
      cover: "./books/0025.jpg",
      title: "Firmado: Nikola Tesla: Escritos y cartas, 1890-1943",
      authors: "Miguel A. Delgado (Redactor), Nikola Tesla (Autor original), Cristina Núñez Pereira (Traductor)",
      year: 2012,
      isbn: "978-8475068114",
      description:
        "Esta edición reúne una selección de cartas y artículos de Nikola Tesla, algunos inéditos, que revelan un lado más humano y personal del inventor, alejándose de la imagen puramente científica de obras anteriores. Incluye una cronología detallada año por año y un directorio biográfico de sus contemporáneos, desde Mark Twain hasta J.P. Morgan, Westinghouse y Edison. Como particularidad, se incorpora la última nota hallada en su mesilla tras su muerte.\n\nTesla, recordado como el padre de la corriente alterna y el \"perdedor\" de la guerra de las corrientes, vive hoy un renacimiento. Las nuevas generaciones redescubren su figura, mientras muchas de sus teorías visionarias sobre comunicación inalámbrica y energía responsable recuperan vigencia."
    },
    {
      id: "nucleares_si_por_favor",
      addedAt: "2026-05-01",
      themes: ["Energía"],
      cover: "./books/0026.jpg",
      title: "Nucleares: sí, por favor",
      authors: "Manuel Fernández Ordóñez",
      year: 2023,
      isbn: "978-8423434848",
      description:
        "La crisis energética derivada de la guerra en Ucrania ha evidenciado las fragilidades del sistema europeo, devolviendo al debate público a la energía nuclear, la gran olvidada necesaria para alcanzar la autonomía estratégica. En este ensayo, el físico Manuel Fernández Ordóñez desmonta el estigma ideológico que pesa sobre esta tecnología, situándola como un recurso más en la histórica lucha humana por dominar la energía.\n\nLejos de oponerse a las renovables, la obra defiende que la transición ecológica y la descarbonización son inevitables pero imposibles de lograr con éxito sin la contribución nuclear. El autor argumenta que los temores hacia esta fuente se basan en mitos, mientras que su capacidad para generar masiva energía con mínimo impacto ambiental la convierte en un pilar indispensable junto a las energías limpias. Ante el fin de la era de la energía barata y abundante asumida, la conclusión es clara: la nuclear es la opción más potente, segura y fiable para garantizar un futuro sostenible."
    },
    {
      id: "voces_chernobil_cronica_futuro",
      addedAt: "2026-05-01",
      themes: ["Histórico"],
      cover: "./books/0027.jpg",
      title: "Voces de Chernóbil: Crónica del futuro",
      authors: "Svetlana Alexiévich",
      year: 2015,
      isbn: "978-8499926261",
      description:
        "Svetlana Alexiévich, Premio Nobel de Literatura en 2015, rescata del olvido y del silencio impuesto por el Estado soviético las voces de los supervivientes del desastre de Chernóbil en 1986. A través de testimonios conmovedores, como el de una esposa que perdió a su esposo bombero no solo físicamente, sino en su identidad tras la exposición radiactiva, la obra construye un relato polifónico que da voz a quienes fueron ignorados.\n\nLa estructura del libro imita una tragedia griega, presentando a héroes atrapados por un destino fatal y una \"polis\" (la URSS) que los calló, aunque a diferencia de la tragedia clásica, aquí no existe catarsis posible. El jurado sueco reconoció en esta escritura polifónica un monumento al valor y al sufrimiento humano, consolidando la obra como un testimonio esencial sobre la catástrofe y sus consecuencias personales."
    },
    {
      id: "profesor_secundaria_claves_autoridad_aula",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0028.jpg",
      title: "Profesor de Secundaria: Claves para lograr la autoridad en el aula",
      authors: "Antonio Fonseca Morales (Autor), Andres Carmona Campo (Autor)",
      year: 2015,
      isbn: "978-8460829607",
      description:
        "Este libro, diseñado tanto para opositores como para docentes en activo, ofrece una guía rigurosa y práctica para navegar las exigencias de la educación en el siglo XXI. Su objetivo es despejar la confusión en torno a competencias, estándares, rúbricas y metodologías, proporcionando herramientas concretas para gestionar el aula, mantener la autoridad, motivar al alumnado y resolver conflictos cotidianos.\n\nLa obra se estructura en ocho capítulos que abordan secuencialmente los pilares de la docencia moderna: desde la construcción de la autoridad y la gestión del primer día de clase, hasta la definición de normas, la relación entre contenidos y competencias, y estrategias para garantizar la atención. Además, profundiza en la renovación metodológica con el uso de tecnologías, la atención a la diversidad del alumnado y una evaluación práctica que supera los tópicos. Para finalizar, incluye un anexo que simplifica la compleja normativa curricular, facilitando la comprensión de los niveles de concreción a los nuevos profesores."
    },
    {
      id: "las_aventuras_profesor_novato",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0029.jpg",
      title: "Las aventuras de un profesor novato",
      authors: "Pablo Gómez Sesé",
      year: 2016,
      isbn: "978-8490606599",
      description:
        "Este divertido libro narra la experiencia del primer día de clase de un profesor novato, paralizado por el miedo al juicio de sus treinta alumnos y a cometer errores, quien se enfrenta a la realidad sin ningún manual de instrucciones. A través de anécdotas caóticas y reveladoras —desde intentar ganar al líder del grupo y sufrir rayones en el coche, hasta golpes con libros sobre mesas o usar partidos de fútbol como técnica de concentración—, la obra explora cómo se gana o pierde el control del aula, desmitificando la figura del docente \"guay\" y mostrando que la gestión de la clase depende de la autenticidad y la capacidad de adaptación ante situaciones imprevistas."
    },
    {
      id: "anecdotas_profesor_secundaria",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0030.jpg",
      title: "Anécdotas de un profesor de secundaria",
      authors: "Albert Pallarés",
      year: 2017,
      isbn: "978-8448022990",
      description:
        "Con más de treinta años de experiencia impartiendo Lengua y Literatura en secundaria, el autor recopila en Anécdotas de un profesor de secundaria las peripecias más insólitas, divertidas y disparatadas vividas en las aulas, subrayando que cada jornada es una incógnita donde nunca se sabe qué \"mujer\" (o toro) habrá que torear al cruzar la puerta del instituto. Lejos de ser una rutina burocrática, la obra retrata la docencia como una proeza cotidiana que consiste en sobrevivir y tratar de domar a treinta adolescentes desatados por la hormonas, convirtiendo lo que para otros sería \"otro día en la oficina\" en una aventura llena de imprevistos y lecciones de supervivencia."
    },
    {
      id: "en_casa_me_lo_sabia_manual_examenes",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0031.jpg",
      title: "¡En casa me lo sabía!: Manual (gamberro) para sobrevivir a los exámenes",
      authors: "Nando López",
      year: 2021,
      isbn: "978-8427048614",
      description:
        "Dirigido a alumnos, profesores y padres que ven las épocas de exámenes como una pesadilla, este libro recopila las situaciones absurdas y grotescas que ocurren tanto en los institutos como en los hogares durante los periodos de evaluación. Aunque la intención inicial era erradicar el terror asociado a verbos como \"hacer\", \"suspender\" o \"corregir\" exámenes y facilitar el aprobado y la corrección a los padres, los autores admiten con humor que no lo han logrado; en su lugar, ofrecen una obra que, sin ayudar académicamente, busca provocar risas compartidas ante el caos universal de los estudios, invitando a cualquiera que nunca haya pedido \"la media\" o olvidado firmar un examen a que tire la primera tiza."
    },
    {
      id: "dilo_en_voz_alta_manual_supervivencia_secundaria",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0032.jpg",
      title: "Dilo en voz alta y nos reímos todos: Manual (gamberro) de supervivencia en secundaria",
      authors: "Nando López",
      year: 2016,
      isbn: "978-8427042926",
      description:
        "Este libro recopila las mil y una anécdotas del cotidiano caótico de un instituto español, contrastando la realidad imperfecta y humana con la utopía finlandesa donde todo sería perfecto. En nuestras aulas conviven alumnos distópicos que confunden universos paralelos con notas reales, profesores que deben ejercer simultáneamente de psicólogos, enfermeros y animadores, y padres que reviven la ESO con sus hijos sin comprender por qué suspenden tras estudiar juntos. Dirigido a estudiantes que odian justificar respuestas, docentes agotados por el corrector rojo y padres que dudan del fin de la adolescencia, la obra celebra la humanidad de la educación y mantiene la esperanza, junto a su autor, de que incluso una simple tiza pueda cambiar el mundo."
    },
    {
      id: "nativos_digitales_no_existen_educar_mundo_digital",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0033.jpg",
      title: "Los nativos digitales no existen: Cómo educar a tus hijos para un mundo digital",
      authors: "Susana Lluna Beltrán (Autor), Javier Pedreira García (Wicho) (Autor)",
      year: 2017,
      isbn: "978-8423427123",
      description:
        "El término «nativo digital» es un error común que asume que nacer con tecnología garantiza su dominio, cuando en realidad muchos jóvenes solo usan aplicaciones de ocio y carecen de habilidades profundas, convirtiéndose en «huérfanos digitales» con una grave falta de formación. No es lógico esperar que aprovechen el potencial de la tecnología de forma instintiva sin la guía de familias y planes educativos, ya que actualmente solo sobreviven en el entorno digital sin comprenderlo realmente.\n\nEste libro, elaborado por expertos, ofrece una visión alternativa y herramientas esenciales para que padres, políticos y educadores puedan ayudar a estos jóvenes a desarrollar competencias reales. Además, al adquirir la obra se contribuye al proyecto Mak3rs de Ayuda en Acción, destinando todos los beneficios a enseñar tecnología a jóvenes en riesgo de pobreza y exclusión social."
    },
    {
      id: "como_dar_clase_los_que_no_quieren",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0034.jpg",
      title: "Cómo dar clase a los que no quieren",
      authors: "Juan Vaello Orts",
      year: 2011,
      isbn: "978-8499800387",
      description:
        "El verdadero arte de enseñar no radica en la transmisión de contenidos, sino en la capacidad de inspirar entusiasmo, sobre todo en aquellos estudiantes que carecen de motivación. El desafío central de la educación obligatoria consiste en integrar a estos alumnos en la dinámica del aula o, al menos, lograr que no impidan el aprendizaje de quienes sí desean estudiar. Esto exige generar un clima favorable tanto en el aula como en el centro educativo, creando deliberadamente las condiciones necesarias, pues no surgen de forma espontánea.\n\nLas propuestas del libro se fundamentan en la idea de que convivencia y aprendizaje son dos caras de una misma moneda: la formación integral del estudiante. Esta visión abarca tanto el desarrollo de capacidades cognitivas, tradicionalmente asociadas al rendimiento académico, como las competencias socioemocionales, que aunque frecuentemente elogiadas en teoría, suelen quedar relegadas en la práctica diaria"
    },
    {
      id: "docentes_vs_adolescentes_conflictos_aula",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0035.jpg",
      title: "Docentes vs. adolescentes: ¿Cómo resolver los conflictos del aula?",
      authors: "Jonatan Sánchez Martín",
      year: 2019,
      isbn: "979-8873834570",
      description:
        "Al cerrar la puerta del aula, el docente se enfrenta a un grupo de treinta o más adolescentes en una situación para la que la formación universitaria, por extensa que haya sido, no le ha preparado: nadie le ha instruido sobre cómo gestionar las faltas de respeto de un estudiante. Esta obra surge como un recurso expositivo dirigido a profesionales con vocación educativa que buscan orientación práctica ante estos desafíos. El texto compila las lecciones y estrategias que el autor habría valorado conocer antes de iniciar su primer año de docencia, ofreciendo así un puente entre la teoría académica y la realidad inmediata del aula."
    },
    {
      id: "buenas_soy_emilio_calatayud_voy_a_hablarles",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0036.jpg",
      title: "Buenas, soy Emilio Calatayud y voy a hablarles de...",
      authors: "Emilio Calatayud",
      year: 2014,
      isbn: "978-8415678731",
      description:
        "Emilio Calatayud, juez de menores de Granada con tres décadas de experiencia, recopila en esta obra su trayectoria dedicada a un colectivo vulnerable que enfrenta retos en un mundo en constante cambio. Con un enfoque pedagógico, el autor explora el universo de los menores, analizando tanto los riesgos tradicionales como los emergentes derivados de la globalización, las nuevas tecnologías y la crisis de valores. A través de ejemplos reales, disecciona la actuación del sistema judicial español para la reinserción social y advierte sobre el incremento alarmante de nuevas conductas delictivas.\n\nLa obra trasciende el ámbito jurídico para ofrecer pautas de transformación social desde lo legislativo, familiar y educativo, con el objetivo de construir un futuro más seguro. Está dirigida tanto a padres que buscan proteger y educar a sus hijos en un entorno complejo, como a los responsables políticos encargados de garantizar que la educación permanezca como el pilar del progreso. En definitiva, se presenta como una herramienta esencial para la acción colectiva necesaria para preservar el bienestar de las nuevas generaciones."
    },
    {
      id: "como_aprende_cerebro_claves_educacion",
      addedAt: "2026-05-01",
      themes: ["Educación", "Pensamiento"],
      cover: "./books/0037.jpg",
      title: "Cómo aprende el cerebro: Las claves para la educación",
      authors: "Sarah-Jayne Blakemore (Autor), Uta Frith (Autor), Joan Soler Chic (Traductor)",
      year: 2011,
      isbn: "978-8434413139",
      description:
        "Dado que el cerebro, al igual que el resto de los órganos, se desarrolla en paralelo al crecimiento físico, surge la interrogante crucial sobre qué contenidos y en qué momento es idóneo enseñar para garantizar un aprendizaje óptimo. Este libro aborda dicha cuestión investigando áreas fundamentales como el lenguaje, las matemáticas, la música, las artes, la gestión emocional y la sociabilidad, al tiempo que examina disfunciones como la dislexia y evalúa la eficacia real de tendencias pedagógicas actuales, incluido el aprendizaje temprano.\n\nBasándose en los hallazgos más recientes de la neurociencia aplicada a la educación, la obra analiza las estrategias más efectivas para potenciar la memoria y el desarrollo integral de conocimientos y emociones en niños y adolescentes. Se presenta como un estudio vanguardista y un viaje fascinante por la mente joven, constituyendo una lectura indispensable para padres, educadores, psicólogos y cualquier persona interesada en desbloquear las máximas potencialidades del cerebro."
    },
    {
      id: "programacion_neurolinguistica_pnl",
      addedAt: "2026-05-01",
      themes: ["Educación", "Pensamiento"],
      cover: "./books/0038.jpg",
      title: "Programacion Neurolinguistica (PNL)",
      authors: "Amanda Vickers (Autor), Steve Bavister (Autor)",
      year: 2022,
      isbn: "978-8419341471",
      description:
        "Esta obra ofrece una puerta de entrada directa a la comprensión de la Programación Neurolingüística (PNL), reconocida como una de las metodologías más potentes de psicología aplicada disponibles en la actualidad. Su propósito es facilitar la puesta en práctica de ideas y técnicas útiles tanto en la esfera personal como en la profesional. Mediante el dominio de la PNL, se busca incrementar la eficacia individual, mejorar la conexión interpersonal y proporcionar las herramientas necesarias para materializar los sueños propios.\n\nEn términos sencillos, la PNL puede definirse como una forma de psicología aplicada que, aunque abarca más dimensiones, se utiliza principalmente como un medio para obtener mayores resultados y alcanzar una mayor sensación de plenitud en la vida cotidiana y laboral. Es, en definitiva, un sistema diseñado para conseguir más en la vida y sentirse más realizado."
    },
    {
      id: "leyes_fundamentales_estupidez_humana",
      addedAt: "2026-05-01",
      themes: ["Pensamiento"],
      cover: "./books/0039.jpg",
      title: "Las leyes fundamentales de la estupidez humana",
      authors: "Carlo M. Cipolla (Autor), María Pons (Traductor)",
      year: 2013,
      isbn: "978-8498925814",
      description:
        "Carlo M. Cipolla, uno de los historiadores más destacados del siglo XX, afirma que la humanidad se encuentra en un estado lamentable, una premisa que goza de consenso general. Según el autor, esta situación se debe principalmente a la proliferación de los estúpidos, la categoría más peligrosa de seres humanos, omnipresentes y dispuestos a infligir daños tanto a los demás como a sí mismos.\n\nLo que comenzó como una sátira humorística sobre el fraude científico en Allegro ma non troppo, terminó revelándose como una reflexión lúcida sobre los perjuicios causados por el poder político, económico o burocrático cuando cae en manos incompetentes. Lejos de ser una simple parodia de análisis sociológicos, el texto ha cobrado una inquietante vigencia en la actualidad, donde las víctimas de la estupidez en políticas como la austeridad encuentran en las leyes de Cipolla un espejo perturbadoramente preciso."
    },
    {
      id: "big_data_educacion_futuro_digital_aprendizaje",
      addedAt: "2026-05-01",
      themes: ["Blockchain & Big Data", "Educación"],
      cover: "./books/0040.jpg",
      title: "Big Data en Educación: El futuro digital del aprendizaje, la política y la práctica",
      authors: "Ben Williamson (Autor), Roc Filella Escolà (Traductor)",
      year: 2018,
      isbn: "978-8471128904",
      description:
        "Los macrodatos y la inteligencia de datos tienen el poder de transformar la educación, permitiendo diseñar políticas y herramientas innovadoras basadas en análisis en tiempo real y predicciones. Este libro explora el imaginario de poder que motiva a los desarrolladores de aplicaciones educativas, destacando la supuesta objetividad de los algoritmos y la capacidad de moldear la enseñanza mediante intervenciones tecnológicas.\n\nSin embargo, la obra advierte que se requieren nuevas alfabetizaciones para garantizar un uso ético de los datos, especialmente ante la tendencia de extraer información íntima del alumnado. Big Data en Educación ofrece una introducción crítica a estos desarrollos, abordando el rol de los datos, el código y las aulas cognitivas, constituyendo una lectura esencial para profesionales del contexto educativo actual."
    },
    {
      id: "cuanto_pesan_nubes_preguntas_respuestas_cientificas",
      addedAt: "2026-05-01",
      themes: ["Ciencia", "Matemáticas", "Tecnología"],
      cover: "./books/0041.jpg",
      title: "¿Cuánto pesan las nubes?: Y otras sencillas preguntas y sus respuestas científicas",
      authors: "David Calle",
      year: 2018,
      isbn: "978-8401020889",
      description:
        "Esta obra presenta la visión científica de un reconocido divulgador y finalista del Global Teacher Prize, cuyo canal de YouTube ha inspirado a millones de estudiantes. El texto se estructura como un compendio de curiosidades y paradojas que desafían la intuición común, abordando interrogantes tan diversos como la longevidad comparada, la física de objetos ficticios o las limitaciones temporales del viaje en el tiempo. A través de estas preguntas, la narrativa invita a cuestionar las certezas establecidas y a explorar los límites del conocimiento humano.\n\nEl contenido reflexiona sobre la naturaleza efímera del tiempo y la certeza del cambio, citando a Heráclito para subrayar que la única constante en el universo es la transformación continua. Se destaca la evolución imparable de la ciencia, señalando que muchas verdades actuales podrían quedar obsoletas en el futuro. En consecuencia, el libro se propone no como un dogma definitivo, sino como una herramienta de inspiración que fomenta la búsqueda autónoma de respuestas basadas en el método científico, alejándose de explicaciones mitológicas para promover el pensamiento crítico y la construcción de proyectos personales."
    },
    {
      id: "escuelas_creativas_revolucion_educacion",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0042.jpg",
      title: "Escuelas creativas: La revolución que está transformando la educación",
      authors: "Sir Ken Robinson",
      year: 2016,
      isbn: "978-8466335041",
      description:
        "En Escuelas creativas, Ken Robinson amplía su famosa charla TED para proponer la transformación de un sistema educativo obsoleto, heredado de la Revolución Industrial y marcado por la estandarización. Frente a este modelo, el autor ofrece soluciones prácticas centradas en una educación personalizada que aproveche la tecnología y fomente la participación estudiantil. El objetivo es eliminar el miedo al error, desarrollar la creatividad y preparar a los alumnos para los retos futuros.\n\nIntegrando anécdotas, casos e investigaciones de expertos, la obra invita a cuestionar ideas preconcebidas sobre la enseñanza. Robinson busca replantear el verdadero sentido de la educación en el siglo XXI, ofreciendo una guía para construir un entorno donde la creatividad y la pasión por aprender sean el motor del desarrollo."
    },
    {
      id: "pequeno_libro_grandes_preguntas_management",
      addedAt: "2026-05-01",
      themes: ["Gestión & Producción"],
      cover: "./books/0044.jpg",
      title: "El pequeño libro de las grandes preguntas del management",
      authors: "James McGrath (Autor), Mar Vidal Aparicio (Traductor)",
      year: 2015,
      isbn: "978-8416253104",
      description:
        "El pequeño libro de las grandes preguntas del management recopila las 76 interrogantes más frecuentes que enfrentan los directivos diariamente, desde la motivación de equipos hasta la planificación estratégica, ofreciendo una guía práctica para resolverlos con eficacia. Cada cuestión se presenta con su contexto y soluciones concisas de expertos diseñadas para una implementación inmediata, funcionando como una herramienta esencial que permite a los líderes gestionar retos complejos, optimizar el rendimiento de sus equipos y asumir sus responsabilidades con mayor seguridad y control."
    },
    {
      id: "crear_hoy_escuela_manana_educacion_futuro_hijos",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0043.jpg",
      title: "Crear hoy la escuela de mañana. La educación y el futuro de nuestros hijos",
      authors: "Richard Gerver",
      year: 2012,
      isbn: "978-8467556537",
      description:
        "Richard Gerver expone las fuerzas que configuran la educación en el siglo XXI, ilustrando su teoría con el caso real de la transformación de la Escuela Primaria Grange en Inglaterra. Bajo su liderazgo, el centro pasó del abandono y la desesperanza al éxito local y el reconocimiento internacional, demostrando la viabilidad de la personalización del aprendizaje.\n\nLa obra enfatiza que no existe un modelo único aplicable a todas las realidades, ya que cada escuela y cada niño son únicos. Por tanto, el desafío para los educadores no es replicar fórmulas, sino adaptar creativamente estos principios a sus propias comunidades para fomentar el desarrollo individual y el éxito educativo."
    },
    {
      id: "aprendizaje_emocionante_neurociencia_aula",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0045.jpg",
      title: "Aprendizaje emocionante: Neurociencia para el aula",
      authors: "Begoña Ibarrola",
      year: 2013,
      isbn: "978-8467562934",
      description:
        "Esta obra busca acercar al docente los descubrimientos más relevantes de la neurociencia de forma sencilla y práctica, con el objetivo de que comprenda el cerebro como el órgano fundamental del aprendizaje. Aprovechando los avances tecnológicos de la última década, que permiten observar cómo el cerebro procesa la información, el texto invita a revisar y transformar las estrategias pedagógicas tradicionales, abandonando aquellas ineficaces o emocionalmente dañinas para adoptar prácticas alineadas con la biología del aprendizaje. Se pone especial énfasis en la influencia crucial de las emociones sobre la atención, la memoria y la motivación, demostrando que conocer y gestionar los estados afectivos propios y los de los alumnos es esencial para optimizar el rendimiento, fomentar la automotivación y garantizar un aprendizaje significativo y duradero."
    },
    {
      id: "aprendizaje_basado_en_el_pensamiento_competencias_siglo_xxi",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0046.jpg",
      title: "El aprendizaje basado en el pensamiento: Cómo desarrollar en los alumnos las competencias del siglo XXI",
      authors:
        "Rebecca Reagan (Autor), Robert J. Swartz (Autor), Bena Kallick (Autor), Arthur L. Costa (Autor), Barry K. Beyer (Autor)",
      year: 2013,
      isbn: "978-8467556124",
      description:
        "Aprendizaje basado en el pensamiento es una guía didáctica que enseña a los docentes a integrar el desarrollo de destrezas cognitivas en la enseñanza de cualquier materia, demostrando que dedicar tiempo a estas habilidades mejora radicalmente el rendimiento mental de los alumnos dentro y fuera del aula. La obra explora conceptos clave como el pensamiento eficaz, los hábitos mentales, la metacognición y la transferencia del aprendizaje, explicando cómo cultivar no solo las destrezas, sino también las actitudes necesarias para un razonamiento consciente. Lejos de ser un texto teórico árido, el libro ilustra cada concepto y ejercicio con relatos reales de aulas y experiencias docentes, ofreciendo una visión práctica y concreta de cómo enseñar a los estudiantes a fundamentar conclusiones, generar ideas creativas y comunicarse con claridad en el mundo real."
    },
    {
      id: "dale_la_vuelta_a_tu_clase",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0047.jpg",
      title: "Dale la vuelta a tu clase",
      authors: "Jonathan Bergmann (Autor), Aaron Sams (Autor)",
      year: 2014,
      isbn: "978-8467561180",
      description:
        "La metodología de la \"clase al revés\" surge como respuesta a la necesidad de personalizar la educación y garantizar el aprendizaje de cada estudiante, invirtiendo el modelo tradicional: los alumnos acceden a las explicaciones teóricas en casa a su propio ritmo, liberando el tiempo presencial para la resolución de dudas, el debate, el trabajo colaborativo y la atención individualizada. Este enfoque transforma el rol del docente de mero transmisor de información a facilitador que enseña a los estudiantes a aprender por sí mismos, fomentando una participación activa y adaptando la enseñanza a las necesidades y estilos particulares de cada alumno."
    },
    {
      id: "inteligencia_artificial_docentes_uso_pedagogico_etico",
      addedAt: "2026-05-01",
      themes: ["Educación", "IA & IoT"],
      cover: "./books/0048.jpg",
      title: "InteligencIA artificiIAl para docentes: Cómo fomentar su uso pedagógico y ético",
      authors: "Jonathan Bergmann (Autor), Aaron Sams (Autor)",
      year: 2025,
      isbn: "978-8410552593",
      description:
        "Esta obra invita a los educadores a reflexionar sobre su rol de liderazgo en la era de la inteligencia artificial, ofreciendo evidencia, marcos conceptuales y herramientas prácticas para aprovechar sus beneficios mientras se mitigan sus riesgos. Su propósito es guiar al docente en la toma de decisiones éticas e informadas sobre la integración de la IA, transformándolo en un arquitecto de experiencias educativas capaces de diseñar entornos que promuevan el pensamiento crítico, la creatividad auténtica y el desarrollo integral de la persona."
    },
    {
      id: "ingenieria_increible_35_proyectos_casa",
      addedAt: "2026-05-01",
      themes: ["Infantil & Juvenil", "Ciencia", "Tecnología"],
      cover: "./books/0049.jpg",
      title: "Ingeniería increíble: 35 proyectos alucinantes para hacer en casa",
      authors: "Rob Beattie (Autor), Sam Peet (Ilustrador), Alejandro Tobar Salazar (Traductor)",
      year: 2020,
      isbn: "978-8414025314",
      description:
        "¡Prepárate para sorprenderte con 35 proyectos que incluyen desde un robot bailarín y un submarino artesanal hasta un altavoz para tu móvil! Este libro es una invitación a explorar la ingeniería estructural, mecánica y eléctrica mediante la experimentación casera. Te desafía a manipular objetos cotidianos, transformándolos y dotándolos de funciones nuevas e increíbles."
    },
    {
      id: "ciencia_asombrosa_70_experimentos_casa",
      addedAt: "2026-05-01",
      themes: ["Infantil & Juvenil", "Ciencia", "Tecnología"],
      cover: "./books/0050.jpg",
      title: "Ciencia asombrosa: 70 experimentos alucinantes para hacer en casa",
      authors: "Rob Beattie (Autor), Sam Peet (Ilustrador), Alejandro Tobar Salazar (Traductor)",
      year: 2018,
      isbn: "978-8414017142",
      description:
        "Transforma tu hogar en un laboratorio experimental capaz de producir helados con sal, fabricar proyectores para móviles o recrear icónicas lámparas de lava de los años setenta. Esta colección de hasta 70 entretenidos experimentos revela los secretos fundamentales de la física, la química y la biología, ofreciendo instrucciones paso a paso de gran claridad visual diseñadas específicamente para guiar a los jóvenes científicos en su descubrimiento."
    },
    {
      id: "stem_lab_25_super_cool_projects",
      addedAt: "2026-05-01",
      themes: ["Infantil & Juvenil", "Ciencia", "Tecnología"],
      cover: "./books/0051.jpg",
      title: "STEM Lab: 25 Super-cool Projects: Build, Invent, Create, Discover",
      authors: "Jack Challoner (Autor), Smithsonian Institution (Colaborador)",
      year: 2019,
      isbn: "978-1465475619",
      description:
        "STEM Lab inspires curious young minds with 25 exciting activities ranging from wind-up cars to homemade guitars. This beautifully illustrated guide explores how science, technology, engineering, and math shape our world through easy-to-follow experiments.\n\nBalancing education with fun, each activity explains the underlying science and includes \"Test and Tweak\" notes that encourage readers to refine their projects. This approach deepens understanding while promoting critical thinking and creativity in young learners."
    },
    {
      id: "ayuda_hijos_tecnicas_estudio",
      addedAt: "2026-05-01",
      themes: ["Educación"],
      cover: "./books/0052.jpg",
      title: "Ayuda a tus hijos con las técnicas de estudio",
      authors: "DK (Autor)",
      year: 2016,
      isbn: "978-0241281802",
      description:
        "Esta guía visual ofrece pautas sencillas y accesibles para transformar los deberes en una experiencia sin conflictos, fomentando el desarrollo de habilidades esenciales para el crecimiento diario. Diseñada para reducir el estrés asociado al estudio, la obra ayuda a los estudiantes a aprovechar al máximo su etapa escolar, potenciando su confianza, la retención de conocimientos y la memorización. Además, proporciona estrategias prácticas para establecer rutinas sólidas, optimizando así los horarios y consolidando hábitos de estudio efectivos."
    },
    {
      id: "computer_engineering_for_babies",
      addedAt: "2026-05-01",
      themes: ["Programación y Robótica"],
      cover: "./books/0054.jpg",
      title: "Computer Engineering for Babies",
      authors: "Chase Roberts",
      year: 2022,
      isbn: "978-1735208701",
      description:
        "With two buttons and an LED, the book explores six basic computer logic gates, including WIRE, NOT, OR, AND, XOR and a LATCH.\n\nThe book uses light sensors to detect which page is open and change the operands accordingly."
    },
    {
      id: "computer_engineering_for_big_babies",
      addedAt: "2026-05-01",
      themes: ["Programación y Robótica"],
      cover: "./books/0053.jpg",
      title: "Computer Engineering for Big Babies",
      authors: "Chase Roberts",
      year: 2024,
      isbn: "978-1735208749",
      description:
        "CE for Big Babies is the sequel to the original guide, a concise six-page continuation of formal education designed to prepare children and adults for the anticipated dominance of General AI. Building on the first book, it introduces core digital electronics concepts such as D-Latches, Shift Registers, Multiplexers, Decoders, and Addressable Memory. This edition upgrades the interactive experience by replacing standard buttons with large, satisfying switches and quintupling the number of LEDs to maximize visual engagement and learning."
    },
    {
      id: "planos_ingenieria_libro_colorear_nino",
      addedAt: "2026-05-01",
      themes: ["Infantil & Juvenil", "Tecnología"],
      cover: "./books/0055.jpg",
      title: "Planos de ingeniería. Libro para colorear para niños",
      authors: "Nick Snels",
      year: 2020,
      isbn: "979-8648218970",
      description:
        "Este libro para colorear está diseñado para inspirar a los futuros ingenieros, ofreciendo 40 páginas con planos detallados de diversas máquinas como aviones, helicópteros, excavadoras, camiones mineros, drones y submarinos. Impreso en papel de una sola cara para evitar manchas, el volumen permite a los niños crear obras maestras personalizadas mientras desarrollan habilidades esenciales como la concentración, la coordinación óculo-manual, la paciencia y la confianza. Más allá de ser una actividad lúdica individual o social, esta herramienta educativa reduce el estrés y fomenta la creatividad, constituyendo un regalo ideal para estimular el interés técnico y artístico de los pequeños."
    },
    {
      id: "nikola_tesla_novela_grafica",
      addedAt: "2026-05-01",
      themes: ["Biografías", "Tecnología"],
      cover: "./books/0056.jpg",
      title: "Nikola Tesla: La novela gráfica",
      authors: "Joseba Mikel Diaz de Corcuera",
      year: 2025,
      isbn: "979-8285874881",
      description:
        "Nikola Tesla: ciencia, visión y silencio es una novela gráfica que sumerge al lector en la mente de un genio capaz de percibir la energía invisible del universo y materializarla en máquinas imposibles. Mediante un rigor histórico y una narrativa visual inmersiva, la obra recorre su vida desde Smiljan hasta Nueva York, explorando sus laboratorios, inventos revolucionarios como la Torre Wardenclyffe y sus complejas relaciones con figuras como Edison y Mark Twain.\n\nMás allá de su faceta técnica, el libro retrata a un visionario sensible y aislado, obsesionado con la armonía cósmica, cuyos documentos aún guardan secretos que podrían redefinir la ciencia moderna. Esta experiencia no solo detalla sus adelantos tecnológicos, sino que profundiza en su percepción única de la realidad, invitando a comprender cómo su mente sintonizada con la \"música del universo\" sigue inspirando el futuro de la humanidad."
    },
    {
      id: "printing_projects_3d_dk",
      addedAt: "2026-05-01",
      themes: ["Diseño e Impresión 3D"],
      cover: "./books/0057.jpg",
      title: "3D Printing Projects",
      authors: "DK (Autor)",
      year: 2017,
      isbn: "978-1465464767",
      description:
        "3D Printing Projects serves as a comprehensive step-by-step guide for children and beginners to master 3D design and printing, even without owning a physical printer. The book introduces the mechanics of various 3D printers, essential terminology, file preparation, and scanning techniques, while also addressing common troubleshooting issues. All included projects utilize free online CAD software and are categorized by difficulty, print time, and material requirements, offering detailed instructions that cover the entire workflow from digital modeling and slicing to printing and finishing. From simple desk organizers to intricate castles, this resource empowers young creators to build custom items like shark-shaped phone stands and lamps, while providing inspiration to expand their skills beyond the basics."
    },
    {
      id: "tinkercad_for_dummies",
      addedAt: "2026-05-01",
      themes: ["Diseño 3D"],
      cover: "./books/0058.jpg",
      title: "Tinkercad For Dummies",
      authors: "Shaun C. Bryant",
      year: 2018,
      isbn: "978-1119464419",
      description:
        "If you can dream it, you can create it using Tinkercad, a free tool that empowers users of all experience levels to design 3D models. Tinkercad For Dummies provides the essential knowledge to plan designs, utilize drag-and-drop tools, and export files for printing or external use. Suitable for everyone from children to adults creating complex prototypes, the platform is simple yet robust, supported by a community of over 4 million shared designs and widely adopted by teachers. This hands-on guide streamlines the process, teaching you to set up an account, master design principles, and start crafting custom 3D creations immediately, making it a fun and accessible resource for all ages."
    },
    {
      id: "the_3d_printing_handbook_technologies_design_applications",
      addedAt: "2026-05-01",
      themes: ["Diseño 3D"],
      cover: "./books/0059.jpg",
      title: "The 3D Printing Handbook: Technologies, design and applications",
      authors: "Ben Redwood (Autor), Filemon Schöffer (Autor), Brian Garret (Autor)",
      year: 2017,
      isbn: "978-9082748505",
      description:
        "The 3D Printing Handbook is the essential guide for mastering the core aspects of additive manufacturing, offering practical advice on selecting the optimal technology and designing specifically for 3D printing. Drawing on firsthand experience from industry leaders, this book delves into the mechanisms behind major printing technologies, analyzing their respective benefits and limitations. It equips readers with decision-making tools for technology selection, actionable design guidelines, and real-world case studies from top global brands, ensuring a comprehensive understanding of the field."
    },
    {
      id: "aprender_arduino_100_ejercicios_practicos",
      addedAt: "2026-05-01",
      themes: ["Programación y Robótica"],
      cover: "./books/0060.jpg",
      title: "Aprender Arduino, Electrónica y Programación con 100 Ejercicios Prácticos",
      authors: "Rubén Beiroa Mosquera",
      year: 2018,
      isbn: "978-8426726483",
      description:
        "Esta guía integra la programación y la electrónica, dos pilares complejos de la ingeniería, para transformar ideas en proyectos innovadores y comprender la tecnología que nos rodea. Utilizando Arduino como plataforma central, el libro ofrece un aprendizaje progresivo a través de 100 ejercicios prácticos que abarcan desde el análisis y comparación de hardware hasta el dominio de las leyes básicas de la electrónica y el análisis de circuitos. Además, profundiza en el lenguaje de programación para lograr eficiencia, explica el funcionamiento de circuitos integrados básicos y propone casos reales que permiten al lector construir sus propios dispositivos. Al finalizar, el usuario habrá consolidado una base sólida en Arduino, preparándose para adentrarse con éxito en campos avanzados como el Internet de las Cosas (IoT) y la robótica."
    },
    {
      id: "aprender_arduino_prototipado_programacion_avanzada_100_ejercicios",
      addedAt: "2026-05-01",
      themes: ["Programación y Robótica"],
      cover: "./books/0061.jpg",
      title: "Aprender Arduino, prototipado y programación avanzada con 100 ejercicios",
      authors: "Rubén Beiroa Mosquera",
      year: 2019,
      isbn: "978-8426727404",
      description:
        "Realizar proyectos complejos con Arduino (interrupciones, filtros, prototipado) puede ser un reto, pero si quieres dominar su electrónica, hardware y programación, este libro es para ti. Con 100 ejercicios prácticos aprenderás sobre los distintos tipos de comunicación, diseñar tu propia PCB, el uso de condensadores, recursos de programadores profesionales, mejora de prestaciones con módulos y la creación de interfaces de control con Processing. Además, en la primera página del libro encontrarás un código de acceso para descargar gratuitamente los contenidos adicionales en marcombo.info."
    },
    {
      id: "arduino_para_principiantes",
      addedAt: "2026-05-01",
      themes: ["Programación y Robótica"],
      cover: "./books/0062.jpg",
      title: "Arduino para principiantes",
      authors: "Erik Schernich",
      year: 2019,
      isbn: "978-8426727244",
      description:
        "Si quieres adentrarte en Arduino, tanto si tienes 12 años como si eres adulto, con este libro adquirirás todos los conocimientos necesarios. En esta nueva edición ampliada aprenderás paso a paso a programar mediante bloques o código múltiples proyectos divertidos sobre luces, sensores, motores, sonidos, pantallas, conexión online y multímetros. El libro incluye recomendaciones para evitar errores, consejos para desarrollar tus propias ideas, preguntas y tareas por capítulo, y contenidos adicionales descargables. No dejes escapar la oportunidad de iniciarte en Arduino y realizar tus proyectos."
    },
    {
      id: "iniciacion_arduino_uno",
      addedAt: "2026-05-01",
      themes: ["Programación y Robótica"],
      cover: "./books/0063.jpg",
      title: "Iniciación a Arduino UNO",
      authors: "Miguel Pareja Aparicio",
      year: 2017,
      isbn: "978-8426725547",
      description:
        "Este libro incluye las nociones básicas necesarias para empezar a trabajar con Arduino, particularizando cada diseño en la placa Arduino UNO por ser la más utilizada y servir de referencia para las demás. Solo se requieren conocimientos a nivel usuario y seguir la estructura secuencial de los capítulos para, al finalizar, poder disponer de unos conocimientos básicos y realizar diseños propios. Sus contenidos abarcan desde la presentación de Arduino y el software necesario hasta el manejo de entradas y salidas digitales, salidas PWM, entradas analógicas y la ampliación de entradas y salidas digitales para conectar más sensores. Se trata de un libro eminentemente práctico, con un lenguaje poco técnico, que incluye 19 ejercicios resueltos con descripción, código y esquemas de conexionado, además de ejercicios propuestos al final de cada capítulo para comprobar los conceptos vistos."
    },
    {
      id: "aprende_electronica_con_arduino",
      addedAt: "2026-05-01",
      themes: ["Programación y Robótica", "Electrónica"],
      cover: "./books/0064.jpg",
      title: "Aprende electrónica con Arduino",
      authors: "Jody Culkin (Autor), Eric Hagan (Autor)",
      year: 2018,
      isbn: "978-8426726599",
      description:
        "Si no tienes conocimientos de electrónica pero estás dispuesto a adquirirlos, este libro es para ti: con ilustraciones a todo color y sin necesidad de soldador, aprenderás a montar circuitos en una placa de pruebas. A través de proyectos prácticos podrás usar un multímetro, leer esquemas, trabajar con entradas y salidas analógicas y digitales, comprender bucles y variables, y programar Arduino para responder a sensores. Las explicaciones sencillas sobre teoría eléctrica y los ejemplos de código descargables te ayudarán a entender el funcionamiento de los proyectos, para que trabajes a tu propio ritmo y consigas una base sólida en electrónica moderna y computación física."
    },
    {
      id: "arduino_trucos_secretos_120_ideas",
      addedAt: "2026-05-01",
      themes: ["Programación y Robótica"],
      cover: "./books/0065.jpg",
      title: "Arduino. Trucos y secretos.: 120 ideas para resolver cualquier problema",
      authors: "Paolo Aliverti",
      year: 2019,
      isbn: "978-8426727756",
      description:
        "Con Arduino puedes crear prototipos como termostatos, drones o robots, aunque requiere ciertas habilidades e intuición. Tras el éxito del Manual de Arduino, Paolo Aliverti ofrece más de 120 trucos en esta guía para que tanto principiantes como usuarios avanzados aprendan paso a paso nuevas técnicas y resuelvan problemas habituales. Entre los temas se incluyen programación, manejo de LED y botones, sensores (temperatura, humedad, RFID), actuadores, pantallas, sonidos, y comunicación por wifi, Bluetooth o SMS."
    },
    {
      id: "reparar_casi_cualquier_cosa",
      addedAt: "2026-05-02",
      themes: ["Electrónica", "Diseño e Impresión 3D"],
      cover: "./books/0066.jpg",
      title: "Reparar (casi) cualquier cosa",
      authors: "Paolo Aliverti",
      year: 2018,
      isbn: "978-8426726391",
      description:
        "Los objetos que nos rodean suelen diseñarse para estropearse cuando caduca la garantía, y el oficio de reparador ha desaparecido porque muchos creen que no vale la pena arreglar. Sin embargo, este libro nace para transmitir la pasión por reparar, un oficio difícil que a menudo recuerda al trabajo de los investigadores privados, demostrando que sí existen alternativas sostenibles y más interesantes que tirar lo que se rompe. Aunque los objetos se estropean con facilidad, las nuevas tecnologías electrónicas y de prototipos rápidos, junto con un enfoque racional, pueden ayudar a reparar casi cualquier cosa. Este manual presenta distintas técnicas de reparación basadas en la electrónica y la impresión 3D, con múltiples ejemplos prácticos, dibujos e imágenes para fabricar recambios a medida y devolver la vida a tus objetos."
    },
    {
      id: "electronica_trucos_y_secretos",
      addedAt: "2026-05-02",
      themes: ["Electrónica"],
      cover: "./books/0067.jpg",
      title: "Electrónica. Trucos y secretos",
      authors: "Paolo Aliverti",
      year: 2021,
      isbn: "978-8426732224",
      description:
        "Un maker es un artesano digital que utiliza nuevas herramientas para convertir ideas en proyectos concretos, y la colección Made For Makers reúne la experiencia de expertos para ayudar a otros en el redescubrimiento del placer de fabricar y reparar circuitos electrónicos. Tras el éxito de Electrónica para makers, Paolo Aliverti presenta sus trucos y secretos para aprender nuevas técnicas y resolver problemas comunes, aplicables tanto a la teoría como al desarrollo práctico de circuitos funcionales. Este manual es imprescindible para principiantes y usuarios avanzados, con explicaciones claras paso a paso y numerosas ilustraciones sobre nociones básicas (corriente, tensión, resistencia, impedancia, circuitos en continua y alterna), componentes pasivos (resistencias, condensadores, bobinas, motores, relés, altavoces, micrófonos), semiconductores (diodos, transistores bipolares, FET, MOSFET, TRIAC, SCR) y amplificadores operacionales (control de relés, trigger de Schmitt, osciladores de onda cuadrada y sinusoidal)."
    },
    {
      id: "electronica_para_makers_guia_completa",
      addedAt: "2026-05-02",
      themes: ["Electrónica"],
      cover: "./books/0068.jpg",
      title: "Electrónica para makers: Guía completa",
      authors: "Paolo Aliverti",
      year: 2017,
      isbn: "978-8426724496",
      description:
        "Un maker es un artesano digital que utiliza nuevas herramientas para transformar sus ideas en proyectos concretos, y este libro recoge la experiencia de makers expertos para ayudar a otros en el redescubrimiento del construir. El auge del movimiento maker, las impresoras 3D y Arduino han generado un nuevo interés por la electrónica, pero para realizar proyectos completos no basta con saber programar Arduino, sino que se necesitan también conocimientos de electrónica. Por ello, este libro propone ideas teóricas y prácticas para entender esta fascinante materia y desarrollar proyectos de forma autónoma, incluyendo secciones teóricas, experimentos, ejercicios y aplicaciones prácticas sobre componentes electrónicos (resistencias, LEDs, servomotores, micrófonos), construcción de circuitos con placas de pruebas y perforadas, diodos, transistores y circuitos integrados, trabajo con señales (filtros, moduladores, amplificadores), electrónica digital (generadores de reloj, biestables, convertidores), microcontroladores como los chips AVR y ATtiny85, y el paso del prototipo al producto mediante circuitos impresos, gEDA y Fritzing."
    },
    {
      id: "making_simple_robots_2e_kathy_ceceri",
      addedAt: "2026-05-02",
      themes: ["Programación y Robótica"],
      cover: "./books/0069.jpg",
      title: "Making Simple Robots, 2E: Easy Robotics Projects for Kids Using Everyday Stuff",
      authors: "Kathy Ceceri",
      year: 2022,
      isbn: "978-1680457308",
      description:
        "Making Simple Robots is based on the idea that anyone—kids, educators, parents, and non-engineers—can build a robot using simple skills like cutting, folding, and taping paper. Many of the models are inspired by real-life prototypes from research labs and companies, and you can learn to control them using free, beginner-friendly software such as MIT's Scratch and Microsoft MakeCode. Projects include making jumping origami frogs with light-up eyes, designing robot wheel-legs with Tinkercad for 3D printing, and sewing a cyborg rag doll with a blinking electronic eye. Each project includes step-by-step directions, illustrations, and photographs, along with insights into real research, shortcuts for easier builds, and suggestions for increasing the challenge as your skills improve."
    },
    {
      id: "taller_de_microbit",
      addedAt: "2026-05-02",
      themes: ["Programación y Robótica"],
      cover: "./books/0070.jpg",
      title: "Taller de Micro:bit",
      authors: "Gerardo Reino Bertoa",
      year: 2021,
      isbn: "979-8475260838",
      description:
        "Este libro reúne ejercicios con micro:bit, diseñados tanto para ayudar al profesorado en su labor docente como para facilitar el aprendizaje del alumnado. Con una presentación cuidada y una estructura organizada por temas, incluye explicaciones claras de cada tarea, sus objetivos y los retos planteados, de modo que el alumno se divierta mientras aprende y, a medida que avanza en los contenidos, la dificultad de los ejercicios aumenta progresivamente. Además, se incluyen descargas de juegos arcade, ejemplos de actividades complejas ya resueltas y otras curiosidades adicionales."
    },
    {
      id: "robotica_educativa_90_proyectos_steam_lego_spike",
      addedAt: "2026-05-02",
      themes: ["Programación y Robótica"],
      cover: "./books/0071.jpg",
      title: "Robótica Educativa. 90 Proyectos STEAM con LEGO SPIKE",
      authors: "Ernesto Martínez de Carvajal Hedrich",
      year: 2020,
      isbn: "978-8409188932",
      description:
        "Este libro presenta las características de LEGO SPIKE, sus sensores y actuadores, y su lenguaje de programación basado en Scratch3. Incluye 90 proyectos STEAM de robótica con estructuras sencillas y funcionales, de unos 20 minutos de duración cada uno, ideales para casa o el aula. Los proyectos utilizan motores, altavoz, luces LED y sensores como botón, contacto, color, ultrasonidos o giroscópico, además de dos sensores de otro fabricante. Cada proyecto indica su nivel de complejidad y tiempo necesario, facilitando la planificación docente. También incluye actividades para seguir aprendiendo y ejemplos como instrumentos, lector de códigos, vehículos, juegos o una impresora Braille. Es igualmente válido para LEGO Mindstorms 51515."
    },
    {
      id: "robotica_educativa_60_proyectos_steam_microbit_v2",
      addedAt: "2026-05-02",
      themes: ["Programación y Robótica"],
      cover: "./books/0072.jpg",
      title: "Robótica Educativa. 60 proyectos STEAM con micro:bit V2",
      authors: "Ernesto Martínez de Carvajal Hedrich",
      year: 2018,
      isbn: "978-8469789094",
      description:
        "Esta nueva edición, actualizada para la micro:bit V2 con 10 proyectos adicionales, consta de 284 páginas a todo color que cubren las características de la placa, sus complementos y el entorno Makecode a través de 60 proyectos STEAM. Los proyectos se organizan en cuatro niveles: usando solo la micro:bit V2, añadiendo uno o dos sensores Arduino, o empleando dos placas que se comunican entre sí. La programación se hace con Makecode, un entorno gratuito similar a Scratch. Los proyectos incluyen dispositivos funcionales como control de humedad, alarmas de gas o agua, y juegos como el frontón. El libro se ofrece también en pack con la placa, e incluye la descarga gratuita de los programas. Muchos proyectos son compatibles con la micro:bit V1, aunque algunos requieren un sensor de sonido o un zumbador adicional."
    },
    {
      id: "robotica_educativa_mbot_arduino",
      addedAt: "2026-05-02",
      themes: ["Programación y Robótica"],
      cover: "./books/0073.jpg",
      title: "Robótica Educativa con mBot y Arduino",
      authors: "Ernesto Martínez de Carvajal Hedrich",
      year: 2021,
      isbn: "978-8469749326",
      description:
        "En su séptima edición actualizada, este libro de 302 páginas a todo color incluye más de 60 proyectos STEAM con mBot, un robot compatible con Arduino que integra sensor de luz, infrarrojos, LEDs RGB y zumbador, además de conectores para sensores, actuadores y motores. La mitad de los proyectos usan el mBot estándar, y el resto añade una matriz de LEDs y un sensor de sonido. Se programa con mBlock5 (gratuito, basado en Scratch3) y Bitbloq (licencia de 8 euros). Los proyectos, de unos 20 minutos de duración, reproducen dispositivos reales e incluyen actividades educativas para aprender aritmética, colores o formas, así como juegos. El formato DIN A5 es ideal para el aula, e incluye un vale para descargar los programas en distintos formatos. El libro sirve tanto para mBot como para Explorer Kit."
    },
    {
      id: "50_proyectos_tecnologicos_robotica_impresion_3d",
      addedAt: "2026-05-02",
      themes: ["Programación y Robótica", "Diseño e Impresión 3D"],
      cover: "./books/0074.jpg",
      title: "50 Proyectos Tecnológicos - Robótica e Impresión 3D",
      authors: "Ernesto Martínez de Carvajal Hedrich",
      year: 2016,
      isbn: "978-8460890447",
      description:
        "Este libro permite desarrollar 50 proyectos tecnológicos enmarcados en la filosofía STEAM que combinan Arduino, robótica e impresión 3D, obteniendo réplicas funcionales de instrumentos y dispositivos cuyas estructuras pueden crearse con una impresora 3D o fabricarse manualmente con madera u otros materiales. Incluye un capítulo sobre los fundamentos de la impresión 3D y el proceso para obtener el modelo físico a partir de una idea inicial, utilizando herramientas gratuitas, sencillas e intuitivas, y el comprador puede solicitar sin coste adicional el código Arduino y los archivos STL de cada proyecto. Entre los proyectos se incluyen un pluviómetro funcional, un paso de cebra inteligente, un dedo robótico teleoperado, así como un apartado dedicado al robot Zowi para acceder a sus componentes, añadirle sensores y dotarle de nuevos sentidos como la vista o el equilibrio. El trabajo está enfocado a placas y componentes Arduino libres de protoboard (como BQ, ElecFreaks o Sparkfun), lo que evita soldaduras o resistencias adicionales, permitiendo al usuario centrarse en conectar, programar y disfrutar de la robótica."
    },
    {
      id: "robotica_educativa_75_proyectos_steam_mbot2_neo",
      addedAt: "2026-05-02",
      themes: ["Programación y Robótica", "Diseño e Impresión 3D"],
      cover: "./books/0075.jpg",
      title: "Robótica Educativa. 75 Proyectos STEAM con mBot2 - Neo",
      authors: "Ernesto Martínez de Carvajal Hedrich",
      year: 2023,
      isbn: "978-8409540174",
      description:
        "En este extenso libro se incluye 75 proyectos STEAM para el robot mBot2 (Neo) de Makeblock, detallando para cada uno el objetivo, esquema de funcionamiento, componentes, pseudocódigo, programa en mBlock5 y en Python. Los proyectos abarcan desde niveles sencillos hasta avanzados, como que mBot2 busque una plaza de aparcamiento y estacione solo. El robot se puede ampliar con sensores y actuadores mBuild, incluyendo una cámara con IA para seguir una pelota. Se programa con mBlock5 (basado en Scratch) o con Python. Se incluye un vale para solicitar gratuitamente los programas en ambos formatos tras el plazo de devolución. Para el mBot original, se recomienda el título \"Robótica Educativa con mBot y Arduino\" del mismo autor."
    },
    {
      id: "inteligencia_artificial_conquista_nueva_chatgpt_grok3",
      addedAt: "2026-05-02",
      themes: ["IA & IoT"],
      cover: "./books/0076.jpg",
      title: "Inteligencia Artificial. A la conquista de la nueva: De ChatGPT a Grok 3",
      authors: "Marisa Tormo Navarro",
      year: 2025,
      isbn: "978-8412782578",
      description:
        "Si tienes este libro entre manos, es porque la inteligencia artificial ya forma parte de tu vida diaria, ya sea mediante ChatGPT, Gemini o Grok 3, o porque deseas aprovechar esta revolución que es presente, no futuro. Escribir, diseñar o programar está al alcance de un clic, pero surgen preguntas sobre qué herramientas usar y cómo afectará la IA a nuestras tareas. Este libro es una guía práctica para comprender la IA, potenciar tu creatividad con ChatGPT, Copilot y Gemini, explorar plataformas como Grok 3 o DeepSeek, conocer su impacto en educación, salud y finanzas, y analizar dilemas éticos y de ciberseguridad. La cuestión no es si la IA transformará el mundo, sino cómo la integraremos de forma responsable. El momento de explorar sus posibilidades es ahora."
    },
    {
      id: "el_uso_del_movil_para_adultos",
      addedAt: "2026-05-02",
      themes: ["Educación", "Tecnología"],
      cover: "./books/0077.jpg",
      title: "El uso del móvil para adultos",
      authors: "Marisa Tormo Navarro",
      year: 2025,
      isbn: "978-8412782554",
      description:
        "¿Te gustaría sacar el máximo partido a tu móvil o tablet sin tener que pedir ayuda constantemente? Esta guía clara y sencilla te enseñará paso a paso, y a tu ritmo, todo lo que necesitas saber: desde hacer videollamadas y gestionar fotos hasta usar mapas, comprar online con seguridad y dominar redes sociales como WhatsApp, Telegram, Instagram, X, Bluesky y TikTok. Esta edición actualizada también te muestra cómo aprovechar la nube (Google Drive, OneDrive, Dropbox) y gestionar tu Certificado Digital para hacer trámites desde casa, además de mejorar tus videollamadas con Zoom, Skype y Teams. Como extra, incluye un capítulo dedicado a ChatGPT, tu nuevo asistente inteligente, porque la tecnología está para hacerte la vida más fácil y tú puedes aprender a dominarla."
    },
    {
      id: "a_la_conquista_mundo_digital",
      addedAt: "2026-05-02",
      themes: ["Tecnología"],
      cover: "./books/0078.jpg",
      title: "A la conquista del mundo digital",
      authors: "Marisa Tormo Navarro",
      year: 2023,
      isbn: "978-8412546743",
      description:
        "¿Crees que las nuevas tecnologías están fuera de tu alcance? Es un error garrafal, porque esta guía amigable, escrita con tono informal y ameno, te enseñará a dominar TikTok, Twitch, Discord, CapCut y BeReal, desmitificando la idea de que llegaste tarde para aprender y disfrutar de las redes sociales. Además, su capítulo estrella está dedicado a ChatGPT, demostrándote que sí se puede aprender y disfrutar al mismo tiempo con una inteligencia artificial. No importa tu edad, este libro está pensado para ti, revelándote los trucos y secretos de cada plataforma, desde la creación de vídeos virales hasta las transmisiones en vivo en Twitch, pasando por cómo unirte a comunidades en Discord o vivir experiencias auténticas con BeReal. Así que atrévete a desafiar tus creencias, conviértete en un experto digital y descubre todo lo que puedes lograr en un mundo digital vibrante lleno de infinitas posibilidades."
    },
    {
      id: "inteligencia_artificial_fundamentos_practica_aplicaciones",
      addedAt: "2026-05-02",
      themes: ["IA & IoT"],
      cover: "./books/0079.jpg",
      title: "Inteligencia Artificial. Fundamentos, práctica y aplicaciones",
      authors: "Alberto García Serrano",
      year: 2016,
      isbn: "978-8494465048",
      description:
        "Desde un punto de vista práctico y accesible, este libro condensa los fundamentos de la Inteligencia Artificial para quienes deseen iniciarse desde cero, presentando la teoría de cada técnica y algoritmo de forma comprensible y acompañada de ejemplos prácticos programados en Python (con una introducción a este lenguaje en el apéndice), lo que permite al lector comprender y aplicar los algoritmos en situaciones reales, escapando así de la literatura puramente teórica. Dirigido tanto a aficionados y curiosos como a estudiantes que busquen complementar sus estudios con una visión aplicada, el libro enseña a representar problemas para resolverlos con IA, usar algoritmos clásicos de búsqueda, aplicar técnicas heurísticas como algoritmos genéticos, desarrollar juegos inteligentes, comprender el razonamiento de sistemas expertos y la lógica difusa, así como crear redes neuronales y métodos probabilísticos capaces de aprender."
    },
    {
      id: "blockchain_tecnologias_proyectos_ciberseguridad",
      addedAt: "2026-05-02",
      themes: ["Blockchain & Big Data"],
      cover: "./books/0080.jpg",
      title: "Blockchain. Tecnologías, proyectos y ciberseguridad",
      authors: "José Manuel Ortega Candel",
      year: 2023,
      isbn: "978-8412546767",
      description:
        "Adéntrate en el fascinante mundo de la tecnología Blockchain con este libro, que explora sus aspectos técnicos fundamentales y los principales proyectos que están cambiando la manera en que las personas, gobiernos y organizaciones interactúan entre sí. Desde los conceptos básicos hasta su aplicación en sectores como las finanzas y las criptomonedas, se examinan los diferentes algoritmos de consenso, tipos de cadenas de bloques y aplicaciones prácticas como sistemas de votación y automatización de acuerdos mediante contratos inteligentes, todo ello ilustrado con ejemplos concretos del ecosistema crypto. Finalmente, se aborda la ciberseguridad en el contexto de Blockchain, analizando las amenazas más comunes en estos entornos y cómo proteger los activos digitales frente a ellas."
    },
    {
      id: "python_curso_practico_formacion",
      addedAt: "2026-05-02",
      themes: ["Programación"],
      cover: "./books/0081.jpg",
      title: "Python. Curso práctico de formación",
      authors: "Juan Carlos Orós Cabello",
      year: 2022,
      isbn: "978-8412286175",
      description:
        "Adéntrate en el apasionante mundo de la programación con Python, uno de los lenguajes más populares de los últimos años gracias a su sencillez y versatilidad. Se trata de un lenguaje multiparadigma que permite crear programas con distintos estilos de desarrollo, ya sea programación modular, estructurada u orientada a objetos, según lo que necesites en cada momento. Este libro es ante todo una guía práctica que, mediante numerosos ejemplos, explica los principales elementos de Python, permitiendo al lector adquirir conocimientos de forma natural y progresiva. Gracias a su estructura, cualquier persona sin experiencia previa en programación podrá seguir el curso sin dificultades y asimilar poco a poco las bases de Python. Además, los capítulos finales incluyen conceptos de bases de datos y trabajo con frameworks, un complemento perfecto para completar la formación. No esperes más: Python te está esperando."
    },
    {
      id: "programacion_mblock_curso_practico_formacion",
      addedAt: "2026-05-02",
      themes: ["Programación"],
      cover: "./books/0082.jpg",
      title: "Programación con mBlock. Curso práctico de formación",
      authors: "José Manuel Ruiz Gutiérrez",
      year: 2024,
      isbn: "978-8412782530",
      description:
        "Descubre la programación de forma práctica y amena con mBlock, una herramienta gratuita que fusiona lo mejor de Scratch con la robótica, la inteligencia artificial y el Internet de las Cosas. Esta guía completa te acompañará desde cero hasta el nivel experto en mBlock, un entorno accesible diseñado para desarrollar habilidades tecnológicas esenciales. Mediante más de 40 ejercicios prácticos, aprenderás a controlar proyectos sencillos con Micro:bit y Arduino, dos de las plataformas más empleadas en el ámbito educativo. Tanto si eres estudiante, docente, autodidacta o aficionado a la tecnología, este curso práctico te ayudará a dominar conceptos de programación, algoritmos, robótica y hardware, siendo ideal para jóvenes y adultos que quieran explorar la programación de manera intuitiva y aplicada. Descubre cómo mBlock puede convertirse en tu puerta de entrada al mundo de la inteligencia artificial, la robótica y las tecnologías STEAM. El futuro está en tus manos."
    },
    {
      id: "robotica_cyberpi_mbot2",
      addedAt: "2026-05-02",
      themes: ["Programación"],
      cover: "./books/0083.jpg",
      title: "Robótica con CyberPi y mBot2",
      authors: "José Manuel Ruiz Gutiérrez",
      year: 2025,
      isbn: "978-8412782561",
      description:
        "Conviértete en un experto de la programación con CyberPi y mBot2 gracias a esta guía práctica para proyectos STEAM, que te enseñará a desarrollar aplicaciones avanzadas integrando la tecnología de MakeBlock. Aprenderás a programar con mBlock (una extensión avanzada de Scratch) mientras desarrollas habilidades clave en motores y sensores, inteligencia artificial (reconocimiento de voz, imagen y texto), internet de las cosas, y machine learning. El libro incluye más de 30 ejercicios resueltos y 24 propuestos, permitiendo a estudiantes, docentes y autodidactas transformar conceptos en prototipos funcionales. Atrévete a dar vida a tus ideas: la programación y la robótica te esperan."
    },
    {
      id: "el_mundo_de_la_energia",
      addedAt: "2026-05-02",
      themes: ["Energía", "Tecnología"],
      cover: "./books/0084.jpg",
      title: "El Mundo de la Energía",
      authors: "Luis Postigo",
      year: 1965,
      isbn: "978-8430301744",
      description:
        "El mundo de la energía es una obra de divulgación científica en la que Luis Postigo explica de forma accesible cómo la energía ha acompañado el desarrollo de la humanidad y ha transformado la vida cotidiana, la industria y el progreso tecnológico. A lo largo del libro se describen los distintos tipos de energía y sus aplicaciones prácticas, desde las fuentes tradicionales como el carbón o los combustibles fósiles hasta la electricidad, la energía del mar, la radiación solar y la energía nuclear. El autor combina explicaciones científicas con ejemplos históricos y técnicos para mostrar cómo el ser humano ha aprendido a obtener, transformar y aprovechar la energía en diferentes épocas, apoyándose además en ilustraciones y recursos visuales que facilitan la comprensión de conceptos complejos."
    },
    {
      id: "mastering_bitcoin_traduccion_espanol",
      addedAt: "2026-05-02",
      themes: ["Economía & Finanzas", "Blockchain & Big Data"],
      cover: "./books/0085.jpg",
      title: "Mastering Bitcoin",
      authors: "Andreas Antonopoulos",
      year: 2019,
      isbn: "978-1097424108",
      description:
        "Mastering Bitcoin, escrito por Andreas M. Antonopoulos, es una guía introductoria y técnica que explica de forma clara el funcionamiento de Bitcoin y de la tecnología Blockchain. La obra combina conceptos teóricos y aplicaciones prácticas para ayudar tanto a usuarios curiosos como a inversores, emprendedores y desarrolladores a comprender cómo operan las monedas digitales, la criptografía, las transacciones en redes descentralizadas y los principios de seguridad que sustentan este ecosistema. A través de ejemplos, analogías y explicaciones accesibles, el libro muestra el potencial de esta tecnología para transformar el sistema financiero y ofrece una base sólida para quienes desean iniciarse o profundizar en el desarrollo y uso de aplicaciones relacionadas con Bitcoin."
    },
    {
      id: "bitcoin_la_caza_de_satoshi_nakamoto",
      addedAt: "2026-05-02",
      themes: ["Infantil & Juvenil", "Blockchain & Big Data"],
      cover: "./books/0086.jpg",
      title: "Bitcoin: La caza de Satoshi Nakamoto",
      authors: "Josep Busquet Mendoza (Autor), Alex Preukschat (Autor), José Ángel Ares García (Ilustrador)",
      year: 2014,
      isbn: "978-8415850564",
      description:
        "Inspirada en hechos reales, esta obra parte del misterio que rodea a Satoshi Nakamoto, el nombre tras el que podría ocultarse un brillante informático o incluso un grupo de visionarios. Su identidad sigue siendo desconocida y apenas existen certezas sobre quién estuvo detrás de este seudónimo. Sin embargo, su legado permanece en el código que dio origen a Bitcoin. Después de presentar esta revolucionaria tecnología y acompañarla en sus primeros años, Satoshi desaparece entre las sombras de internet, dejando abierta la incógnita sobre si algún día se descubrirá quién estuvo realmente detrás de una de las mayores transformaciones tecnológicas del siglo XXI."
    },
    {
      id: "mr_meta_aventuras_criptomonedas_blockchain",
      addedAt: "2026-05-02",
      themes: ["Infantil & Juvenil", "Blockchain & Big Data"],
      cover: "./books/0087.jpg",
      title: "Mr. Meta: Aventuras en el mundo de las criptomonedas y la tecnología blockchain",
      authors: "Carlos Martín (Autor), Germán Torres (Autor), Cristina Carrascosa (Colaborador)",
      year: 2020,
      isbn: "978-8417294908",
      description:
        "Mr. Meta narra una intensa aventura en la que su protagonista se sumerge en el cambiante y a veces impredecible mundo de Bitcoin, las finanzas digitales y la tecnología Blockchain. A lo largo de la historia, marcada por la tensión, la incertidumbre y constantes giros argumentales, el lector acompaña a Mr. Meta mientras se enfrenta a hackers, movimientos especulativos, intereses económicos y decisiones políticas capaces de alterar el rumbo de los mercados y de la innovación tecnológica. Conforme avanza la trama, la obra combina entretenimiento y divulgación para explicar de manera cercana y comprensible cómo funciona el ecosistema de los criptoactivos, cuáles son sus riesgos, sus oportunidades y el impacto que estas tecnologías están teniendo en la sociedad y en la economía global. El libro está escrito por Carlos Martín, ingeniero industrial especializado en blockchain, profesor de programas universitarios relacionados con tokenización y transformación digital, emprendedor tecnológico y divulgador con experiencia en proyectos pioneros dentro del sector en España."
    },
    {
      id: "bitcoin_lo_cambia_todo",
      addedAt: "2026-05-02",
      themes: ["Economía & Finanzas"],
      cover: "./books/0088.jpg",
      title: "Bitcoin lo cambia todo",
      authors: "Gael Sánchez Smith",
      year: 2021,
      isbn: "978-8436845020",
      description:
        "El patrón Bitcoin analiza el dinero como una herramienta esencial para la cooperación social, el ahorro y el intercambio económico, destacando su importancia en la generación de prosperidad. La obra sostiene que muchos problemas económicos y sociales no provienen únicamente del capitalismo, sino también de sistemas monetarios sometidos a intereses políticos y financieros que pueden alterar su función original. A partir de este planteamiento, el libro explora cómo Bitcoin podría ofrecer una alternativa basada en la descentralización, la transparencia y la resistencia frente a la manipulación, contribuyendo a una economía más eficiente y equitativa."
    },
    {
      id: "preguntas_respuestas_bitcoin_blockchain_lnp_bp",
      addedAt: "2026-05-02",
      themes: ["Economía & Finanzas"],
      cover: "./books/0089.jpg",
      title: "Preguntas y respuestas sobre Bitcoin: del concepto blockchain a la definición de la suite LNP / BP",
      authors: "David Coen (Autor), Marianna Prina (Ilustrador), Giacomo Zucco (Colaborador), Javier Bastardo (Traductor)",
      year: 2020,
      isbn: "978-1657029903",
      description:
        "Bitcoin Q&A analiza los riesgos de una sociedad cada vez más dependiente de los pagos digitales, especialmente en aspectos como la privacidad, la libertad económica y el control sobre las transacciones personales. A partir de este contexto, el libro presenta a Bitcoin como una alternativa al sistema monetario centralizado y como una forma de efectivo electrónico capaz de permitir intercambios directos entre personas sin intermediarios. Mediante un formato de preguntas y respuestas, la obra recorre el origen histórico de Bitcoin, sus fundamentos técnicos, su evolución y las posibilidades de desarrollo futuro, abordando también tecnologías complementarias como la red Lightning Network y ofreciendo recomendaciones prácticas para comprender y utilizar este ecosistema con mayor seguridad."
    },
    {
      id: "internet_del_dinero_volumen_uno",
      addedAt: "2026-05-02",
      themes: ["Economía & Finanzas"],
      cover: "./books/0090.jpg",
      title: "Internet del Dinero: Volumen Uno",
      authors: "Andreas M. Antonopoulos",
      year: 2017,
      isbn: "978-1947910034",
      description:
        "Internet del dinero explora no solo cómo funciona Bitcoin, sino especialmente por qué es una innovación tan relevante en el ámbito financiero y social. A través de una serie de ensayos, Andreas M. Antonopoulos analiza la evolución de esta tecnología desde su aparición en 2008 y su impacto en la transformación de industrias tradicionales, destacando su potencial para ampliar la independencia financiera a escala global. El libro va más allá de los aspectos técnicos para abordar también sus implicaciones filosóficas, históricas y sociales, comparando su impacto con el que tuvo Internet en la comunicación, y defendiendo que Bitcoin representa una nueva forma de resolver problemas económicos, políticos y sociales mediante sistemas descentralizados."
    },
    {
      id: "el_internet_del_dinero_volumen_dos",
      addedAt: "2026-05-02",
      themes: ["Economía & Finanzas"],
      cover: "./books/0091.jpg",
      title: "El Internet del Dinero: Volumen Dos",
      authors: "Andreas M. Antonopoulos",
      year: 2020,
      isbn: "978-1947910010",
      description:
        "Es la continuación del reconocido primer volumen de esta serie, en la que Andreas M. Antonopoulos reúne una selección de sus charlas más influyentes y reflexivas sobre el ecosistema de las criptomonedas. En esta segunda entrega, el autor profundiza en temas como los fundamentos de Bitcoin, la comparación entre blockchain y sistemas tradicionales, la relación entre información, dinero y manipulación, así como las dinámicas de las guerras de divisas y la evolución de nuevas tecnologías como Ethereum. Además, el libro incorpora una sección ampliada de preguntas frecuentes que ayuda a resolver dudas comunes y a reforzar la comprensión de los conceptos clave del mundo cripto."
    },
    {
      id: "el_internet_del_dinero_volumen_tres",
      addedAt: "2026-05-02",
      themes: ["Economía & Finanzas"],
      cover: "./books/0092.jpg",
      title: "El Internet del Dinero: Volumen Tres",
      authors: "Andreas M. Antonopoulos",
      year: 2021,
      isbn: "978-1947910195",
      description:
        "Aquí continúa la serie en la que Andreas M. Antonopoulos explora no solo el funcionamiento de Bitcoin, sino sobre todo las razones de su importancia en el contexto social, político y económico actual. A través de una selección de conferencias recientes, el autor reflexiona sobre temas como el acceso global a servicios financieros, la relación entre dinero y principios, la independencia frente a los sistemas bancarios tradicionales y el papel del código abierto como herramienta de libertad. El libro analiza también los riesgos de un sistema financiero cada vez más vigilado y controlado, planteando preguntas sobre el futuro del dinero digital, la soberanía individual y la posibilidad de construir sistemas económicos más abiertos y resistentes dentro de una sociedad global interconectada."
    },
    {
      id: "el_patron_bitcoin_alternativa_descentralizada_bancos_centrales",
      addedAt: "2026-05-02",
      themes: ["Economía & Finanzas"],
      cover: "./books/0093.jpg",
      title: "El patrón Bitcoin: La alternativa descentralizada a los bancos centrales",
      authors: "Saifedean Ammous (Autor), Mercedes Vaquero Granados (Traductor)",
      year: 2022,
      isbn: "978-8423433223",
      description:
        "El patrón Bitcoin parte del anuncio casi ignorado en 2008 de un sistema de dinero electrónico entre pares creado por un programador desconocido para analizar cómo esa innovación ha evolucionado hasta convertirse en una alternativa descentralizada al dinero emitido por bancos centrales. El autor, Saifedean Ammous, ofrece una explicación de la historia del dinero desde sus formas más antiguas hasta los sistemas modernos, mostrando cómo distintas etapas —como el patrón oro o las expansiones crediticias— han estado marcadas por crisis recurrentes. A partir de este recorrido histórico y económico, el libro defiende que Bitcoin, apoyado en la tecnología Blockchain, puede representar una solución a estos problemas estructurales al ofrecer un sistema de pago seguro, fiable y resistente al control de autoridades centrales."
    },
    {
      id: "el_legado_del_ingenio_365_grandes_inventos_espanoles",
      addedAt: "2026-05-02",
      themes: ["Tecnología"],
      cover: "./books/0094.jpg",
      title: "El Legado del Ingenio. 365 Grandes Inventos Españoles",
      authors: "Alejandro Polanco Masa",
      year: 2025,
      isbn: "979-1387661137",
      description:
        "365 inventos españoles propone una mirada distinta sobre la historia de la innovación en España, desmontando el mito de la falta de inventiva y mostrando, en su lugar, una trayectoria rica en creatividad, audacia y aportaciones adelantadas a su tiempo. A lo largo de sus páginas reúne una selección de inventos, uno por cada día del año, que abarca desde submarinos y primeros modelos de aviación hasta avances en medicina, electrodomésticos y dispositivos industriales poco conocidos pero relevantes. El autor, Alejandro Polanco, fruto de décadas de investigación, presenta cada caso de forma breve y visual, apoyándose en ilustraciones, patentes y documentos históricos que ayudan a contextualizar cada innovación. El resultado es una obra divulgativa que invita a redescubrir el ingenio técnico español y a valorar su contribución a la historia de la tecnología."
    },
    {
      id: "chernobil_caida_atomgrad_novela_grafica",
      addedAt: "2026-05-12",
      themes: ["Histórico"],
      cover: "./books/0095.jpg",
      title: "Chernóbil. La caída de Atomgrad: Novela gráfica",
      authors:
        "Matyáš Namai (Autor), Cristina Rodríguez Fischer (Coredactor), Carolina Bastida Serra (Traductor)",
      year: 2025,
      isbn: "979-1387881108",
      description:
        "El programa «Átomos para la Paz» buscaba que la Unión Soviética superara la supremacía nuclear occidental, pero terminó generando una nube radiactiva que aterrorizó al mundo. La catástrofe de Chernóbil (abril de 1986) fue causada por múltiples factores: políticas autoritarias, plazos imposibles, escasez de recursos, burocracia y corrupción. Esta novela gráfica relata el desastre a través de las historias de las personas afectadas —ingenieros, bomberos, médicos, soldados, familias y animales— mostrando cómo las ambiciones de políticos distantes tuvieron consecuencias devastadoras. La obra combina hechos históricos con un estilo visual potente usando una paleta limitada de azul y amarillo (colores de Ucrania) para intensificar el dramatismo."
    },
    {
      id: "fukushima_cronica_accidente_sin_fin",
      addedAt: "2026-05-12",
      themes: ["Histórico"],
      cover: "./books/0096.jpg",
      title: "Fukushima: Crónica de un accidente sin fin",
      authors: "Bertrand Galic (Autor), Roger Vidal (Autor), Albert Agut Iglesias (Traductor)",
      year: 2022,
      isbn: "978-8411124355",
      description:
        "El 11 de marzo de 2011, un terremoto y tsunami devastaron el noreste de Japón, causando el peor accidente nuclear del siglo XXI en Fukushima-Daiichi. Masao Yoshida, director de la planta, debió tomar decisiones urgentes bajo presión extrema, arriesgando su reputación y la vida de sus empleados y ciudadanos. En medio del caos, con explosiones y radiación creciente, Yoshida transgredió procedimientos y directivas jerárquicas para evitar un apocalipsis. Tras cinco días de tensión, un nuevo incendio obligó a evacuar a la mayoría; solo un grupo reducido de voluntarios permaneció. Diez años después, Bertrand Galic y Roger Vidal relatan esta historia de liderazgo frente a una catástrofe sin precedentes, donde un equipo se enfrentó a la tragedia mientras sus superiores quedaban abrumados."
    },
    {
      id: "lorawan_para_todos_redes_iot_larga_distancia_bajo_consumo",
      addedAt: "2026-05-12",
      themes: ["IA & IoT"],
      cover: "./books/0097.jpg",
      title: "LoRaWAN para todos: Redes IoT de larga distancia y bajo consumo",
      authors: "Edgar Landivar",
      year: 2024,
      isbn: "979-8323512041",
      description:
        "LoRaWAN para todos constituye una guía integral diseñada para democratizar el conocimiento sobre la tecnología LoRaWAN en el ámbito del Internet de las Cosas (IoT); el texto navega con claridad desde los principios básicos de las ondas electromagnéticas y las antenas hasta detalles técnicos sofisticados como la modulación LoRa, el Spreading Factor y el Code Rate, todo ello sustentado en ejemplos prácticos y una prosa que evita las fórmulas matemáticas intrincadas para hacer la tecnología verdaderamente accesible a cualquier lector interesado en su comprensión y aplicación."
    },
    {
      id: "python_energias_renovables_innovaciones_ingenieria_electrica",
      addedAt: "2026-05-12",
      themes: ["Energía", "Programación y Robótica"],
      cover: "./books/0098.jpg",
      title: "Python y Energías Renovables: Innovaciones en Ingeniería Eléctrica",
      authors: "Miguel Mateo Puma Chavez",
      year: 2025,
      isbn: "979-8323512041",
      description:
        "Esta obra es una guía práctica que enseña a aplicar Python en el sector energético, abarcando desde fundamentos de programación hasta simulación de sistemas solares y eólicos, redes inteligentes y machine learning. Dirigida a ingenieros y estudiantes, combina teoría con ejemplos de código listos para usar, facilitando la optimización y análisis de proyectos de energía limpia. La obra sirve como puente entre la programación y la transición energética, estructurando el aprendizaje en módulos progresivos que van desde el análisis de datos hasta la planificación sostenible. Su enfoque pedagógico y práctico permite a profesionales y aficionados dominar herramientas clave para enfrentar los desafíos tecnológicos del futuro energético."
    }
  ],

  // Juegos (Miscelánea → JUEGOS)
  // `addedAt` se usa para ordenar/mostrar primero lo más reciente.
  games: [
    {
      id: "tesla_vs_edison_war_of_currents",
      addedAt: "2026-04-20",
      themes: ["Estrategia"],
      images: ["./games/0001.a.jpg", "./games/0001.b.jpg", "./games/0001.c.jpg"],
      title: "Tesla vs Edison: War of Currents",
      manufacturer: "Artana",
      language: "Inglés",
      description:
        "Sumérgete en la era dorada de la invención y conviértete en el magnate eléctrico más influyente de Estados Unidos. En Tesla vs. Edison, tú y hasta 4 rivales asumiréis el rol de visionarios inversores que apuestan por los gigantes de la ciencia: Nikola Tesla o Thomas Edison.\nNo se trata solo de inventar; se trata de dominar. Contrata a las mentes más brillantes de la época, despliega tu tecnología en todo el país y conquista proyectos eléctricos estratégicos. Pero cuidado: el éxito no depende solo de los cables que instalas, sino de cómo mueves los hilos. Manipula el mercado bursátil comprando y vendiendo acciones, lanza campañas de propaganda para ganar la batalla de la opinión pública y asegúrate de que tu nombre sea sinónimo de luz.\nPara aquellos que buscan elevar el nivel de su partida, la expansión \"Tesla vs. Edison: La Expansión Global\" introduce nuevos inventores, un mapa ampliado y mecánicas financieras más complejas. Este complemento es totalmente compatible con el juego base, permitiendo a los jugadores que lo posean añadir profundidad estratégica a sus partidas, mientras que quienes jueguen solo con la edición original disfrutarán de la experiencia clásica sin interrupciones.\n¿Será la corriente alterna de Tesla o la continua de Edison la que ilumine el futuro? Solo el jugador que mejor combine innovación, estrategia financiera y poder mediático alzará la victoria."
    },
    {
      id: "timeline_inventos",
      addedAt: "2026-04-20",
      themes: ["Histórico"],
      images: ["./games/0002.a", "./games/0002.b.jpg"],
      title: "Timeline: Inventos",
      manufacturer: "Asmodee",
      language: "Español",
      description:
        "¿Sabrías colocar el abrelatas antes o después de la bombilla?\nBienvenido a Timeline: Inventos, el juego de cartas que pondrá a prueba tu memoria histórica y tu intuición. El objetivo es simple pero adictivo: ordenar cronológicamente una serie de inventos revolucionarios. Pero ojo, ¡no vale adivinar! Solo quien logre construir la línea de tiempo perfecta sin cometer errores se alzará con la victoria.\nPerfecto para toda la familia: Diseñado para jugadores de 8 años en adelante, es una forma divertida de aprender historia sin que parezca una clase. ¿Lo mejor? Su escalabilidad: desde duelos de 2 jugadores hasta grandes reuniones de 8 personas, nadie se quedará fuera de la partida. ¿Estás listo para poner a prueba tus conocimientos y ganar?"
    }
  ],

  // Media (Miscelánea → MEDIA)
  // `addedAt` se usa para ordenar/mostrar primero lo más reciente.
  // poster: ruta local recomendada (por ejemplo: "./media/<id>.jpg")
  media: [
    {
      id: "chernobyl",
      addedAt: "2026-04-15",
      themes: ["Series"],
      poster: "./media/0001.jpg",
      title: "Chernobyl",
      year: 2019,
      age: "+16",
      description:
        "Miniserie de HBO creada por Craig Mazin, recrea con rigor histórico la catástrofe nuclear del 26 de abril de 1986 en la Unión Soviética. Consta de cinco episodios que narran la explosión del reactor 4 y sus devastadoras consecuencias ambientales, centrándose en el sacrificio de científicos como Valery Legasov y funcionarios como Boris Shcherbina, quienes arriesgaron sus vidas y carreras para contener el desastre y revelar la verdad. Más allá de la emergencia técnica, la serie es un drama sobre la lucha contra la burocracia, la desinformación estatal y el costo humano de ocultar la realidad. A través de personajes basados en testimonios reales y figuras ficticias como la física Ulana Khomyuk, la obra examina cómo la ideología política y las mentiras agravaron la tragedia, subrayando la necesidad vital de escuchar a la ciencia frente al poder."
    },
    {
      id: "interstellar",
      addedAt: "2026-04-23",
      themes: ["Películas"],
      poster: "./media/0002.jpg",
      title: "Interstellar",
      year: 2014,
      age: "+12",
      description:
        "En un futuro distópico donde la Tierra se vuelve inhabitable debido a plagas y tormentas de polvo, el ex piloto Cooper acepta una misión desesperada para salvar a la humanidad. Liderando una tripulación de científicos, viaja a través de un agujero de gusano recién descubierto cerca de Saturno con el objetivo de explorar planetas en otra galaxia que puedan servir como nuevo hogar para la especie. La película explora los límites de la ciencia y la emoción mientras los astronautas enfrentan fenómenos físicos extremos, como la dilatación del tiempo cerca de un agujero negro supermasivo, y deben tomar decisiones difíciles que pondrán a prueba sus relaciones y su propia supervivencia. Es un drama épico que indaga en el precio del sacrificio y la fuerza del vínculo familiar frente a las inmensidades del cosmos."
    },
    {
      id: "ex_machina",
      addedAt: "2026-04-23",
      themes: ["Películas"],
      poster: "./media/0003.jpg",
      title: "Ex_Machina",
      year: 2014,
      age: "+12",
      description:
        "Cuenta la historia de Caleb, un joven programador que gana un concurso corporativo y es invitado a la remota y lujosa residencia de Nathan, el excéntrico y brillante CEO de su empresa. El propósito de la visita es que Caleb administre una prueba de Turing avanzada: evaluar si Ava, una inteligencia artificial con apariencia humana y cuerpo robótico, posee verdadera conciencia y emociones genuinas. La película se desarrolla en un entorno aislado y claustrofóbico donde las sesiones de evaluación entre Caleb y Ava revelan una dinámica psicológica compleja. A medida que avanza la semana, la línea entre el observador y el observado se difumina, planteando interrogantes profundos sobre la naturaleza de la consciencia, la manipulación y los límites éticos de la creación tecnológica, todo ello en un thriller intelectual que mantiene la tensión sin revelar el desenlace."
    },
    {
      id: "the_imitation_game_descifrando_enigma",
      addedAt: "2026-04-23",
      themes: ["Películas"],
      poster: "./media/0004.jpg",
      title: "The Imitation Game (Descifrando Enigma)",
      year: 2014,
      age: "+7",
      description:
        "Durante la Segunda Guerra Mundial, el matemático Alan Turing lidera un equipo secreto en Bletchley Park con la misión imposible de descifrar el código Enigma, utilizado por la Alemania nazi para coordinar sus operaciones militares. Bajo una inmensa presión y enfrentando el escepticismo de sus superiores, Turing debe diseñar una máquina revolucionaria capaz de romper el cifrado antes de que sea demasiado tarde, en una carrera contra el tiempo que podría decidir el destino de la guerra. Más allá del esfuerzo técnico, la película explora la compleja vida de Turing, un genio brillante pero socialmente aislado que debe navegar entre la colaboración forzada, la paranoia gubernamental y las amenazas a su privacidad personal. Es un drama que honra el legado de un hombre cuyo trabajo no solo ayudó a acortar el conflicto, sino que sentó las bases de la era informática moderna, todo mientras lucha contra las restricciones de su propia sociedad."
    },
    {
      id: "cube",
      addedAt: "2026-04-23",
      themes: ["Películas"],
      poster: "./media/0005.jpg",
      title: "Cube",
      year: 1997,
      age: "+16",
      description:
        "Narra la historia de seis desconocidos que despiertan atrapados en un laberinto gigante compuesto por habitaciones cúbicas interconectadas, sin memoria de cómo llegaron allí ni conocimiento sobre su captor. Cada individuo posee una habilidad específica —desde matemáticas hasta ingeniería y medicina— que se vuelve crucial para sobrevivir, ya que el laberinto está lleno de trampas mortales ocultas en cada sala. A medida que el grupo intenta descifrar la lógica del entorno para encontrar una salida, la película explora la tensión psicológica y las dinámicas humanas bajo presión extrema. En un ambiente claustrofóbico y estéril, los protagonistas deben confiar en sus talentos colectivos para navegar el peligro constante, mientras la incertidumbre sobre el origen y el propósito de la prisión se intensifica sin ofrecer respuestas fáciles."
    }
  ],
  levels: [
    {
      id: "eso1",
      label: "1º ESO",
      materials: [
        {
          id: "tda_aplicada",
          label: "DIGITALIZACIÓN APLICADA",
          units: []
        }
      ]
    },
    {
      id: "eso2",
      label: "2º ESO",
      materials: [
        {
          id: "tecdig1",
          label: "TECNOLOGÍA Y DIGITALIZACIÓN I",
          units: []
        }
      ]
    },
    {
      id: "eso3",
      label: "3º ESO",
      materials: [
        {
          id: "tecdig2",
          label: "TECNOLOGÍA Y DIGITALIZACIÓN II",
          units: []
        }
      ]
    },
    {
      id: "eso4",
      label: "4º ESO",
      materials: [
        {
          id: "tecnologia",
          label: "TECNOLOGÍA",
          units: []
        },
        {
          id: "digitalizacion",
          label: "DIGITALIZACIÓN",
          units: []
        }
      ]
    },
    {
      id: "bach1",
      label: "1º BACHILLERATO",
      materials: [
        {
          id: "tei1",
          label: "TECNOLOGÍA E INGENIERÍA I - TEI I",
          units: []
        },
        {
          id: "tda1",
          label: "TECNOLOGÍAS DIGITALES APLICADAS I - TDA I",
          units: []
        }
      ]
    },
    {
      id: "bach2",
      label: "2º BACHILLERATO",
      materials: [
        {
          id: "tei2",
          label: "TECNOLOGÍA E INGENIERÍA II - TEI II",
          units: []
        },
        {
          id: "tda2",
          label: "TECNOLOGÍAS DIGITALES APLICADAS II - TDA II",
          units: []
        }
      ]
    }
  ],

  // Secciones de cada unidad: enlace a PDF en /content/<unitId>/<pdfFile>
  sectionTabs: [
    { id: "teoria", label: "Teoría", pdfFile: "teoria.pdf" },
    { id: "actividades", label: "Actividades", pdfFile: "actividades.pdf" },
    { id: "practicas", label: "Prácticas", pdfFile: "practicas.pdf" },
    { id: "recursos", label: "Recursos", pdfFile: "recursos.pdf" }
  ],

  // Entradas manuales para la búsqueda rápida (cualquier sección o texto que añadas a la web).
  // navTarget: home | docencia | legislacion | help | about | books | misc | privacy
  siteSearchEntries: [],

  // Subapartados indexados automáticamente (añade objetos cuando crees contenido bajo cada menú).
  // Cada ítem: { id, title, description?, keywords?, subSection? } — subSection aparece en la ruta del resultado.
  // Ejemplo en misc:
  // { id: "enlaces", title: "Enlaces útiles", subSection: "General", description: "...", keywords: "..." }
  contentIndex: {
    misc: [],
    books: [],
    about: [],
    help: []
  },

  // Si añades nuevas claves en contentIndex (p. ej. videos: []), declara aquí la etiqueta y el menú destino:
  // contentIndexZones: { videos: { label: "VIDEOS", navTarget: "misc" } }
  contentIndexZones: {}
};

