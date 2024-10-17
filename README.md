# Rick and Morty Characters - Nuxt 3 GraphQL App

Este es un proyecto hecho con **Nuxt 3** que consume la API GraphQL de Rick y Morty para mostrar una lista de personajes. Utiliza **Apollo Nuxt** para hacer las consultas a la API y **Tailwind CSS** para el diseño de la interfaz de usuario. Cada personaje se muestra en una tarjeta que incluye su imagen, nombre, estatus, especie y ubicación.

## Tecnologías Utilizadas

- **Nuxt 3**: Framework de Vue.js para la construcción de aplicaciones web rápidas y modernas.
- **Apollo Nuxt**: Cliente para integrar Apollo con Nuxt y consumir APIs GraphQL.
- **Tailwind CSS**: Framework CSS para crear rápidamente diseños modernos y personalizables.
- **Rick and Morty GraphQL API**: API pública que proporciona información sobre personajes, ubicaciones y episodios de la serie Rick y Morty.

## Características

- Consulta de personajes de Rick y Morty utilizando GraphQL.
- Visualización de personajes en tarjetas con su imagen, nombre, estatus, especie y ubicación.
- Interfaz de usuario responsiva y moderna utilizando Tailwind CSS.
  
## Requisitos Previos

Antes de empezar, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/usuario/rick-morty-nuxt3-app.git
    cd rick-morty-nuxt3-app
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Configura el archivo `.env` con la URL de la API de Rick y Morty si es necesario (aunque la API pública no requiere autenticación).

4. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

5. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en acción.

## Estructura del Proyecto

```bash
.
├── components
│   └── CharacterCard.vue       # Componente de tarjeta para mostrar personajes
├── pages
│   └── index.vue               # Página principal que muestra la lista de personajes
├── composables
│   └── useGraphQL.ts           # Lógica de consulta de GraphQL
├── layouts
│   └── default.vue             # Layout principal
├── plugins
│   └── apollo.ts               # Configuración de Apollo Nuxt
└── README.md                   # Este archivo README
