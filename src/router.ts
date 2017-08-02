import * as express from 'express'
import * as joi from 'joi'
import * as queryValidator from './middlewares/ValidateMiddleware'
const router = express.Router()

import * as book from './routes/books/get'

router.get('/books/:id',
	// should be fixed
	queryValidator.ValidateMiddleware({
		params: joi.object().keys({
			id: joi.number()	
		})
	}), book.get)

export {
	router
}