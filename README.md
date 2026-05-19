# Daniela Lozano — Portafolio

Sitio web personal. Construido en HTML, CSS y JavaScript puros — sin frameworks, sin build step.
Diseñado para hospedarse en **GitHub Pages**.

---

## Estructura

```
portafolio/
├── index.html      → Todo el contenido y estructura
├── styles.css      → Sistema de diseño (Soft Editorial)
├── script.js       → Interacciones mínimas
└── README.md       → Este archivo
```

---

## Cómo publicarlo en GitHub Pages (paso a paso)

### 1. Crear el repositorio
- Entra a github.com y crea un repositorio nuevo.
- **Nombre sugerido:** `daniela-lozano` o `portafolio`.
- Déjalo **público** (GitHub Pages gratuito solo funciona con repos públicos).
- No marques "Initialize with README" — ya tienes uno.

### 2. Subir los archivos
Tienes dos opciones:

**Opción A — Por la web (más fácil):**
1. En el repo recién creado, click en "uploading an existing file".
2. Arrastra `index.html`, `styles.css`, `script.js` y `README.md`.
3. Click en "Commit changes".

**Opción B — Por terminal (si te animas):**
```bash
cd portafolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

### 3. Activar GitHub Pages
1. Dentro del repositorio, ve a **Settings**.
2. En el menú izquierdo, selecciona **Pages**.
3. En "Source", elige **Deploy from a branch**.
4. Branch: **main** / Folder: **/ (root)**.
5. Click **Save**.

### 4. Esperar 1–2 minutos
Tu sitio estará en:
`https://TU_USUARIO.github.io/TU_REPO/`

---

## Personalización rápida

### Cambiar enlaces de contacto
En `index.html`, busca la sección `<!-- CONVERSEMOS -->` y actualiza:
- Email: línea con `mailto:daniela.lozanosb@gmail.com`
- WhatsApp: línea con `https://wa.me/573175389430`
- LinkedIn: línea con `https://linkedin.com/in/daniela-lozano` ← **¡actualiza esta URL!**

### Agregar tu foto editorial
1. Crea una carpeta `images/` dentro del proyecto.
2. Sube tu foto editorial allí (recomendado: `portrait.jpg`, máximo 800px de ancho, optimizada).
3. Si quieres incluirla en el hero, agrégala en `index.html` y posicionala con CSS.
   *(Por ahora la web funciona sin foto, pero queda lista para incorporarla)*

### Cambiar colores
En `styles.css`, al inicio del archivo en `:root`, modifica:
```css
--bone:         #F4EFE8;   /* fondo */
--ink:          #1C1B19;   /* texto principal */
--terracotta:   #B8826B;   /* acento */
--terracotta-d: #8C5E48;   /* acento oscuro */
```

### Cambiar tipografía
En `index.html`, en la etiqueta `<link>` de Google Fonts (línea ~16), puedes cambiar `Fraunces` por otra serif editorial (ej: `Cormorant Garamond`, `Playfair Display`, `EB Garamond`).
Luego, en `styles.css`, actualiza la variable `--serif`.

---

## Conexión con dominio propio (opcional, recomendado)

Cuando estés lista, te recomiendo comprar un dominio del estilo `danielalozano.com`.
1. Cómpralo en Namecheap o GoDaddy (~$10–15 USD/año).
2. En tu repo, ve a **Settings → Pages → Custom domain** y escríbelo.
3. En el panel de tu dominio, agrega un registro CNAME apuntando a `TU_USUARIO.github.io`.
4. Marca "Enforce HTTPS" en GitHub Pages.

Un dominio propio sube la percepción profesional en 10x. Vale la inversión.

---

## Notas de diseño

**Dirección visual:** Soft Editorial — paleta hueso/tinta/terracota, tipografía Fraunces (serif editorial moderna) emparejada con Inter. Layout asimétrico, generosa respiración, animaciones contenidas.

**Sin frameworks:** todo es HTML/CSS/JS plano. Carga rápido, indexa bien en Google, fácil de mantener.

**Mobile-first:** probado en pantallas desde 360px.

**Accesible:** navegación por teclado, contraste AA, respeta `prefers-reduced-motion`.
