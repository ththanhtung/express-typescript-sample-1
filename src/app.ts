import express from 'express'
import { AppRouter } from './AppRouter'
import './controllers/LoginController'
import './controllers/RootController'

const app = express()

app.use(AppRouter.getInstance())

export {
    app
}