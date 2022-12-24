# **Proyecto AvisaYa Fronted Acto Delictivo**
## **Pre-requisitos**
- [Node.js](https://nodejs.org/en/) - 16.00 o version superior.
- [Angular](https://angular.io/cli) - 14.2.0 o version superior
- Tener cuenta en [Vercel](https://vercel.com/login).

## **Clonar el proyecto**
Puede elegir entre clonar por HTTPS o SSH.
- [HTTPS] git clone https://github.com/DavidValentin/AvisaYa-Frontend.git
- [SSH] git clone git@github.com:DavidValentin/AvisaYa-Frontend.git

## **Desplegar proyecto vercel CLI**
##### En la terminal, donde esta ubicado el proyecto, ingresar los siguientes comandos:

Para instalar angular de manera global

- Para instalar vercel global: ```npm i -g vercel```

- Para desplegar en vercel: ```vercel --yes```

Retornara el link de despligue similar a: 
- ```Production: https://avisaya-frontend-beige.vercel.app/```
 
## Correr proyecto en local 

Para instalar Angular
```javascript
npm install -g @angular/cli
```

Para poder instalar los paquetes.
```javascript
npm install
```
##### NOTA: SOLO en caso de un error de npm install, forzar la instalacion de dependencias.
```javascript
npm install --legacy-peer-deps
```
Para ejecutar el proyecto Fronted en modo desarrollo.
```javascript
ng serve --o
```
Para ejecutar las pruebas unitarias.
```javascript
ng test
```
