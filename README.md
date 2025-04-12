# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
# rosana-couching-page

# Rosana Coaching Page

## Estructura del Proyecto

```
src/
├── assets/          # Archivos estáticos (imágenes, etc.)
├── components/      # Componentes de la aplicación
│   ├── astro/      # Componentes Astro
│   │   ├── AboutSection.astro
│   │   ├── Button.astro
│   │   ├── ContactSection.astro
│   │   ├── HeroSection.astro
│   │   ├── ProcessSection.astro
│   │   └── ServicesSection.astro
│   │
│   └── react/      # Componentes React
│       ├── ui/     # Componentes de UI reutilizables
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── input.tsx
│       │   └── textarea.tsx
│       │
│       ├── NavBar.tsx
│       ├── Footer.tsx
│       └── [Otros componentes de sección].tsx
│
├── layouts/        # Layouts de Astro
├── pages/         # Páginas de la aplicación
├── styles/        # Estilos globales
└── lib/           # Utilidades y configuraciones

```

## Paletas de Color

### 🌬️ BRISA
- Color principal: `#D6E6E1`
- Tonos complementarios:
  - `#F8FAF9`
  - `#EEF4F2`
  - `#E6F1EE`
  - `#DCEBE7`

### 🌿 NATURALEZA
- Color principal: `#C7CDB6`
- Tonos complementarios:
  - `#F8F8F5`
  - `#F6F6F2`
  - `#EBEDE2`
  - `#DCE1D3`

### 🔮 MAGIA
- Color principal: `#BBAEBE`
- Tonos complementarios:
  - `#F3EFF3`
  - `#E5DDE7`
  - `#D5C8D8`
  - `#C8B6C9`

### 🤍 PUREZA
- Color principal: `#E4DEE4`
- Tonos complementarios:
  - `#FAF9FA`
  - `#F4F1F4`
  - `#F0ECF0`
  - `#EAE5EA`

## Arquitectura

La aplicación está construida utilizando Astro como framework principal, con componentes React para funcionalidades interactivas. La estructura sigue un patrón de diseño por secciones, donde cada sección de la página está modularizada en su propio componente.

### Componentes Principales

1. **Secciones Astro**
   - HeroSection: Sección principal de bienvenida
   - AboutSection: Información sobre Rosana
   - ServicesSection: Servicios ofrecidos
   - ProcessSection: Proceso de trabajo
   - ContactSection: Formulario de contacto

2. **Componentes React**
   - NavBar: Navegación principal
   - Footer: Pie de página
   - UI Components: Componentes reutilizables (botones, tarjetas, etc.)

### Tecnologías Utilizadas

- Astro
- React
- Tailwind CSS
- TypeScript

## Convenciones de Código

1. **Nomenclatura**
   - Componentes: PascalCase
   - Archivos de componentes: PascalCase
   - Utilidades y funciones: camelCase

2. **Estilos**
   - Uso de Tailwind CSS para estilos
   - Clases personalizadas en global.css
   - Paletas de color predefinidas

3. **Componentes**
   - Componentes Astro para contenido estático
   - Componentes React para interactividad
   - Componentes UI reutilizables en /react/ui
