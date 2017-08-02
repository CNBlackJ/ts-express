import * as jwt from 'jsonwebtoken'
import * as _ from 'lodash'

interface UserInfo {
	password: string,
	scope: string,
	[key:string]: string
}

interface UserInfoMap {
	airplake: UserInfo,
	[key:string]: object
}

export function post(req: any, res: any, next: any) {
	const userInfoMap: UserInfoMap = {
		airplake: {
			password: 'pwd123',
			scope: 'private'
		}
	}
	const privateKey = 'iamaprivatekey123'
	const username = req.body.username;
	const password = req.body.password;
	const userInfo = userInfoMap[username]
	const token = jwt.sign(
		{ username, password, scope: 'private' },
		privateKey,
		{ algorithm: 'HS256', expiresIn: '1h' }
	)
	res.send(token)
}