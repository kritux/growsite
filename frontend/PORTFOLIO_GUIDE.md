# 📁 Guía del Portafolio - Growth Bizon

## 🎯 Cómo Funciona el Portafolio

El portafolio está construido con datos estáticos en el archivo `frontend/src/components/pages/Portfolio.jsx`. Cada proyecto se define como un objeto JavaScript con propiedades específicas.

## 📝 Estructura de un Proyecto

```jsx
{
  id: 1,                           // ID único (número)
  title: "Título del Proyecto",    // Nombre del proyecto
  category: "redes-sociales",      // Categoría para filtros
  client: "Nombre del Cliente",    // Cliente (o "Cliente Confidencial")
  description: "Descripción...",   // Descripción del proyecto
  image: "URL_de_imagen",          // URL de la imagen principal
  results: ["Resultado 1", "..."], // Array de resultados obtenidos
  tags: ["Tag1", "Tag2"],          // Array de tecnologías/herramientas
  year: "2024",                    // Año del proyecto
  featured: true                   // ¿Es proyecto destacado? (opcional)
}
```

## 🏷️ Categorías Disponibles

- `"redes-sociales"` - Gestión de redes sociales
- `"web-development"` - Desarrollo web
- `"branding"` - Branding y diseño
- `"mobile-apps"` - Aplicaciones móviles

## 🖼️ Cómo Agregar Imágenes

### Opción 1: Imágenes Externas (Recomendado)
```jsx
image: "https://ejemplo.com/imagen.jpg"
```

### Opción 2: Imágenes Locales
1. Sube tu imagen a `frontend/public/images/portfolio/`
2. Usa la ruta: `image: "/images/portfolio/tu-imagen.jpg"`

## 📋 Ejemplos de Proyectos Reales

### Proyecto de Redes Sociales
```jsx
{
  id: 10,
  title: "Gestión Instagram - Tienda de Ropa",
  category: "redes-sociales",
  client: "Moda Local",
  description: "Estrategia completa de Instagram con contenido visual atractivo, stories diarios y campañas de engagement que aumentaron significativamente la interacción.",
  image: "https://ejemplo.com/imagen-instagram.jpg",
  results: ["+200% engagement", "+150% seguidores", "+80% ventas"],
  tags: ["Instagram", "Contenido Visual", "Stories", "Engagement"],
  year: "2024",
  featured: true
}
```

### Proyecto de Desarrollo Web
```jsx
{
  id: 11,
  title: "Sitio Web Corporativo - Empresa Local",
  category: "web-development",
  client: "Empresa ABC",
  description: "Desarrollo de sitio web corporativo responsivo con sistema de contacto, blog integrado y optimización SEO.",
  image: "https://ejemplo.com/imagen-web.jpg",
  results: ["+300% tráfico", "Mejor SEO", "Responsive design"],
  tags: ["HTML", "CSS", "JavaScript", "SEO"],
  year: "2024"
}
```

### Proyecto de Branding
```jsx
{
  id: 12,
  title: "Identidad Visual - Startup",
  category: "branding",
  client: "Startup XYZ",
  description: "Creación de identidad visual completa incluyendo logo, paleta de colores, tipografías y guía de marca.",
  image: "https://ejemplo.com/imagen-branding.jpg",
  results: ["Brand recognition", "Consistencia visual", "Aplicaciones"],
  tags: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
  year: "2024"
}
```

## 🚀 Cómo Agregar un Nuevo Proyecto

1. **Abre el archivo**: `frontend/src/components/pages/Portfolio.jsx`
2. **Busca el array `projects`** (línea ~29)
3. **Agrega tu proyecto** al final del array, antes del `];`
4. **Guarda el archivo**
5. **Haz commit y push** a GitHub

### Ejemplo de Adición:
```jsx
const projects = [
  // ... proyectos existentes ...
  
  // TU NUEVO PROYECTO
  {
    id: 13, // Siguiente número disponible
    title: "Tu Proyecto",
    category: "redes-sociales", // o la categoría que corresponda
    client: "Cliente Confidencial", // o nombre real
    description: "Descripción de lo que hiciste...",
    image: "https://ejemplo.com/tu-imagen.jpg",
    results: ["+100% algo", "Resultado 2", "Resultado 3"],
    tags: ["Herramienta1", "Herramienta2", "Tecnología"],
    year: "2024",
    featured: false // true si quieres destacarlo
  }
];
```

## 📊 Consejos para Resultados

### Redes Sociales:
- `"+X% engagement"`
- `"+X seguidores"`
- `"+X% ventas"`
- `"ROAS X.X"`
- `"+X% alcance"`

### Desarrollo Web:
- `"+X% tráfico"`
- `"+X% conversiones"`
- `"Tiempo de carga Xs"`
- `"SEO mejorado"`
- `"Responsive design"`

### Branding:
- `"Brand recognition"`
- `"Consistencia visual"`
- `"Aplicaciones múltiples"`
- `"Modernización"`

## 🔒 Privacidad de Clientes

Si no puedes revelar el nombre del cliente, usa:
- `"Cliente Confidencial"`
- `"Empresa Local"`
- `"Startup Tech"`
- `"Cliente B2B"`

## 📱 Responsive y Optimización

- **Imágenes**: Usa imágenes de 800x600px mínimo
- **Descripción**: Máximo 150 caracteres
- **Tags**: Máximo 4-5 tags
- **Resultados**: Máximo 3-4 resultados

## 🎨 Personalización de Filtros

Si quieres agregar nuevas categorías, modifica el array `filters` (línea ~21):

```jsx
const filters = [
  { id: 'todos', name: 'Todos', icon: <FaRocket /> },
  { id: 'redes-sociales', name: 'Redes Sociales', icon: <FaInstagram /> },
  { id: 'web-development', name: 'Desarrollo Web', icon: <FaGlobe /> },
  { id: 'branding', name: 'Branding', icon: <FaPalette /> },
  { id: 'mobile-apps', name: 'Apps Móviles', icon: <FaMobile /> },
  { id: 'nueva-categoria', name: 'Nueva Categoría', icon: <FaNuevoIcono /> }
];
```

## 🚀 Deployment

Después de agregar tus proyectos:
1. `git add .`
2. `git commit -m "feat: Agregar nuevos proyectos al portafolio"`
3. `git push origin main`

Los cambios se reflejarán automáticamente en Netlify.

---

¿Necesitas ayuda agregando un proyecto específico? ¡Dime qué proyecto quieres agregar y te ayudo a estructurarlo!
