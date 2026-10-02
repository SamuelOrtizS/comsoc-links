# 🔗 ComSoc Links — IEEE ComSoc Univalle

Portal de enlaces y accesos directos oficiales del **Capítulo Estudiantil IEEE ComSoc de la Universidad del Valle**.

Construido con **NodeJS**, **Astro 5**, **TailwindCSS 4** e iconos optimizados mediante **Iconify** / SVG / PNG.

---

## 🚀 Cómo agregar o editar enlaces

Cada enlace es un archivo individual en formato `.json` ubicado en la carpeta:
```
src/content/links/
```

### Estructura de un archivo de enlace:

```json
{
  "titulo": "Instagram Oficial",
  "url": "https://www.instagram.com/comsoc_univalle/",
  "icono": "simple-icons:instagram",
  "categoria": "Redes Sociales",
  "orden": 1,
  "destacado": false,
  "descripcion": "Noticias, fotos, convocatorias e infografías."
}
```

### Opciones de íconos admitidas en `"icono"`:
1. **Ruta a archivo PNG o SVG local:** e.g. `/img/icons/mi-icono.svg` o `/img/logos/logo-comsoc.svg` (colocado en `public/`).
2. **Íconos de Iconify:** (Cualquiera de los sets incluidos: `mdi`, `simple-icons`, `material-symbols`):
   - `simple-icons:instagram`, `simple-icons:github`, `simple-icons:linkedin`
   - `mdi:web`, `mdi:whatsapp`, `mdi:discord`
   - `material-symbols:group-add-rounded`, `material-symbols:event-available-outline`

### Campos opcionales:
- `"orden"`: Número para ordenar dentro de la categoría (1, 2, 3...).
- `"destacado"`: `true` para resaltar con borde cyan y efecto glow.
- `"descripcion"`: Subtítulo explicativo corto.

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:3001
npm run dev

# Generar versión estática para producción (dist/)
npm run build

# Previsualizar la versión compilada
npm run preview
```
