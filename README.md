# Portfolio - Eneko Galan

Portfolio personal desarrollado con Astro.

## 🚀 Tecnologías

- **Astro** - Framework web moderno con componentes nativos
- **Three.js** - Visualización 3D
- **AOS** - Animaciones al hacer scroll
- **Material-UI** - Componentes de interfaz

## 📁 Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro          # Layout principal
├── pages/
│   └── index.astro          # Página principal
├── components/
│   ├── Header.astro          # Header con animaciones
│   ├── Tools.astro           # Stack tecnológico
│   ├── ProjectList.astro     # Lista de proyectos
│   └── Contact.astro         # Información de contacto
└── public/                   # Assets estáticos
    └── images/               # Imágenes del portfolio
```

## 🛠️ Comandos

### Desarrollo
```bash
npm run dev
```

### Construcción
```bash
npm run build
```

### Vista previa
```bash
npm run preview
```

### Despliegue
```bash
npm run deploy
```

## ✨ Características

- **Rendimiento Optimizado**: Generación estática con Astro
- **SEO Mejorado**: Renderizado del lado del servidor
- **Componentes 100% Astro**: Todos los componentes son nativos de Astro
- **JavaScript Vanilla**: Sin dependencias de React
- **Animaciones**: AOS para animaciones al hacer scroll
- **3D**: Globo interactivo con Three.js
- **Responsive**: Diseño adaptable a todos los dispositivos

## 📦 Dependencias Principales

- `astro` - Framework principal
- `three` - Gráficos 3D
- `aos` - Animaciones al hacer scroll
- `@mui/material` - Componentes de Material Design
- `gh-pages` - Despliegue en GitHub Pages

## 🌐 Despliegue

El portfolio está configurado para desplegarse en GitHub Pages usando `gh-pages`.

## 📝 Notas

- El proyecto usa el patrón de "component islands" de Astro
- Solo los componentes interactivos se hidratan en el cliente
- Optimizado para rendimiento y SEO