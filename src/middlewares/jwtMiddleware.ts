import * as jwt from 'jsonwebtoken'
import * as userInfoMap from '../config/userInfo'

export function jwtValidate(req: any, res: any, next: any) {
	const token = req.get('Authorization')
	const secretKey = 'iamasecretkey999'
	const userInfo = jwt.verify(token, secretKey)
	if (typeof userInfo === 'object') {
		console.log(userInfo)
	}
	next()
}