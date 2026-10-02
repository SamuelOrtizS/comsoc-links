export interface LinkItem {
  titulo: string;
  url: string;
  icono: string; // SVG code, PNG/SVG path or iconify name
  categoria: string;
  orden?: number;
  destacado?: boolean;
  descripcion?: string;
  slug?: string;
}

export interface CategoryGroup {
  name: string;
  links: LinkItem[];
}

export function getAllLinks(): CategoryGroup[] {
  // Vite's import.meta.glob to load all JSON files from src/content/links/
  const linkModules = import.meta.glob<Record<string, any>>('../content/links/*.json', {
    eager: true,
  });

  const links: LinkItem[] = [];

  for (const [path, content] of Object.entries(linkModules)) {
    const rawData = content.default || content;
    const slug = path.split('/').pop()?.replace('.json', '') || '';

    links.push({
      titulo: rawData.titulo ?? 'Enlace sin título',
      url: rawData.url ?? '#',
      icono: rawData.icono ?? 'mdi:link-variant',
      categoria: rawData.categoria ?? 'Otros',
      orden: typeof rawData.orden === 'number' ? rawData.orden : 99,
      destacado: Boolean(rawData.destacado),
      descripcion: rawData.descripcion,
      slug,
    });
  }

  // Predefined preferred category order
  const categoryOrder = [
    'Oficial',
    'Comunidad',
    'Redes Sociales',
    'Eventos & Convocatorias',
    'Recursos IEEE',
    'Otros',
  ];

  // Group by category
  const groupsMap = new Map<string, LinkItem[]>();

  for (const link of links) {
    const cat = link.categoria.trim();
    if (!groupsMap.has(cat)) {
      groupsMap.set(cat, []);
    }
    groupsMap.get(cat)!.push(link);
  }

  // Sort links within each category by 'orden' ascending, then by 'titulo'
  for (const [, list] of groupsMap) {
    list.sort((a, b) => {
      if ((a.orden ?? 99) !== (b.orden ?? 99)) {
        return (a.orden ?? 99) - (b.orden ?? 99);
      }
      return a.titulo.localeCompare(b.titulo);
    });
  }

  // Convert map to sorted CategoryGroup array
  const sortedCategories = Array.from(groupsMap.keys()).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b);
  });

  return sortedCategories.map((name) => ({
    name,
    links: groupsMap.get(name) || [],
  }));
}
