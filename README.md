# Proyecto TEAM RED: GymWeb

#### Ejercicio para el laboratorio de Miracle dev.

Este es un proyecto pensado para aplicarse en el ingreso a un gimnasio: el administrador puede verificar si el socio que desea ingresar tiene la cuota paga y dejarlo entrar en consecuencia (logueándose como administrador y viendo todo el historial de pago de todos los socios), y el socio con su usuario puede ver solo su historial de pago. Además, se utiliza como página institucional.

## Funcionalidades principales

- _HOME:_ Página principal con un Navbar que contiene botones para "HOME", "SOBRE NOSOTROS", "CONTACTO", y "LOGIN". Presenta un carrusel con fotos y frases motivadoras, así como una cuadrícula que informa sobre algunas actividades del gimnasio (con descripciones al hacer clic). También muestra información "SOBRE NOSOTROS" y un footer con enlaces rápidos, acceso a redes sociales e información de contacto. El footer aparece en todas las páginas de la aplicación.

- _SOBRE NOSOTROS:_ Posiciona la vista en el centro de la página "HOME", en el recuadro pertinente.

- _CONTACTO:_ Abre la página de contacto, donde se encuentra el formulario correspondiente. Al hacer clic en "enviar", se envía el texto al correo establecido.

- _LOGIN:_ Abre la página de inicio de sesión para acceder como administrador o socio.

- _REGISTER:_ Página con el formulario para el registro de nuevos usuarios.

- _ADMIN:_ Página del administrador donde se muestran todas las cuotas pagadas por los usuarios. Permite leer, modificar y eliminar. Dispone de un filtro de búsqueda.

- _USER:_ Página del usuario donde puede ver todas sus cuotas pagadas. Sólo puede leer la información.

## Instalación y configuración

1. git clone https://github.com/labmiracle/team-red.git  
2. Ejecute npm install vite --save-dev  
3. Crear archivo .env en /gymweb con el siguiente contenido:  
   - VITE_API_URL_BASE = <url_api>  
     (ejemplo: http://localhost:5000/api)

4. Crear archivo .env en /backend-gymweb que contenga:  
   - paradigm_api__mysql__host = <nombre_del_host>  
   - paradigm_api__mysql__user = <usuario_mysqñ>  
   - paradigm_api__mysql__password = <password_usuario_mysql>  
   - paradigm_api__mysql__database = <nombre_base_de_datos>  
   - paradigm_api__mysql__port=<puerto_base_de_datos>  
   - paradigm_api__sendmail__key=<nodemailer_key> 

5. Ejecutar el script ubicado en /team-red de nombre “gymwebDB” en la terminal de mysql para replicar la estructura de la base de datos.
 
6. Ejecución front y back:   
   - Ubíquese en /gymweb y ejecute “npm install && npm run dev”  para ejecutar la UI.
   - Ubiquese en /gymweb-backend y ejecute “npm run dev” para ejecutar el servidor.

## Documentación

1. Documentación de Swagger  
   Ejecutar en /gymweb-backend “npm run build:docs” y acceder en http://localhost:5000/docs

2. Documentación complementaria: [Enlace a Google Drive](https://drive.google.com/drive/folders/1KaPL55Uu_Uk_B_47dvS3lDBxkabWkr-Y?usp=drive_link)

## Contribución

Este proyecto es un ejercicio del laboratorio de Miracle Dev, por lo que no se aceptarán contribuciones externas. Sin embargo, si deseas mejorar tus habilidades en React, sentite libre de hacer bifurcaciones (fork) y experimentar con el código.

## Equipo

- Antonela Comisso {antocomisso@gmail.com}
- Gastón Falena {gastonfalena@gmail.com}
- Tamara Grunseid {tamigrun@gmail.com}
- Federico Lopumo {Lopumo65@gmail.com}

## Licencia

Este proyecto no tiene una licencia específica, ya que es para fines educativos.

