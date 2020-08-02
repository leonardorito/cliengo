# Cliengo
Con nuestro sistema podrás definir las respuestas que desees para tu chatbot de una manera intuitiva y moderna.

Este proyecto fue realizado con Webpack desde 0 para tener el proceso completo de como inicializar una app en React.

Para iniciar el proyecto, debes clonar, luego, ir al directorio seleccionado, y ejecutar el comando **```npm install```** para instalar todas nuestras dependencias. A continuación dejamos una lista de los demás comandos que podrás necesitar para comenzar a utilizar esta herramienta.

## NPM RUN DEV
Este comando correrá una instancia del servidor en modo dev, abrirá una pestaña y podrás ver el proyecto en http://localhost:3000, listo para recibir cambios y hacer hot reloading.

## NPM RUN START
Este comando te permitirá realizar un build en modo development, en caso de que no quieras todo minificado. El resultado podrá encontrarse en la carpeta build.

## NPM RUN BUILD
Este comando ejecutará un build listo para producción, con todos los paquetes y assets listos para correr en un servidor. El resultado podrá encontrarse en la carpeta build.

## NPM RUN LINT
Este comando ejecutará el eslint para detectar y mostrar errores sintácticos en el código, de esta manera si varias personas deben trabajar en el, nos podemos asegurar de que todos mantengan la misma sintaxis.

## NPM RUN LINT:FIX
Este comando se encarga de arreglar automáticamente los errores sintácticos que le sea posible, en caso de que no pueda arreglar alguno, imprimirá el error. Al correr ``npm run build`` se ejecuta esta tarea automáticamente, de manera que siempre se arreglen los errores antes de hacer un build para producción.

## NPM RUN TEST
Con este comando podemos correr todos los test unitarios para asegurarnos de no haber dañado ningún componente mientras estuvimos programando.

## NPM RUN TEST:WATCH
Corre los tests en tiempo real, sirve para que cuando hagamos un cambio nos diga automáticamente si alguno dejó de funcionar.

Para el proyecto, se definió la siguiente estructuras de carpetas, en la cual se separa las vistas (containers) de los componentes, de esta manera haciendolos reusables para mayor escalabilidad.

### Estructura
Acá veremos un desglose de las carpetas que se encuentran en el directorio src para comprender mejor la estructura del proyecto:
```
+-- package.json
+-- src
| +-- assets
| | +-- icons
| | ...
| +-- components
| | ...
| +-- constants
| | ...
| +-- containers
| | ...
| +-- layouts
| | ...
| +-- providers
| | ...
| +-- App.js
| +-- App.test.js
| +-- index.js
| +-- index.scss
| +-- setupTests.js
| +-- variables.scss
+-- public
+-- README.md
```

- **assets**: en esta carpeta se encuentran todos los archivos que se necesiten adjuntar en el proyecto, tales como imágenes, iconos, vectores.
- **components**: En esta carpeta se encuentran los componentes reusables del proyecto, tales como botones, inputs, loadings, etc..., todo componente debería poderse utilizar en cualquier parte de la app.
- **constants**: Aquí guardamos todas las constantes para no llenar de texto nuestros containers o nuestros componentes, y para que luego sea mas fácil cambiar textos que se utilicen en múltiples vistas.
- **containers**: Los containers son las vistas, estas mismas se encargan de renderizar los componentes que deban mostrarse en cada una, y de los datos que ellos van a recibir. En muchas ocasiones también se encargan de los eventos que emitan los hijos.
- **layout**: Desde los layouts podemos manejar como se mostrara en general la aplicación, de manera que si luego se necesita una vista que se vea diferente a las demás, solo haya que crear un nuevo archivo aquí en donde se le indicara a sus hijos como deben renderizarse.
- **providers**: Los providers permiten enviarle informacion a todos los componentes anidados dentro de ellos, de esta manera podemos consumir servicios, y la recibiremos en donde queramos sin necesidad de acudir al Props Drilling.
