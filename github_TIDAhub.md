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

---

## 7. Formulario AYUDA (Web3Forms)

El envío ya no usa `mailto:`. Flujo de alta:

1. Crear cuenta / formulario en https://web3forms.com/ (correo de destino, p. ej. `franciscojcr@educastur.org`).  
2. Crear el formulario (nombre orientativo: `TIDA hub AYUDA`; URL: `frani38.github.io/TIDA-hub`).  
3. Copiar la **Access Key** en `data.js`:

```js
helpContact: {
  web3formsAccessKey: "……-……-……",
  notifyEmail: "franciscojcr@educastur.org",
  fromName: "T·I·D·A hub — AYUDA",
},
```

4. En el panel de Web3Forms, restringir el dominio a la web publicada (y `localhost` si pruebas en local).  
5. Commit + push.  
6. Probar AYUDA en la web: debe mostrar **Enviado** y volver a INICIO; el mensaje llega al correo configurado.

La política de privacidad (`app.js` / `privacidad.html`) documenta Web3Forms como encargado del tratamiento para ese envío.

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
| AYUDA no envía | `web3formsAccessKey` vacío o dominio no autorizado |
| `git` no se reconoce | Reabrir terminal tras instalar Git; comprobar PATH |
| Login GitHub | `gh auth login` o Credential Manager |

---

## 10. Checklist rápido “de cero a online”

1. Instalar Git for Windows.  
2. Tener cuenta GitHub (`frani38`).  
3. Crear repo vacío `TIDA-hub`.  
4. En la carpeta del proyecto: `remote add` + `push` de `main`.  
5. Activar Pages (`main` / `/`).  
6. Configurar Web3Forms y pegar la key en `data.js`.  
7. Push final y probar https://frani38.github.io/TIDA-hub/  

---

## 11. Referencias

- GitHub Pages: https://docs.github.com/en/pages  
- Git for Windows: https://git-scm.com/download/win  
- Web3Forms: https://web3forms.com/  
- README del proyecto: `README.md`  
- PDF por unidad: `content/README.md`
