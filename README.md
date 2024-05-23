# Mpple

## Descripción

Este proyecto es prototipo de un e-commerce que permite a los usuarios navegar y comprar productos. Utiliza tecnologías modernas para ofrecer una experiencia de usuario rápida y eficaz.

## Tecnologías utilizadas

### Frontend

- **Next.js** con **TypeScript**
- **Tailwind CSS** para los estilos.

### Backend

- Conexión a un backend preexistente mediante `fetch`.

## Funcionalidades

### Secciones

- **Home:** Página de inicio donde puede ver los productos y las categorías.
- **Productos:** Lista de productos disponibles.
- **Categorías:** Navegación por categorías de productos.
- **Registro e inicio de sesión:** 
  - **Registro:** Permite a los nuevos usuarios crear una cuenta.
  - **Inicio de sesión:** Permite iniciar sesión a los usuarios existentes.
  - **Token JWT:** Después de iniciar sesión, se genera un token JWT y se almacena en `localStorage`.

### Carrito de compra

- **Añadir al carrito:** Los usuarios registrados pueden añadir productos al carrito.
- **Realizar compras:** Los usuarios registrados pueden proceder a la compra de los productos elegidos.
- **Ver compras:** Los usuarios pueden ver un historial de las compras realizadas.

### Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TuUsuario/E-commercePage.git

2. **Navegue hasta el directorio del proyecto:**
   ```bash
   cd E-commercePage

## Frontend

1. **Instalar dependencias:**
   ```bash
   npm install

2. **Iniciar la aplicación Next.js:**
   ```bash
   npm run dev

3. **Abra el proyecto en su navegador:**
   ```bash
   Visite 'http://localhost:3000' para ver la aplicación en acción.

## Backend

El backend ya está incluido en el proyecto. Asegúrese de que tiene el backend funcionando y configurado correctamente para aceptar conexiones desde el frontend.

### Uso

## Registro e inicio de sesión

- **Registro:**
  - Vaya a la página de registro y llene el formulario para crear una cuenta.
- **Inicio de sesión:**
  - Una vez registrado, vaya a la página de inicio de sesión e introduzca sus credenciales para iniciar sesión.
  - El token JWT se generará automáticamente y se almacenará en localStorage.

## Navegación y compras

- **Buscar productos y categorías:**
  - Desde la página de inicio, navegue por los productos o las categorías que prefiera.
- **Añadir al carrito:**
  - Seleccionar productos y añadirlos al carrito (requiere que el usuario haya iniciado sesión).
- **Realizar compras:**
  - Procede a la compra de los productos en tu carrito.
  - Una vez que haya completado su compra, podrá ver los detalles de la misma en la sección correspondiente.

### Autor

Creado por **Marcos Pedro Lombardo**. Si tiene alguna pregunta, no dude en ponerse en contacto conmigo.
