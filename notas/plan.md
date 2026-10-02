# 🔗 ComSoc Links — Plan de Acción

> Plataforma de enlaces para IEEE ComSoc Univalle, construida con **Node.js**, **Astro** y **TailwindCSS**, siguiendo la estética del sitio principal ([comsoc.ieeeunivalle.link](https://comsoc.ieeeunivalle.link/)).

---

## 📋 Resumen del Proyecto

Crear un "link-in-bio" / directorio de enlaces para ComSoc Univalle donde cada enlace se define como un archivo JSON individual en `src/content/links/`. Los enlaces se agrupan por categoría y se muestran en una página responsiva con la estética oscura y glassmorfismo del sitio principal.

---

## 🎨 Sistema de Diseño (heredado de comsoc-web)

### Paleta de Colores
| Token | Valor | Uso |
|-------|-------|-----|
| `primary` | `#1a73e8` | Color principal, CTAs, acentos |
| `primary-dark` | `#1557b0` | Hover de botones primarios |
| `accent` | `#00bcd4` | Acentos secundarios, gradientes |
| `accent-dark` | `#0097a7` | Hover de acentos |
| `dark` | `#0a0e17` | Fondo principal de la página |
| `dark-card` | `#111827` | Fondo de tarjetas (con opacidad) |
| `dark-border` | `#1e293b` | Bordes sutiles |
| `ieee-blue` | `#006699` | Color institucional IEEE |
| `ieee-dark` | `#004466` | Variante oscura IEEE |

### Tipografía
- **Headings:** Space Grotesk (500, 600, 700)
- **Body:** Inter (400, 500, 600)
- Fuentes cargadas desde Google Fonts CDN

### Patrones Visuales
- **Fondo:** Negro profundo (`#0a0e17`) con gradientes radiales sutiles en azul/cyan
- **Tarjetas:** Glassmorfismo → `bg-dark-card/80 backdrop-blur-sm border border-dark-border rounded-xl`
- **Hover:** Glow effects (`shadow-glow-sm`), cambio de borde a `primary/30`, `scale-[1.02]`
- **Gradientes de texto:** `from-primary to-accent` con `bg-clip-text text-transparent`
- **Botones primarios:** Gradiente `from-primary to-primary-dark`, glow en hover
- **Botones secundarios:** Borde `primary/30`, hover con `bg-primary/10`
- **Animaciones:** `float`, `glow`, `slideUp`, `fadeIn`, `scaleIn`, `shimmer`
- **Contenedor:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

---

## 🏗️ Arquitectura del Proyecto

```
comsoc-links/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── img/
│   │   ├── logos/
│   │   │   └── comsoc-logo.webp       # Logo del capítulo
│   │   └── icons/                      # Íconos personalizados (PNG/SVG)
│   │       ├── instagram.svg
│   │       ├── youtube.svg
│   │       ├── whatsapp.svg
│   │       ├── web.svg
│   │       ├── github.svg
│   │       ├── linkedin.svg
│   │       └── ...
├── src/
│   ├── content/
│   │   └── links/                      # ← Cada archivo = un enlace
│   │       ├── instagram.json
│   │       ├── youtube.json
│   │       ├── pagina-web.json
│   │       ├── whatsapp-grupo.json
│   │       ├── linkedin.json
│   │       ├── github.json
│   │       ├── formulario-unirse.json
│   │       └── ...
│   ├── components/
│   │   ├── LinkCard.astro              # Tarjeta individual de enlace
│   │   ├── CategorySection.astro       # Sección agrupada por categoría
│   │   ├── Header.astro                # Cabecera con logo y nombre
│   │   └── Footer.astro                # Pie de página minimalista
│   ├── layouts/
│   │   └── BaseLayout.astro            # Layout HTML base
│   ├── pages/
│   │   └── index.astro                 # Página principal
│   ├── styles/
│   │   └── global.css                  # Estilos globales + Tailwind
│   └── utils/
│       └── loadLinks.ts                # Utilidad para cargar y agrupar enlaces
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📄 Formato de Archivo JSON para Enlaces

Cada archivo en `src/content/links/` representa un enlace con la siguiente estructura:

```json
{
  "titulo": "Instagram",
  "url": "https://www.instagram.com/comsoc_univalle/",
  "icono": "/img/icons/instagram.svg",
  "categoria": "Redes Sociales",
  "orden": 1,
  "destacado": false,
  "descripcion": "Síguenos en Instagram para contenido exclusivo"
}
```

### Campos del JSON

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `titulo` | `string` | ✅ | Texto visible del enlace |
| `url` | `string` | ✅ | URL de destino (se abre en nueva pestaña) |
| `icono` | `string` | ✅ | Ruta al ícono PNG o SVG en `public/` |
| `categoria` | `string` | ✅ | Categoría para agrupación (e.g. "Redes Sociales", "Recursos", "Comunidad") |
| `orden` | `number` | ❌ | Orden dentro de su categoría (menor = primero). Default: `99` |
| `destacado` | `boolean` | ❌ | Si es `true`, se muestra con borde de gradiente y efecto glow. Default: `false` |
| `descripcion` | `string` | ❌ | Texto descriptivo corto (se muestra debajo del título) |

---

## 🔨 Fases de Implementación

### Fase 1 — Inicialización del proyecto
- [ ] Inicializar proyecto Astro con `npm create astro@latest`
- [ ] Instalar dependencias: `@astrojs/tailwind`, `tailwindcss`, `autoprefixer`, `postcss`
- [ ] Configurar `astro.config.mjs` (integración Tailwind, puerto 3001 para no colisionar)
- [ ] Configurar `tailwind.config.mjs` con los tokens de diseño de ComSoc (colores, fuentes, animaciones, sombras glow)
- [ ] Configurar `tsconfig.json`
- [ ] Crear `src/styles/global.css` con las capas base/components/utilities y fuentes de Google

### Fase 2 — Layout y componentes base
- [ ] Crear `src/layouts/BaseLayout.astro`
  - HTML5 con `<html lang="es">`
  - Meta tags (SEO, Open Graph, Twitter Cards)
  - Preconnect a Google Fonts
  - Importación de estilos globales
  - Favicon
- [ ] Crear `src/components/Header.astro`
  - Logo de ComSoc centrado
  - Nombre: "IEEE ComSoc Univalle"
  - Subtítulo: "Enlaces y Recursos"
  - Avatar/logo con efecto glow sutil
- [ ] Crear `src/components/Footer.astro`
  - Copyright
  - Enlace al sitio web principal
  - Estilo minimalista

### Fase 3 — Sistema de contenido y carga de enlaces
- [ ] Crear `src/utils/loadLinks.ts`
  - Función que usa `import.meta.glob` de Vite para cargar todos los `*.json` de `src/content/links/`
  - Parsear, validar y agrupar los enlaces por `categoria`
  - Ordenar dentro de cada categoría por el campo `orden`
  - Definir orden de las categorías
- [ ] Definir tipado TypeScript para la interfaz `Link`

### Fase 4 — Componentes de presentación
- [ ] Crear `src/components/LinkCard.astro`
  - Tarjeta con glassmorfismo (`glass-card-hover`)
  - Ícono (SVG inline o `<img>`) a la izquierda
  - Título del enlace centrado
  - Descripción opcional debajo en texto gris
  - Variante destacada con borde gradiente y glow
  - Enlace `<a>` con `target="_blank" rel="noopener noreferrer"`
  - Flecha indicadora de enlace externo
  - Hover: glow + scale + cambio de borde
- [ ] Crear `src/components/CategorySection.astro`
  - Título de categoría con `gradient-text` o estilo sutil
  - Línea divisora con gradiente
  - Contenedor para tarjetas de la categoría

### Fase 5 — Página principal
- [ ] Crear `src/pages/index.astro`
  - Importar y usar `BaseLayout`
  - Sección hero con logo, nombre del capítulo y bio corta
  - Iterar categorías → `CategorySection` → `LinkCard`
  - Fondo con gradientes radiales sutiles (heredado del sitio principal)
  - Animaciones de entrada (`fadeIn`, `slideUp`)

### Fase 6 — Assets y contenido de ejemplo
- [ ] Copiar/crear logo de ComSoc en `public/img/logos/`
- [ ] Crear íconos SVG básicos en `public/img/icons/` (o usar los del sitio principal)
- [ ] Crear archivos JSON de ejemplo en `src/content/links/`:
  - `instagram.json` — Redes Sociales
  - `youtube.json` — Redes Sociales
  - `linkedin.json` — Redes Sociales
  - `github.json` — Redes Sociales
  - `pagina-web.json` — Oficial
  - `formulario-unirse.json` — Comunidad
  - `whatsapp-comunidad.json` — Comunidad
  - `ieee-xplore.json` — Recursos IEEE
  - `ieee-comsoc.json` — Recursos IEEE
  - `ieee-seccion-colombia.json` — Recursos IEEE
- [ ] Crear `public/favicon.svg` con branding ComSoc

### Fase 7 — Responsividad y pulido
- [ ] Diseño mobile-first (el diseño es tipo link-in-bio, naturalmente mobile)
- [ ] Ancho máximo del contenido: `max-w-2xl mx-auto` (centrado, angosto como Linktree)
- [ ] Breakpoints:
  - Mobile: 1 columna de tarjetas
  - Tablet+: Opcionalmente 2 columnas si hay muchos enlaces
- [ ] Verificar animaciones y transiciones
- [ ] Asegurar accesibilidad (foco visible, aria-labels, contraste)

### Fase 8 — Optimización y despliegue
- [ ] Agregar meta tags Open Graph con imagen de preview
- [ ] Optimizar imágenes (WebP donde sea posible)
- [ ] Ejecutar `npm run build` y verificar output estático
- [ ] Configurar despliegue (Cloudflare Pages, Vercel, o similar)
- [ ] Configurar dominio: `links.comsoc.ieeeunivalle.link` (o subpath)

---

## 🧪 Categorías de enlaces sugeridas

| Categoría | Descripción | Ejemplos |
|-----------|-------------|----------|
| **Oficial** | Sitio web y presencia oficial | Página web principal |
| **Redes Sociales** | Perfiles en redes sociales | Instagram, YouTube, LinkedIn, GitHub |
| **Comunidad** | Canales de comunicación y unión | WhatsApp, Discord, Formulario de unión |
| **Recursos IEEE** | Enlaces a recursos IEEE | IEEE Xplore, ComSoc Global, Sección Colombia |
| **Eventos** | Eventos próximos o recurrentes | Próximo evento, Calendario |
| **Proyectos** | Proyectos activos del capítulo | Repo del proyecto X |

---

## 📐 Wireframe conceptual

```
┌─────────────────────────────────┐
│         ┌──────────┐            │
│         │  LOGO    │            │
│         │ ComSoc   │            │
│         └──────────┘            │
│    IEEE ComSoc Univalle         │
│    Capítulo Estudiantil         │
│    de Comunicaciones            │
│                                 │
│  ── Oficial ───────────────     │
│  ┌─────────────────────────┐    │
│  │ 🌐  Página Web ComSoc   │    │
│  └─────────────────────────┘    │
│                                 │
│  ── Redes Sociales ────────     │
│  ┌─────────────────────────┐    │
│  │ 📸  Instagram            │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ ▶️  YouTube              │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ 💼  LinkedIn             │    │
│  └─────────────────────────┘    │
│                                 │
│  ── Comunidad ─────────────     │
│  ┌─────────────────────────┐    │
│  │ ✉️  Únete al Capítulo ★  │    │  ← Destacado (borde gradiente)
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ 💬  Grupo de WhatsApp    │    │
│  └─────────────────────────┘    │
│                                 │
│  ── Recursos IEEE ─────────     │
│  ┌─────────────────────────┐    │
│  │ 📚  IEEE Xplore          │    │
│  └─────────────────────────┘    │
│  ┌─────────────────────────┐    │
│  │ 📡  ComSoc Global        │    │
│  └─────────────────────────┘    │
│                                 │
│  ─────────────────────────────  │
│  © 2026 IEEE ComSoc Univalle   │
│  comsoc.ieeeunivalle.link      │
└─────────────────────────────────┘
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Node.js** | LTS (≥18) | Runtime del entorno de desarrollo |
| **Astro** | ^5.x | Framework SSG (Static Site Generation) |
| **TailwindCSS** | ^3.4 | Utilidades CSS y sistema de diseño |
| **TypeScript** | ^5.x | Tipado estático |
| **PostCSS** | ^8.x | Procesamiento CSS |
| **Autoprefixer** | ^10.x | Prefijos de compatibilidad |

---

## ✅ Criterios de Aceptación

- [ ] Los enlaces se cargan dinámicamente desde archivos JSON en `src/content/links/`
- [ ] Cada archivo JSON contiene: `titulo`, `url`, `icono`, `categoria` (y opcionalmente `orden`, `destacado`, `descripcion`)
- [ ] Los enlaces se agrupan visualmente por categoría
- [ ] Los íconos soportan formatos PNG y SVG
- [ ] La estética coincide con el sitio principal (dark mode, glassmorfismo, colores IEEE, tipografía Space Grotesk/Inter)
- [ ] La página es completamente responsiva (mobile-first)
- [ ] Agregar un nuevo enlace es tan simple como crear un nuevo archivo `.json`
- [ ] El sitio genera HTML estático (rendimiento óptimo)
- [ ] Los enlaces se abren en nueva pestaña con `rel="noopener noreferrer"`
