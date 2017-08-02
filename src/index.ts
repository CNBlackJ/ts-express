import * as express from 'express'
import * as APIOutputMiddleware from './middlewares/APIOutputMiddleware'
import * as router from './router'

const app = express()

// investigation: how to simplify export! :(
app.use(APIOutputMiddleware.APIOutputMiddleware)
app.use(router.router)

app.listen(3000)