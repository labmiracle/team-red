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

## Instalación

1. Clonar este repositorio en tu computadora local.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar la aplicación.

## Contribución

Este proyecto es un ejercicio del laboratorio de Miracle Dev, por lo que no se aceptarán contribuciones externas. Sin embargo, si deseas mejorar tus habilidades en React, sentite libre de hacer bifurcaciones (fork) y experimentar con el código.

## Licencia

Este proyecto no tiene una licencia específica, ya que es para fines educativos.
