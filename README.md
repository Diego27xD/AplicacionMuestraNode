Aplicación de Muestra

Esta es una aplicación web sencilla que usa Node.js, Express, EJS y Prisma para mostrar datos de una base de datos MySQL.

Características

- Muestra una lista de productos con su nombre, precio y descripción.
- Permite agregar, editar y eliminar productos desde la interfaz web.
- Usa Prisma para acceder y manipular la base de datos.
- Usa EJS para renderizar las vistas HTML.
- Usa dotenv para cargar las variables de entorno.
- Usa cors para habilitar el intercambio de recursos de origen cruzado.

Requisitos

- Node.js 14 o superior
- npm 6 o superior
- Prisma CLI
- MySQL
- Instalación

Para instalar esta aplicación, sigue estos pasos:

- Clona este repositorio en tu máquina local.
- Abre una terminal y navega al directorio del proyecto.
- Ejecuta el comando `npm install` para instalar las dependencias del proyecto.
- Para generar los modelos ejecuta `npx prisma` y `npx prisma init`
- Ejecuta el comando `npx prisma migrate dev --name init` para crear la base de datos y las tablas necesarias.
- Crea un archivo .env en la raíz del proyecto y añade la siguiente variable de entorno:
  `DATABASE_URL="file:./dev.db"`
- Copiar

Ejecutar el comando `npm run dev` para iniciar el servidor de desarrollo.
Abrir un navegador y visitar http://localhost:6005/view/products/ para ver la aplicación en funcionamiento.
