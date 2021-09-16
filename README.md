# MERN - Sistemas Distribuidos

- usando mongo como gestor de base de datos
- Front-end con React Js & WebPack & Babel
- Backend con Node Js y Express Js

### Comandos para Inicializar el proyecto

Instalando paquetes necesarios para la ejecucion del proyecto

```bash
npm install
```

Agregar archivo para las variables de entorno:

```env
# ## MONGO_CREDENTIALS ## #
USER_MONGO
PASS_MONGO

# ## BASE_URL ## #
BASE_URL_PRODUCTION
BASE_URL_DEVELOPMENT

# ## JWT_PASSWORD ## #
JWT_PASSWORD
```

Existen 2 modos de ejecucion para el proyecto

> ⚠️ Antes de comenzar te recomendamos que ejecutes todo en modo desarrollo (dev) para que todo funcione correctamente, el modo produccion funcionara si el proyecto se encuentra desplegado por el uso de environments del front y back orientadas al development y production

- modo desarrollo

- modo producción

#### modo desarrollo

Ejecutara el proyecto de backend y frontend en conjuntos ambos por el modo desarrollo

```bash
npm run dev
```

#### modo producción

Ejecutara el proyecto de backend y frontend en conjuntos ambos por el modo producción

```bash
npm start
```

## Arbol del proyecto

```bash
.
├── coffin.gif
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── run-server
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
│   ├── App.js
│   ├── components
│   │   ├── Atoms
│   │   │   └── index.js
│   │   ├── Layouts
│   │   │   └── Index.js
│   │   ├── Molecules
│   │   │   ├── index.js
│   │   │   ├── LoginContent
│   │   │   │   ├── index.js
│   │   │   │   ├── LoginContent.js
│   │   │   │   └── RenderLogin.js
│   │   │   └── Navbar
│   │   │       ├── index.js
│   │   │       ├── Navbar.js
│   │   │       └── styles.js
│   │   └── Organims
│   │       ├── index.js
│   │       ├── ShortenUrl
│   │       │   ├── index.js
│   │       │   └── ShortenUrl.js
│   │       └── ShortenUrlList
│   │           ├── index.js
│   │           └── ShortenUrlList.js
│   ├── config
│   │   ├── configAxiosToken.js
│   │   ├── keyStorage.js
│   │   ├── mockFun.js
│   │   ├── roles.js
│   │   ├── themes.js
│   │   └── urlApi.js
│   ├── contexts
│   │   ├── AuthContext
│   │   │   ├── AuthProvider.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── favicon.ico
│   ├── hooks
│   │   ├── index.js
│   │   ├── useAuth.js
│   │   ├── useQuerySession.js
│   │   ├── useStorage.js
│   │   └── useToken.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── HomePage
│   │   │   ├── HomePage.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   ├── LoginPage
│   │   │   ├── index.js
│   │   │   └── LoginPage.js
│   │   └── RegisterPage
│   │       ├── index.js
│   │       └── RegisterPage.js
│   └── serviceWorker.js
└── webpack.config.js
```

### Integrantes

**Juan Esteban Echeverry Perdomo:**

- [Github](https://github.com/Juanestban/)
- [LinkedIn](https://www.linkedin.com/in/juan-esteban-echeverry-perdomo-developer-frontend/)

**Jhonnatan Moreno trujillo:**

- [Github](https://github.com/JhonnatanMorenoT)

---

🎉

![Coffin dance](coffin.gif)
