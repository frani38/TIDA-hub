# Puesta en marcha de T·I·D·A hub en GitHub Pages

Guía del proceso real usado para publicar este proyecto online con **Git for Windows**, cuenta **GitHub** y **GitHub Pages**.  
Sitio resultante: **https://frani38.github.io/TIDA-hub/**  
Repositorio: **https://github.com/frani38/TIDA-hub**

---

## 1. Qué se publica y qué no hace falta

| Sí | No (para este proyecto) |
| --- | --- |
| HTML, CSS, JS, imágenes, PDF, fuentes | Servidor Node/PHP propio |
| Rama `main` como origen de Pages | Compilación / bundler |
| Web3Forms para el formulario AYUDA | Backend propio de correo |

GitHub Pages sirve el contenido estático del repo. Cada `git push` a `main` actualiza la web (suele tardar segundos o un minuto).

---

## 2. Requisitos en el PC (Windows)

1. **Git for Windows**  
   - Instalador: https://git-scm.com/download/win  
   - Durante la instalación, deja la opción de usar Git desde **Git Bash** y/o PATH del sistema.  
   - Comprueba en PowerShell o CMD:
     ```bat
     git --version
     ```

2. **Cuenta GitHub**  
   - En este proyecto: usuario **`frani38`**.  
   - Acceso por HTTPS (Git Credential Manager suele pedir login la primera vez) o SSH.

3. **(Opcional pero útil) GitHub CLI (`gh`)**  
   - Facilita autenticación y creación de repos.  
   - https://cli.github.com/

4. **Editor** (Cursor / VS Code) con la carpeta del proyecto abierta  
   - Ruta local de trabajo típica: `c:\KEEP OUT\MAKERS\Web\MyWeb`  
   - El remoto apunta al repo **TIDA-hub** (el nombre público del producto es T·I·D·A hub).

---

## 3. Crear el repositorio en GitHub

### Opción A — Desde la web de GitHub

1. Entra en https://github.com/new  
2. **Repository name:** `TIDA-hub`  
3. Público (necesario para Pages gratis en cuentas personales sin otras opciones de pago).  
4. No hace falta inicializar con README si ya tienes el proyecto en local (evita conflictos).  
5. Crea el repositorio.

### Opción B — Con `gh` (si está instalado y autenticado)

```bat
gh auth login
gh repo create TIDA-hub --public --source=. --remote=origin --push
```

(Ejecutar desde la carpeta del proyecto si aún no existe el remoto.)

---

## 4. Enlazar el proyecto local con Git

En PowerShell, dentro de la carpeta del sitio:

```bat
cd "c:\KEEP OUT\MAKERS\Web\MyWeb"

git status
```

Si aún no hay remoto:

```bat
git remote add origin https://github.com/frani38/TIDA-hub.git
git branch -M main
git push -u origin main
```

Si el remoto ya existe (caso actual):

```bat
git remote -v
git push origin main
```

**Primera autenticación HTTPS:** Windows abre **Git Credential Manager**; inicia sesión con la cuenta GitHub (`frani38`). El aviso del correo en GCM es informativo; no es un error.

---

## 5. Activar GitHub Pages

1. Repo → **Settings** → **Pages**.  
2. **Build and deployment** → Source: **Deploy from a branch**.  
3. Branch: **`main`** / carpeta **`/` (root)**.  
4. Save.  

URL del sitio (proyecto en subruta del usuario):

```text
https://frani38.github.io/TIDA-hub/
```

Importante: las rutas del sitio son **relativas** (`./styles.css`, `./app.js`, `./content/...`). Así funcionan tanto en local como bajo `/TIDA-hub/`.

---

## 6. Flujo habitual de actualización

Después de editar archivos en local:

```bat
cd "c:\KEEP OUT\MAKERS\Web\MyWeb"
git status
git add .
git commit -m "Descripción breve del cambio"
git push origin main
```

1. Espera a que Pages despliegue (pestaña **Actions** del repo, si está visible).  
2. Abre la web y fuerza recarga: **Ctrl+F5** (CSS/JS versionados o con `Date.now()` en `app.js`).

