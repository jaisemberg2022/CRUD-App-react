### 📦CRUD-App-react - Apicacion React con typescript (React + tailwind + vite)
📚 **Descripción General**:
CRUD-App es una aplicación hecha con React, TypeScript, Tailwind CSS y Vite. 
Apartir de la libreria json-server crea un endpoint artificial que simula la generacion de peticiones HTTP  hacia un servidor apartir del puerto 4000 con la finalidad de recrear un CRUD de acuerdo a los datos de la entidad Usuario. Utiliza un Hook persinalizado basado en Axios el permite realizar las ya anteriormente mencionadas peticiones asi como retornar propiedades para el control de estados de errores y carga. Utiliza las librerias useForm y zod para manipular de manera mas eficiente y legible los datos que se obtienen ademas de controlar por medio de esquemas los formatos de la informacion que se emplean en las cajas de texto respectivamente.

🛠️ **Requisitos Previos**:
Asegúrate de tener instalados los siguientes componentes:

- node js v22.14.0
- vite
- Visual Studio 2022 o Visual Studio Code

📦 **Dependencias**:
Este proyecto utiliza los siguientes paquetes NuGet clave para la configuración de Entity Framework Core y el acceso a datos con SQL Server:
````
   "dependencies": {
    "@hookform/resolvers": "^5.2.1",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@tailwindcss/vite": "^4.1.13",
    "axios": "^1.12.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.543.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hook-form": "^7.62.0",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.13",
    "zod": "^4.1.5"
  },
  ````
📥 **Instalación y Configuración**:
1. Clonar el repositorio
https://github.com/jaisemberg2022/prueba-application-web-MVC-bookradar-app.git
cd tu-repo
2. Instalar dependencias
npm install 
3. Iniciar
npm run dev
