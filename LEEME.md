# Portafolio web

Sitio estático hecho con HTML5, CSS3 y JavaScript, sin librerías ni instalación.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura de la página y el título que ve Google |
| `js/content.js` | **Todo tu contenido.** Aquí editas textos, proyectos, habilidades y contacto |
| `css/styles.css` | Colores y diseño. Los colores están al inicio, en `:root` |
| `js/main.js` | Dibuja el contenido. No necesitas tocarlo |

## Tu foto

Guarda tu foto dentro de la carpeta `img` con el nombre `foto.jpg` y aparece sola en la portada. Si tiene otro nombre o es PNG, cambia la línea `foto:` en `js/content.js`. Lo ideal es una imagen cuadrada de unos 600 x 600 píxeles.

## Cómo editarlo

1. Abre `js/content.js` con el Bloc de notas o con Visual Studio Code.
2. Cambia los textos entre comillas. Todo lo que está entre `[corchetes]` es un dato tuyo por completar.
3. Para agregar un proyecto, copia un bloque `{ ... }` de la lista `proyectos`, pégalo debajo (con su coma) y cambia los datos.
4. Guarda y abre `index.html` en el navegador para ver el resultado.

Para cambiar el color principal, abre `css/styles.css` y modifica `--accent` (tema claro) y `--accent` dentro de `[data-theme="dark"]` (tema oscuro).

## Publicarlo gratis (hosting + dirección web)

Opción recomendada: GitHub Pages. Es gratis, estable y te da la dirección `tu-usuario.github.io`.

1. Crea una cuenta en https://github.com.
2. Crea un repositorio nuevo, público, llamado `tu-usuario.github.io` (con tu nombre de usuario real).
3. Sube todos los archivos de esta carpeta al repositorio (botón "Add file" > "Upload files").
4. Entra a Settings > Pages y elige la rama `main` y la carpeta `/ (root)`.
5. En uno o dos minutos tu portafolio estará en `https://tu-usuario.github.io`.

Alternativas igual de gratuitas: Netlify (arrastras la carpeta y te da `nombre.netlify.app`) y Cloudflare Pages (`nombre.pages.dev`).

## Dominio propio

Los dominios propios como `tunombre.com` normalmente cuestan alrededor de 10 a 15 dólares al año. Si eres estudiante, el GitHub Student Developer Pack suele incluir un dominio gratis por un año; revisa la oferta vigente. Cuando tengas el dominio, lo conectas en GitHub Pages (Settings > Pages > Custom domain) o en Netlify (Domain settings) siguiendo sus instrucciones, y activas HTTPS.