No subas secretos privados. La **Access Key de Web3Forms** está pensada para ir en el cliente (pública); la protección real es restringir dominios en el panel de Web3Forms.

### 6.1. Versión del pie (`vMAJOR.MINOR.PATCH`)

Formato de **tres dígitos** (ej. `1.1.0` → se muestra `v1.1.0`):

| Dígito | Significado |
| --- | --- |
| **MAJOR** | Cambios considerables |
| **MINOR** | Cambios menores de funcionalidad |
| **PATCH** | Cambios pequeños |

- Fuente: `data.js` → `siteMeta.version` + `siteMeta.updated`
- El pie se rellena solo al cargar la página
- **Regla fija del agente:** `.cursor/rules/version-semver.mdc` — en cada cambio del proyecto se incrementa la versión automáticamente según el tipo de cambio

Versión actual de referencia tras el hito de publicación online: **1.1.0**.

---

## 7. Registro y uso de Web3Forms (mensajería de AYUDA)

GitHub Pages **no puede enviar correo** por sí solo. En T·I·D·A hub el formulario de **AYUDA** usa el servicio **[Web3Forms](https://web3forms.com/)**: el navegador hace un `POST` a su API y ellos reenvían el mensaje al correo del responsable (p. ej. `franciscojcr@educastur.org`).

Ventajas frente al antiguo `mailto:`: el visitante **no necesita** tener un cliente de correo configurado; tras enviar ve **Enviado** y vuelve a INICIO.

### 7.1. Por qué Web3Forms en este proyecto

| Aspecto | Detalle |
| --- | --- |
| Encaja con Pages | Sitio 100 % estático; sin PHP/Node propio |
| Plan gratuito (orientativo) | ~**250 envíos/mes** (comprobar siempre en su web de precios) |
| Access Key | Es **pública** (va en el JS del cliente); no es un secreto de servidor |
| Protección | Restricción de dominio + honeypot antispam en el formulario |

### 7.2. Registro / acceso a la cuenta

1. Abre https://web3forms.com/ (o https://app.web3forms.com/).  
2. Entra con **Continue with Email** (o Google) usando el correo donde quieres **recibir** las consultas, p. ej. `franciscojcr@educastur.org`.  
3. Introduce el **código de verificación** que llega a esa bandeja (revisa también spam).  
4. Quedas logueado: abajo debe verse algo como *Logged in as franciscojcr@educastur.org*.

### 7.3. Crear el formulario y obtener la Access Key

1. Si es la primera vez, aparece **Create Your First Form**.  
2. Rellena, por ejemplo:  
   - **Form Name:** `TIDA hub AYUDA`  
   - **Website URL:** `frani38.github.io/TIDA-hub`  
     (para pruebas locales puedes usar también `localhost`)  
3. Pulsa **Create Form**.  
4. En el siguiente paso copia la **Access Key** (UUID, p. ej. `f8614300-23c6-4018-a6cd-…`).  
5. Opcional: **Go to Dashboard** para ver envíos, límites y ajustes.

### 7.4. Configurar la clave en el proyecto (`data.js`)

En `data.js`, bloque `helpContact`:

```js
helpContact: {
  web3formsAccessKey: "PEGAR-AQUI-LA-ACCESS-KEY",
  notifyEmail: "franciscojcr@educastur.org",
  fromName: "T·I·D·A hub — AYUDA",
},
```

- `web3formsAccessKey`: la clave del paso anterior (obligatoria; si está vacía, AYUDA muestra error de configuración).  
- `notifyEmail`: correo de destino documentado (el de la cuenta Web3Forms).  
- `fromName`: nombre que aparece como origen en la notificación.

Luego:

```bat
git add data.js
git commit -m "Configure Web3Forms access key for AYUDA"
git push origin main
```

### 7.5. Dominios de confianza (recomendado)

En el panel de Web3Forms del formulario:

1. Autoriza el dominio de producción: `frani38.github.io` (o la URL completa del sitio).  
2. Si pruebas en local, añade `localhost`.  
3. Así reduces el abuso de la Access Key desde otras webs.

### 7.6. Cómo lo usa la web (comportamiento)

1. El usuario rellena AYUDA (nombre, email, asunto, descripción + consentimientos RGPD).  
2. `app.js` envía JSON a `https://api.web3forms.com/submit` con la Access Key, asunto prefijado `[T·I·D·A hub]`, y un honeypot `botcheck`.  
3. Si la API responde OK: pantalla **Enviado** (~1,6 s) y retorno a **INICIO**.  
4. El responsable recibe el correo; puede responder al `replyto` (email del visitante).  
5. En el dashboard de Web3Forms suele quedar un historial temporal de envíos (según plan).

### 7.7. Privacidad (RGPD)

La política en **AYUDA** y en `privacidad.html` indica que:

- El responsable es Francisco Carnero Rodríguez (`franciscojcr@educastur.org`).  
- **Web3Forms** actúa como encargado para recibir el envío y notificar por correo.  
- Puede haber tratamiento fuera del EEE según el proveedor; el usuario consiente al marcar las casillas y enviar.

Si cambias de proveedor de mensajería, actualiza esos textos a la vez que el código.

### 7.8. Comprobar que funciona

1. Ctrl+F5 en https://frani38.github.io/TIDA-hub/  
2. **AYUDA** → envía un mensaje de prueba.  
3. Debe aparecer **Enviado** y volver al mensaje de bienvenida.  
4. Revisa la bandeja (y spam) de `franciscojcr@educastur.org`.  
5. Opcional: mira el envío en el dashboard de Web3Forms.

### 7.9. Problemas frecuentes de Web3Forms

| Síntoma | Qué revisar |
| --- | --- |
| “Falta la clave de Web3Forms” | `helpContact.web3formsAccessKey` vacío o no publicado en Pages |
| Error al enviar / no llega correo | Dominio no autorizado; clave incorrecta; cupo mensual agotado |
| Correo en spam | Filtros de Educastur / proveedor; revisa carpeta de no deseados |
| Llega a otro buzón | La cuenta Web3Forms está ligada a otro email; crea formulario con el correo correcto |

---

## 8. Decisiones de diseño ligadas al hosting

- **Sin backend:** ideal para Pages; contacto externalizado (Web3Forms).  
- **Lienzo de escritorio fijo:** la web no se “adapta” a móvil reorganizando el layout; al estrechar la ventana se hace scroll como si estuviera maximizada.  
- **Fuentes locales** en `fonts/`: no dependen de CDNs bloqueados.  
- **Historial del navegador:** hashes + `history.pushState` para que funcionen atrás/adelante entre secciones.

---

## 9. Problemas frecuentes

| Síntoma | Qué revisar |
| --- | --- |
| La web no cambia tras el push | Actions/Pages; Ctrl+F5; ¿push a `main`? |
| 404 en `…/TIDA-hub/` | Pages activado en `main` / root; nombre del repo |
| CSS antiguo | Query `?v=…` en `index.html` o hard refresh |
| AYUDA no envía | Ver §7.9 (clave, dominio, cupo, spam) |
| `git` no se reconoce | Reabrir terminal tras instalar Git; comprobar PATH |
| Login GitHub | `gh auth login` o Credential Manager |

---

## 10. Checklist rápido “de cero a online”

1. Instalar Git for Windows.  
2. Tener cuenta GitHub (`frani38`).  
3. Crear repo vacío `TIDA-hub`.  
4. En la carpeta del proyecto: `remote add` + `push` de `main`.  
5. Activar Pages (`main` / `/`).  
6. Registrar Web3Forms, crear formulario, pegar Access Key en `data.js` (§7).  
7. Restringir dominio en el panel Web3Forms.  
8. Push final y probar AYUDA + https://frani38.github.io/TIDA-hub/  

---

## 11. Referencias

- GitHub Pages: https://docs.github.com/en/pages  
- Git for Windows: https://git-scm.com/download/win  
- Web3Forms (producto): https://web3forms.com/  
- Web3Forms (panel / login): https://app.web3forms.com/  
- Web3Forms (documentación): https://docs.web3forms.com/  
- README del proyecto: `README.md`  
- PDF por unidad: `content/README.md`
