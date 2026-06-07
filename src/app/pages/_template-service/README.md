# Cómo agregar un nuevo servicio a Hunter 24/7

## Pasos

### 1. Agregar el servicio al array de datos

Abrir `src/app/core/data/services.data.ts` y descomentar la plantilla al final del array `SERVICES`, completando todos los campos:

```typescript
{
  slug: 'nombre-del-servicio',        // Solo minúsculas y guiones (ej: 'control-acceso')
  name: 'Nombre del Servicio',        // Nombre visible al usuario
  shortDesc: 'Descripción corta.',    // 1-2 frases. Aparece en la tarjeta del home.
  fullDesc: 'Descripción completa.', // Mínimo 3-4 frases. Aparece en la página de detalle.
  icon: 'nombre-icono',              // Nombre del archivo SVG en src/assets/icons/ (sin extensión)
  heroImage: 'imagen.jpg',           // Nombre del archivo en src/assets/images/servicios/
  features: [
    'Característica o beneficio 1',
    'Característica o beneficio 2',
    'Característica o beneficio 3',
  ],
  cta: 'Texto del botón de acción',  // Ej: 'Cotizar servicio de vigilancia'
},
```

### 2. Agregar imagen hero

Copiar la imagen del servicio a:
`src/assets/images/servicios/<nombre-imagen>.jpg`

Tamaño recomendado: 1600×900px (16:9), JPG optimizado, peso máximo 300KB.

### 3. (Opcional) Agregar ícono SVG

Copiar el ícono del servicio a:
`src/assets/icons/<nombre-icono>.svg`

Tamaño recomendado: 48×48px, monocromo (el color lo aplica CSS).

### 4. Verificar la página generada

Ejecutar el servidor de desarrollo:
```bash
ng serve
```

Navegar a `http://localhost:4200/servicios/<slug>` — la página se genera automáticamente desde el array de datos.

### 5. El formulario de contacto se actualiza automáticamente

El select de servicios en `/contacto` se genera automáticamente desde el mismo array `SERVICES`. No requiere cambios manuales.

### 6. El navbar también se actualiza automáticamente

El dropdown de servicios en el navbar también se genera automáticamente. No requiere cambios manuales.

---

## Puntos de integración futura con Backend

Cuando se integre el backend, buscar todos los comentarios `// TODO: backend` en el proyecto:

```bash
grep -r "TODO: backend" src/
```

Los puntos principales son:

| Archivo | Descripción |
|---|---|
| `contact/contact.component.ts` | Reemplazar `mailto:` con llamada HTTP al endpoint `/api/contact` |
| `footer/footer.component.ts` | Cargar datos de contacto desde configuración del servidor |
| `gallery/gallery.component.ts` | Cargar imágenes desde API o CMS |
| `core/data/services.data.ts` | Migrar a endpoint `/api/services` con caché en cliente |
| `core/models/service.model.ts` | Agregar `pricingTier` y `contactEmail` por servicio |

---

## Estructura del proyecto

```
src/app/
├── core/
│   ├── models/service.model.ts     ← interfaz IService
│   └── data/services.data.ts       ← fuente de verdad de servicios
├── shared/components/
│   ├── navbar/                     ← navbar con dropdown dinámico
│   ├── footer/                     ← footer con links dinámicos
│   ├── service-card/               ← tarjeta usada en el home
│   └── cta-banner/                 ← banner CTA reutilizable
└── pages/
    ├── home/                       ← página principal
    ├── service-detail/             ← página dinámica /servicios/:slug
    ├── contact/                    ← formulario de cotización
    └── _template-service/          ← este directorio (instrucciones)
```
