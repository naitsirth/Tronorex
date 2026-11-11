# TronoRex · Dashboard corporativo

Proyecto transversal de **Diseño de Interfaces (2º DAM)**. Es una aplicación de escritorio hecha con **Electron + React + TypeScript + Vite** para TronoRex, una empresa ficticia de váteres ("Váteres con historia").

## Funcionalidad

- **Cabecera:** logo y nombre de la empresa a la izquierda y hora del sistema a la derecha.
- **Barra lateral:** tres pestañas (Personal, Inventario e Incidencias) que cambian el panel central mediante renderizado condicional.
- **Personal:** empleados de [JSONPlaceholder Users](https://jsonplaceholder.typicode.com/users), con un buscador que filtra por nombre en tiempo real.
- **Inventario:** activos de [Fake Store API](https://fakestoreapi.com/products?limit=6). Los que cuestan más de 50 $ muestran la etiqueta "Activo de Alto Valor".
- **Incidencias:** tareas de [JSONPlaceholder Todos](https://jsonplaceholder.typicode.com/todos?_limit=8). La tarjeta cambia de color según `completed`.

En cada sección los datos se cargan con un botón, y mientras llega la respuesta se muestra "Cargando datos del servidor…".

## Estructura

```
src/
├── assets/        Logo
├── components/    Header, Reloj, Sidebar, tarjetas (EmployeeCard, AssetCard, IncidentCard)…
├── views/         Personal, Inventario, Incidencias
├── lib/           Hook personalizado useCargarDatos (peticiones GET a las APIs)
├── styles/        global.css, layout.css, tarjetas.css
├── types/         Interfaces de los datos
└── App.tsx        Estado de la sección activa y panel central
electron/          Proceso principal y preload
```

## Uso

```bash
npm install
npm run dev     # abre la app de Electron en modo desarrollo
npm run build   # genera el instalable en /release
```
