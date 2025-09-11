# 🎨 Guía de Responsive Design - Growth Bizon

## 📱 Breakpoints Principales

```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Mobile Landscape */
md: 768px   /* Tablet Portrait */
lg: 1024px  /* Tablet Landscape */
xl: 1280px  /* Desktop */
2xl: 1536px /* Large Desktop */
```

## 🛠️ Clases Responsive Disponibles

### Texto Responsive
```css
.text-responsive-xs    /* text-xs sm:text-sm */
.text-responsive-sm    /* text-sm sm:text-base */
.text-responsive-base  /* text-base sm:text-lg */
.text-responsive-lg    /* text-lg sm:text-xl */
.text-responsive-xl    /* text-xl sm:text-2xl */
.text-responsive-2xl   /* text-2xl sm:text-3xl */
.text-responsive-3xl   /* text-3xl sm:text-4xl */
.text-responsive-4xl   /* text-4xl sm:text-5xl */
.text-responsive-5xl   /* text-5xl sm:text-6xl */
```

### Espaciado Responsive
```css
.space-responsive-sm   /* space-y-2 sm:space-y-3 */
.space-responsive-md   /* space-y-3 sm:space-y-4 */
.space-responsive-lg   /* space-y-4 sm:space-y-6 */
.space-responsive-xl   /* space-y-6 sm:space-y-8 */

.p-responsive-sm       /* p-3 sm:p-4 */
.p-responsive-md       /* p-4 sm:p-6 */
.p-responsive-lg       /* p-6 sm:p-8 */
.p-responsive-xl       /* p-8 sm:p-12 */

.m-responsive-sm       /* m-2 sm:m-3 */
.m-responsive-md       /* m-3 sm:m-4 */
.m-responsive-lg       /* m-4 sm:m-6 */
.m-responsive-xl       /* m-6 sm:m-8 */
```

### Grid Responsive
```css
.grid-responsive-1     /* grid-cols-1 */
.grid-responsive-2     /* grid-cols-1 sm:grid-cols-2 */
.grid-responsive-3     /* grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */
.grid-responsive-4     /* grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 */

.gap-responsive-sm     /* gap-2 sm:gap-3 */
.gap-responsive-md     /* gap-3 sm:gap-4 */
.gap-responsive-lg     /* gap-4 sm:gap-6 */
.gap-responsive-xl     /* gap-6 sm:gap-8 */
```

### Flex Responsive
```css
.flex-responsive-col   /* flex-col sm:flex-row */
.flex-responsive-row   /* flex-row sm:flex-col */
```

### Iconos Responsive
```css
.icon-responsive-sm    /* w-3 h-3 sm:w-4 sm:h-4 */
.icon-responsive-md    /* w-4 h-4 sm:w-5 sm:h-5 */
.icon-responsive-lg    /* w-5 h-5 sm:w-6 sm:h-6 */
.icon-responsive-xl    /* w-6 h-6 sm:w-8 sm:h-8 */
```

### Botones Responsive
```css
.btn-responsive-sm     /* px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base */
.btn-responsive-md     /* px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base */
.btn-responsive-lg     /* px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg */
```

### Contenedores Responsive
```css
.container-responsive  /* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */
.section-responsive    /* py-8 sm:py-12 lg:py-16 */
.section-responsive-lg /* py-12 sm:py-16 lg:py-20 */
.hero-responsive       /* pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 */
```

## 📋 Patrones Comunes

### 1. Header Responsive
```jsx
<header className="bg-white shadow-lg sticky top-0 z-50">
  <div className="container-responsive">
    <div className="flex justify-between items-center py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-8 h-8 sm:w-10 sm:h-10" src="/logo.png" alt="Logo" />
        <span className="text-lg sm:text-xl font-bold text-bizon-dark-blue ml-2 sm:ml-3">
          Growth Bizon
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-responsive items-center space-x-8">
        <Link className="text-bizon-dark-blue hover:text-bizon-blue font-medium transition-colors">
          Inicio
        </Link>
        {/* ... más enlaces */}
      </nav>

      {/* Mobile Menu Button */}
      <button className="nav-mobile text-bizon-dark-blue">
        <FaBars className="w-6 h-6" />
      </button>
    </div>
  </div>
</header>
```

### 2. Hero Section Responsive
```jsx
<section className="hero-responsive">
  <div className="container-responsive">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Content */}
      <div className="text-center lg:text-left order-2 lg:order-1">
        <h1 className="text-responsive-4xl font-bold text-bizon-dark-blue mb-4 sm:mb-6">
          Título Principal
        </h1>
        <p className="text-responsive-lg text-bizon-gray mb-6 sm:mb-8">
          Descripción del servicio
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <button className="btn-responsive-lg">
            Call to Action
          </button>
        </div>
      </div>

      {/* Visual */}
      <div className="order-1 lg:order-2 mb-8 lg:mb-0">
        <img className="img-responsive" src="/hero-image.png" alt="Hero" />
      </div>
    </div>
  </div>
</section>
```

### 3. Cards Responsive
```jsx
<div className="grid-responsive-3 gap-responsive-lg">
  {items.map((item) => (
    <div className="card card-responsive hover:shadow-xl transition-all duration-300">
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-responsive-lg bg-gradient-to-r from-bizon-blue to-bizon-light-blue rounded-xl flex items-center justify-center flex-shrink-0">
          <item.icon className="icon-responsive-lg text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-responsive-xl font-bold text-bizon-dark-blue mb-2">
            {item.title}
          </h3>
          <p className="text-responsive-sm text-bizon-gray">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
```

