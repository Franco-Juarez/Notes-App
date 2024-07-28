# Note Writing Application

Esta es una aplicación de escritura de notas desarrollada en React que interactúa con una base de datos en AppWrite.io. La aplicación permite a los usuarios crear, editar, y eliminar notas de manera interactiva.

## Características

- Crear nuevas notas con contenido personalizable.
- Editar el contenido y la posición de las notas en la pantalla.
- Guardar automáticamente las notas en la base de datos.
- Eliminar notas existentes.
- Uso de `useContext` para la gestión del estado global de las notas.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **AppWrite.io**: Plataforma backend para gestionar bases de datos y autenticar usuarios.
- **ESLint**: Herramienta de análisis estático para encontrar y arreglar problemas en el código JavaScript.

## Estructura del Proyecto

- `src/components`: Contiene los componentes React de la aplicación.
- `src/context`: Contiene el contexto para manejar el estado global de la aplicación.
- `src/utils`: Contiene funciones utilitarias usadas en la aplicación.
- `src/appwrite`: Contiene la configuración y funciones para interactuar con AppWrite.

## Uso de `useContext`

El contexto de notas (`NoteContext`) se utiliza para gestionar el estado global de las notas en la aplicación.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Franco-Juarez/Notes-App.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd note-writing-app
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

1. Configura tu instancia de AppWrite siguiendo las instrucciones de [AppWrite.io](https://appwrite.io/docs).
2. Crea una base de datos y una colección para las notas.
3. Actualiza el archivo de configuración con tus credenciales de AppWrite.

## Uso

1. Inicia la aplicación:
   ```bash
   npm run dev
   ```
2. Abre tu navegador y navega a `http://localhost:3000`.
