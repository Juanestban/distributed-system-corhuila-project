import express, { Express } from 'express'
import cors from 'cors'
import morgan from 'morgan'

// Initializer
const app: Express = express()

// Settings
app.set('port', process.env.PORT || 3200)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

// Routes

// Starting server
app.listen(app.get('port'), () => {
  console.log('SwordProject | [+] listen on port:', app.get('port'))
})