### 4. Formularios Responsive
```jsx
<form className="form-responsive">
  <div className="grid-responsive-2 gap-responsive-md">
    <div>
      <label className="block text-responsive-sm font-medium text-bizon-dark-blue mb-2">
        Nombre
      </label>
      <input 
        className="input-field input-responsive"
        type="text"
        placeholder="Tu nombre"
      />
    </div>
    <div>
      <label className="block text-responsive-sm font-medium text-bizon-dark-blue mb-2">
        Email
      </label>
      <input 
        className="input-field input-responsive"
        type="email"
        placeholder="tu@email.com"
      />
    </div>
  </div>
  
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
    <button className="btn-responsive-md">
      Enviar
    </button>
  </div>
</form>
```

## 🎯 Mejores Prácticas

### 1. Mobile-First Approach
```jsx
// ✅ Correcto - Mobile first
className="text-sm sm:text-base lg:text-lg"

// ❌ Incorrecto - Desktop first
className="text-lg lg:text-base sm:text-sm"
```

### 2. Orden de Elementos
```jsx
// ✅ Correcto - Cambiar orden en móvil
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div className="order-2 lg:order-1">Content</div>
  <div className="order-1 lg:order-2">Visual</div>
</div>
```

### 3. Ocultar/Mostrar Elementos
```jsx
// ✅ Ocultar en móvil, mostrar en desktop
<div className="hidden md:block">Desktop Only</div>

// ✅ Mostrar en móvil, ocultar en desktop
<div className="md:hidden">Mobile Only</div>
```

### 4. Espaciado Consistente
```jsx
// ✅ Usar clases responsive
className="space-responsive-lg"

// ❌ Espaciado fijo
className="space-y-6"
```

## 📱 Casos de Uso Específicos

### Dashboard Responsive
```jsx
<div className="grid dashboard-responsive gap-responsive-lg">
  {/* Stats Cards */}
  <div className="card card-responsive">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-responsive-sm text-bizon-gray">Ventas</p>
        <p className="text-responsive-2xl font-bold text-bizon-dark-blue">$12,345</p>
      </div>
      <div className="w-responsive-lg bg-green-100 rounded-lg flex items-center justify-center">
        <FaChartLine className="icon-responsive-lg text-green-600" />
      </div>
    </div>
  </div>
</div>
```

### Testimonials Responsive
```jsx
<div className="grid testimonials-responsive gap-responsive-lg">
  {testimonials.map((testimonial) => (
    <div className="card card-responsive">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="icon-responsive-sm text-bizon-blue" />
        ))}
      </div>
      <p className="text-responsive-sm text-bizon-gray mb-6">
        "{testimonial.text}"
      </p>
      <div>
        <div className="font-semibold text-bizon-dark-blue text-responsive-sm">
          {testimonial.name}
        </div>
        <div className="text-bizon-gray text-responsive-xs">
          {testimonial.company}
        </div>
      </div>
    </div>
  ))}
</div>
```

### Pricing Responsive
```jsx
<div className="grid pricing-responsive gap-responsive-lg">
  {plans.map((plan) => (
    <div className="card card-responsive">
      <h3 className="text-responsive-xl font-bold text-bizon-dark-blue mb-2">
        {plan.name}
      </h3>
      <div className="text-responsive-3xl font-bold text-bizon-blue mb-4">
        {plan.price}
      </div>
      <ul className="list-responsive mb-6">
        {plan.features.map((feature) => (
          <li className="flex items-center space-x-3">
            <FaCheck className="icon-responsive-sm text-green-500" />
            <span className="text-responsive-sm text-bizon-gray">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="btn-responsive-lg w-full">
        Seleccionar Plan
      </button>
    </div>
  ))}
</div>
```

## 🔧 Herramientas de Desarrollo

### 1. Chrome DevTools
- **Device Toolbar**: `Ctrl+Shift+M`
- **Responsive Design Mode**: Simular diferentes dispositivos
- **Network Throttling**: Probar velocidad de carga

### 2. Extensiones Útiles
- **Responsive Viewer**: Ver múltiples breakpoints
- **Mobile/Responsive Web Design Tester**
- **Window Resizer**

### 3. Testing
```jsx
// Componente de testing responsive
const ResponsiveTest = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-black text-white p-2 rounded text-xs z-50">
      {windowSize.width} x {windowSize.height}
    </div>
  );
};
```

## 📊 Checklist de Responsive

### ✅ Mobile (320px - 767px)
- [ ] Texto legible sin zoom
- [ ] Botones táctiles (mínimo 44px)
- [ ] Espaciado adecuado entre elementos
- [ ] Navegación móvil funcional
- [ ] Imágenes optimizadas
- [ ] Formularios fáciles de usar

### ✅ Tablet (768px - 1023px)
- [ ] Layout adaptado a pantalla media
- [ ] Grid de 2 columnas máximo
- [ ] Menú hamburguesa o navegación horizontal
- [ ] Contenido centrado y legible

### ✅ Desktop (1024px+)
- [ ] Layout completo con múltiples columnas
- [ ] Navegación horizontal completa
- [ ] Hover effects y animaciones
- [ ] Sidebar y elementos adicionales

## 🚀 Optimización

### Performance
```jsx
// Lazy loading de imágenes
<img 
  loading="lazy"
  className="img-responsive"
  src="/image.jpg"
  alt="Description"
/>

// Conditional rendering
{!isMobile && <HeavyComponent />}
```

### Accessibility
```jsx
// Focus states
<button className="focus:ring-2 focus:ring-bizon-blue focus:outline-none">
  Click me
</button>

// Touch targets
<button className="min-h-[44px] min-w-[44px]">
  Touch me
</button>
```

---

## 📚 Recursos Adicionales

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Responsive Design Patterns](https://responsivedesign.is/)

---

**¡Recuerda: Mobile-First es la clave del éxito! 📱✨**

