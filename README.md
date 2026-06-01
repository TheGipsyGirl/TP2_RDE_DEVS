 # 🚀 RDE Devs – TP2 React

## 🔗 Enlace al Proyecto Desplegado

| Recurso | Link |
|---|---|
| 🌐 Sitio en producción | [https://tp-2-rde-devs.vercel.app/](https://tp-2-rde-devs.vercel.app/) |
| 📁 Repositorio | [https://github.com/TheGipsyGirl/TP2_RDE_DEVS](https://github.com/TheGipsyGirl/TP2_RDE_DEVS) |


---
 
 ## 📄 Descripción del Proyecto

RDE Devs es la evolución del Trabajo Práctico 1 de Desarrollo Web. El proyecto consistió en migrar el sitio grupal desarrollado originalmente con HTML, CSS y JavaScript hacia una aplicación React basada en componentes reutilizables y navegación mediante React Router.

Durante esta segunda etapa se implementó una arquitectura SPA (Single Page Application), permitiendo una navegación más fluida y una mejor organización del código.

Además de conservar las páginas personales de cada integrante, se incorporaron nuevas funcionalidades como un Dashboard principal, integración con API externa, Galería de imágenes, Explorador JSON, Bitácora de desarrollo y sección de Arquitectura.

---

 ## 👥 Integrantes

| Integrante          | GitHub                            |
| ------------------- | --------------------------------- |
| Agustina Brandemann | https://github.com/AgustinaBran   |
| Valeria Natucci     | https://github.com/TheGipsyGirl   |
| Matías González     | https://github.com/Matises13      |
| Luis Specterman     | https://github.com/SpectermanLuis |

---

 ## 🛠 Tecnologías Utilizadas

| Categoría | Tecnología |
|---|---|
| Framework JS | React 18 |
| Enrutamiento | React Router DOM v6 |
| Lenguajes | JavaScript (ES6+), JSX, HTML5, CSS3 |
| Build Tool | Vite |
| Tipografías | Google Fonts (Raleway) |
| Iconografía | SVG personalizados (assets/icons) |
| API Externa | The Movie Database (TMDB) |
| Control de versiones | Git + GitHub |
| Deploy | Vercel |

---
 ## 🏗 Arquitectura del Proyecto

```
TP2_RDE_DEVS/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── img/
│       ├── agustina/       # Imágenes del perfil de Agustina
│       ├── img_luis/       # Imágenes del perfil de Luis
│       ├── matias/         # Imágenes del perfil de Matías
│       └── valeria/        # Imágenes del perfil de Valeria
│           ├── discos/
│           └── peliculas/
├── src/
│   ├── assets/
│   │   └── icons/
│   │       └── luis/       # Íconos SVG personalizados
│   ├── components/
│   │   ├── Layout.jsx      # Estructura base (Sidebar + Outlet)
│   │   ├── ProfileCard.jsx # Tarjeta de perfil reutilizable
│   │   └── Sidebar.jsx     # Navegación lateral
│   ├── pages/
│   │   ├── Home.jsx        # Dashboard principal
│   │   ├── Agustina.jsx    # Perfil personal
│   │   ├── Valeria.jsx     # Perfil personal
│   │   ├── Matias.jsx      # Perfil personal
│   │   ├── Luis.jsx        # Perfil personal
│   │   ├── ApiPage.jsx     # Películas con TMDB API
│   │   ├── JsonExplorer.jsx# Explorador JSON con filtros
│   │   ├── Galeria.jsx     # Galería con Lightbox
│   │   ├── Bitacora.jsx    # Bitácora de desarrollo
│   │   └── Arquitectura.jsx# Árbol de renderizado
│   ├── styles/
│   │   ├── global.css      # Variables CSS y estilos base
│   │   ├── sidebar.css
│   │   ├── home.css
│   │   ├── agustina.css
│   │   ├── valeria.css
│   │   ├── matias.css
│   │   ├── luis.css
│   │   ├── api.css
│   │   ├── galeria.css
│   │   ├── jsonExplorer.css
│   │   ├── bitacora.css
│   │   └── arquitectura.css
│   ├── App.jsx             # Definición de rutas con React Router
│   └── main.jsx            # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```
---

 ## 🔄 Migración TP1 → TP2

| TP1                         | TP2                   |
| --------------------------- | --------------------- |
| HTML                        | React                 |
| CSS Global                  | CSS por componente    |
| JavaScript tradicional      | React Hooks           |
| Navegación mediante enlaces | React Router          |
| Sitio multipágina           | SPA                   |
| Proyecto estático           | Dashboard interactivo |

---
### Navegación principal

- [Home](https://tp-2-rde-devs.vercel.app/)
- [Valeria](https://tp-2-rde-devs.vercel.app/valeria)
- [Agustina](https://tp-2-rde-devs.vercel.app/agustina)
- [Matías](https://tp-2-rde-devs.vercel.app/matias)
- [Luis](https://tp-2-rde-devs.vercel.app/luis)
- [API](https://tp-2-rde-devs.vercel.app/api)
- [JSON Explorer](https://tp-2-rde-devs.vercel.app/json)
- [Galería](https://tp-2-rde-devs.vercel.app/galeria)
- [Bitácora](https://tp-2-rde-devs.vercel.app/bitacora)
- [Arquitectura](https://tp-2-rde-devs.vercel.app/arquitectura)

---

## ⚙️ JavaScript / React – Funciones Dinámicas y Componentes Clave

### 1. React Router + Layout (`App.jsx`, `Layout.jsx`, `Sidebar.jsx`)

Toda la navegación del sitio utiliza **React Router DOM v6** con rutas anidadas. El componente `Layout` actúa como wrapper persistente (con el `Sidebar` siempre visible) y renderiza la página activa a través de `<Outlet />`.
 Home Dashboard 
Pantalla principal que centraliza el acceso a todas las secciones del proyecto.

![Pantalla Principal](./docs/screenshots/inicio-01.png)

![Pantalla Principal](./docs/screenshots/inicio-02.png)

```
/ (Home)
├── /valeria
├── /agustina
├── /matias
├── /luis
├── /api
├── /json
├── /galeria
├── /bitacora
└── /arquitectura
```

---

### 2. API Externa – Películas Populares (`ApiPage.jsx`)

Consume la **API de The Movie Database (TMDB)** para mostrar películas populares con paginación dinámica.

**Hooks utilizados:** `useState`, `useEffect`

**Funciones clave:**
- `fetchMovies()` — llamada asíncrona con `fetch` al endpoint `/movie/popular`
- Estados de loading, error y datos
- Paginación controlada con botones Anterior / Siguiente e input numérico directo

![Api](./docs/screenshots/api-01.png)

![Api](./docs/screenshots/api-02.png)

![Api](./docs/screenshots/api-03.png)

---

### 3. JSON Explorer (`JsonExplorer.jsx`)

Explora un dataset local de 20 objetos con búsqueda en tiempo real y filtros múltiples.

**Hooks utilizados:** `useState`, `useMemo`

**Funciones clave:**
- Búsqueda por texto que filtra sobre nombre, rol, tecnología, nivel y ciudad simultáneamente
- Filtros por categoría de tecnología y nivel
- `useMemo` para optimizar el recálculo del array filtrado

![JSON Explorer](./docs/screenshots/json-01.png)

![JSON Explorer - Filtro 1](./docs/screenshots/json-02.png)

![JSON Explorer - Filtro 2](./docs/screenshots/json-03.png)

---

### 4. Galería con Lightbox (`Galeria.jsx`)

Galería interactiva con 15 imágenes, filtro por categorías y visualización en Lightbox con zoom.

**Hooks utilizados:** `useState`, `useEffect`, `useCallback`

**Funciones clave:**
- Filtrado por categoría (Naturaleza, Arquitectura, Tecnología)
- Componente `Lightbox` con zoom (`+` / `-`), drag para mover imagen ampliada, navegación con teclado (← →) y cierre con `ESC`
- `useCallback` para estabilizar las funciones de navegación

![Galeria](./docs/screenshots/galeria-01.png)

![Galeria](./docs/screenshots/galeria-02.png)

![Galeria](./docs/screenshots/galeria-03.png)

![Galeria](./docs/screenshots/galeria-04.png)

![Galeria](./docs/screenshots/galeria-05.png)

![Galeria](./docs/screenshots/galeria-06.png)

---

### 5. Perfiles Personales (`Agustina.jsx`, `Valeria.jsx`, `Matias.jsx`, `Luis.jsx`)

Cada integrante cuenta con su propia página personalizada construida en React, con secciones de presentación, habilidades, proyectos e intereses.

![Perfil Vale](./docs/screenshots/valeria-01.png)

![Perfil Agus](./docs/screenshots/agus.png)

![Perfil Matias](./docs/screenshots/Matias.png)

![Perfil Luis](./docs/screenshots/Luis.png)

---

### 6. Bitácora

Registro del proceso de migración y desarrollo del proyecto.

![Bitacora](./docs/screenshots/bitacora-01.png)

![Bitacora](./docs/screenshots/bitacora-02.png)


### 7. Arquitectura

Representación visual del árbol de renderizado y documentación técnica de la migración.

![Arquitectura](./docs/screenshots/arquitectura-01.png)

---

## 🎨 Guía de Estilos

### Paleta de Colores

| Variable | Hex | Uso |
|---|---|---|
| `--color-bg` | `#0a0a0f` | Fondo principal |
| `--color-surface` | `#111118` | Superficies secundarias |
| `--color-card` | `#16161f` | Tarjetas y paneles |
| `--color-border` | `#2a2a3a` | Bordes y separadores |
| `--color-primary` | `#4dff91` | Verde principal / acentos |
| `--color-primary-dark` | `#00cc5a` | Verde oscuro / hover |
| `--color-text` | `#e8e8f0` | Texto principal |
| `--color-muted` | `#7a7a9a` | Texto secundario / atenuado |

> También se utilizan `#151515`, `#23c44e`, `#24332b` y `#f5f7f6` en los estilos de perfiles individuales.

### Tipografías

| Fuente | Uso | Link |
|---|---|---|
| **Raleway** | Tipografía principal del sitio | [Google Fonts – Raleway](https://fonts.google.com/specimen/Raleway) |
| Arial / Helvetica | Fuentes de fallback del sistema | — |

### Iconografía

Los íconos utilizados en los perfiles son **SVGs personalizados** ubicados en `src/assets/icons/`. Incluyen: HTML5, CSS3, JavaScript, React, Git, GitHub, LinkedIn, Twitter y más.

### Diseño

Se mantuvo una identidad visual común basada en tonos oscuros y verde como color institucional del proyecto, permitiendo a cada integrante conservar elementos distintivos dentro de su perfil personal.

---

### 👨‍💻 Trabajo Colaborativo

El proyecto fue desarrollado utilizando Git y GitHub mediante ramas individuales para cada integrante.

Posteriormente se realizó la integración de los cambios al repositorio grupal mediante procesos de merge y resolución de conflictos cuando fue necesario.

---

### 🤖 Uso de Inteligencia Artificial


Durante el desarrollo del TP2 utilizamos herramientas de Inteligencia Artificial como apoyo para resolver dudas técnicas, comprender conceptos y agilizar algunas tareas del proyecto.

 Herramientas utilizadas

* Claude (Anthropic)
* ChatGPT (OpenAI)
* Gemini (Google)

 ¿Cómo las utilizamos?

 Claude

Claude fue utilizado principalmente como apoyo en la programación y desarrollo del código. Nos ayudó a resolver errores, mejorar componentes, organizar archivos y encontrar soluciones para distintos problemas que fueron apareciendo durante la implementación del proyecto en React.

También fue útil para entender algunos conceptos relacionados con React Router, estructura de componentes y estilos CSS.

 ChatGPT

ChatGPT fue utilizado especialmente durante el proceso de migración del TP1 al TP2. Nos ayudó a planificar cómo transformar las páginas HTML originales en componentes React, organizar la estructura general de la aplicación y adaptar el proyecto a una arquitectura SPA utilizando React Router.

Además, colaboró en la redacción de documentación, bitácora, arquitectura y README del proyecto. 

Chat GPT nos ayudo a elegir el nuevo nombre del sitio. 

 Gemini

Gemini fue utilizado principalmente para generar algunas imágenes y recursos visuales utilizados en los perfiles personales de los integrantes, además de brindar apoyo puntual en consultas relacionadas con diseño y presentación visual.

 Reflexión

Las herramientas de Inteligencia Artificial fueron utilizadas como asistentes de apoyo durante el proceso de aprendizaje y desarrollo.
> Todas las decisiones finales, modificaciones y validaciones del código fueron realizadas por los integrantes del equipo, quienes revisaron, adaptaron y probaron cada solución antes de incorporarla al proyecto.

📁 [Drive con evidencias de uso de IA](https://drive.google.com/drive/u/0/folders/1LkVf6MaKqQdCl31vkxWRx3Na0RNildve)

---

## 🎯 Conclusión

El TP2 representó un salto cualitativo importante respecto al TP1. Lo que antes era un conjunto de archivos HTML independientes, cada uno con su propio CSS y JavaScript suelto, se transformó en una aplicación React moderna con arquitectura SPA.
La migración no fue solo un cambio de tecnología, sino una reorganización completa de cómo se piensa el proyecto. En el TP1 cada página existía de forma aislada; en el TP2 todo convive dentro de un mismo árbol de componentes donde el Layout es persistente, el Sidebar siempre está presente, y cada ruta renderiza su contenido dentro del Outlet sin recargar la página.
A nivel de código, el cambio más significativo fue pasar del JavaScript tradicional manipulando el DOM a trabajar con React Hooks. El useState reemplazó las variables globales, el useEffect ordenó los efectos secundarios como el consumo de la API de TMDB, y el useMemo optimizó el filtrado en tiempo real del JSON Explorer. El useCallback estabilizó las funciones de navegación del Lightbox, algo que en JavaScript puro hubiera requerido mucho más código manual.
En cuanto a las funcionalidades, el TP2 incorporó cosas que el TP1 no tenía: una galería con Lightbox interactivo con zoom y navegación por teclado, un explorador de datos con búsqueda y filtros simultáneos, y una integración real con una API externa con manejo de estados de carga, error y paginación.
El trabajo colaborativo también evolucionó: se trabajó con ramas individuales por integrante en Git, lo que implicó resolver conflictos de merge reales y mantener un historial de cambios ordenado.
En definitiva, el TP2 no solo sumó funcionalidades, sino que cambió la forma de construir y pensar el código.
