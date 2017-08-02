import * as express from 'express'
import * as joi from 'joi'
import * as queryValidator from './middlewares/ValidateMiddleware'
const router = express.Router()

import * as book from './routes/books/get'
import * as jwt from './routes/jwt/post'

router.get('/books/:id',
// should be fixed
queryValidator.ValidateMiddleware({
	params: joi.object().keys({
		id: joi.number()	
	})
}), book.get)

router.post('/jwt/token',
queryValidator.ValidateMiddleware({
	body: joi.object().keys({
		username: joi.string().required(),
		password: joi.string().required()
	})
}), jwt.post)

export {
	router
}