# MERN - Sistemas Distribuidos

- usando mongo como gestor de base de datos
- Front-end con React Js & WebPack & Babel
- Backend con Node Js y Express Js

### Comandos para Inicializar el proyecto

Instalando paquetes necesarios para la ejecucion del proyecto

```bash
npm install
```

existen 2 modos de ejecucion para el proyecto

- modo desarrollo

- modo producción

#### modo desarrollo

ejecutara el proyecto de backend y frontend en conjuntos ambos por el modo desarrollo

```bash
npm run dev
```

#### modo producción

ejecutara el proyecto de backend y frontend en conjuntos ambos por el modo producción

```bash
npm start
```

## Arbol del proyecto

```bash
.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── server
│   ├── config
│   │   └── baseUrl.js
│   ├── controllers
│   │   ├── PrimaryController.js
│   │   ├── SessionController.js
│   │   ├── ShortenCodeController.js
│   │   ├── ShortenUrlController.js
│   │   └── UsersController.js
│   ├── index.js
│   ├── middlewares
│   │   ├── handleAuth.js
│   │   ├── handleErrors.js
│   │   └── handleNotFound.js
│   ├── models
│   │   ├── ShortenUrl.js
│   │   └── User.js
│   ├── mongoose.js
│   ├── rest
│   │   └── users.rest
│   └── routes
│       ├── index.routes.js
│       ├── shortenCode.routes.js
│       ├── shortenUrl.routes.js
│       └── users.routes.js
├── src
│   ├── App.css
│   ├── App.js
│   ├── components
│   │   ├── Atoms
│   │   │   └── index.js
│   │   ├── Layouts
│   │   │   └── Index.js
│   │   ├── Molecules
│   │   │   └── index.js
│   │   └── Organims
│   │       └── index.js
│   ├── contexts
│   │   └── index.js
│   ├── favicon.ico
│   ├── hooks
│   │   └── index.js
│   ├── index.js
│   ├── pages
│   │   └── index.js
│   └── serviceWorker.js
└── webpack.config.js
```

### Integrantes

Juan Esteban Echeverry Perdomo:

- [Github](https://github.com/Juanestban/)
- [LinkedIn](https://www.linkedin.com/in/juan-esteban-echeverry-perdomo-developer-frontend/)

Jhonnatan Moreno trujillo:

- [Github](https://github.com/JhonnatanMorenoT)

---

🎉

![Coffin dance](coffin.gif)
