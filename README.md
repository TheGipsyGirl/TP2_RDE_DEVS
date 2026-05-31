 # 🚀 RDE Devs – TP2 React

 🌐 Proyecto Desplegado

🔗 **Vercel:** https://tp-2-rde-devs.vercel.app/

🔗 **Repositorio GitHub:** https://github.com/TheGipsyGirl/TP2_RDE_DEVS.git

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

* React
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3
* Git
* GitHub
* Vercel

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

 🔄 Migración TP1 → TP2

| TP1                         | TP2                   |
| --------------------------- | --------------------- |
| HTML                        | React                 |
| CSS Global                  | CSS por componente    |
| JavaScript tradicional      | React Hooks           |
| Navegación mediante enlaces | React Router          |
| Sitio multipágina           | SPA                   |
| Proyecto estático           | Dashboard interactivo |

---

 🚀 Funcionalidades Implementadas

 Home Dashboard

Pantalla principal que centraliza el acceso a todas las secciones del proyecto.

 Perfiles Personales

Cada integrante dispone de una página personalizada desarrollada en React donde presenta información personal, habilidades, proyectos, gustos e intereses.

 API Externa

Implementación de consumo de datos externos mediante Fetch API y renderización dinámica de información.

 Galería

Galería interactiva con imágenes organizadas y navegación visual.

 JSON Explorer

Explorador de datos JSON con:

* Renderización dinámica de objetos
* Buscador en tiempo real
* Filtros por categorías
* Manejo de estados mediante React

 Bitácora

Registro del proceso de migración y desarrollo del proyecto.

 Arquitectura

Representación visual del árbol de renderizado y documentación técnica de la migración.

---

 🎨 Guía de Estilos

 Paleta Principal

| Uso             | Color   |
| --------------- | ------- |
| Fondo principal | #151515 |
| Verde principal | #23c44e |
| Verde oscuro    | #24332b |
| Fondo claro     | #f5f7f6 |
| Texto principal | #ffffff |

 Diseño

Se mantuvo una identidad visual común basada en tonos oscuros y verde como color institucional del proyecto, permitiendo a cada integrante conservar elementos distintivos dentro de su perfil personal.

---

👨‍💻 Trabajo Colaborativo

El proyecto fue desarrollado utilizando Git y GitHub mediante ramas individuales para cada integrante.

Posteriormente se realizó la integración de los cambios al repositorio grupal mediante procesos de merge y resolución de conflictos cuando fue necesario.

---

🤖 Uso de Inteligencia Artificial


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

Las herramientas de Inteligencia Artificial fueron utilizadas como asistentes de apoyo durante el proceso de aprendizaje y desarrollo. Todas las decisiones finales, modificaciones y validaciones del código fueron realizadas por los integrantes del equipo, quienes revisaron, adaptaron y probaron cada solución antes de incorporarla al proyecto.

Link al Drive con Imágenes de las ayudas de IA en este proyecto: 
**https://drive.google.com/drive/u/0/folders/1LkVf6MaKqQdCl31vkxWRx3Na0RNildve**

---

# 🔗 Navegación principal

- [Home](https://tp-2-rde-devs.vercel.app/)
- [Bitácora](https://tp-2-rde-devs.vercel.app/bitacora)
- [Arquitectura](https://tp-2-rde-devs.vercel.app/arquitectura)
- [JSON Explorer](https://tp-2-rde-devs.vercel.app/json)
- [API](https://tp-2-rde-devs.vercel.app/api)
- [Galería](https://tp-2-rde-devs.vercel.app/galeria)

---

🎯 Conclusión

El TP2 permitió transformar un proyecto desarrollado con tecnologías web tradicionales en una aplicación React moderna basada en componentes reutilizables.

La migración incorporó nuevas funcionalidades, mejoró la organización del código y permitió aplicar conceptos fundamentales de desarrollo frontend moderno como React Router, Hooks, SPA y reutilización de componentes.

