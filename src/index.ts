import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as APIOutputMiddleware from './middlewares/APIOutputMiddleware'
import * as router from './router'
import * as jwt from 'express-jwt'

const app = express()

app.use(bodyParser.json())
// investigation: how to simplify export! :(
app.use(APIOutputMiddleware.APIOutputMiddleware)
app.use(router.router)

app.listen(3000)