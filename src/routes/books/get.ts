export function get (req: any, res: any, next: any) {
	const id = req.params.id
	const data = {
		id,
		title: 'typescript in express'
	}
	res.apiSuccess(data)
}
