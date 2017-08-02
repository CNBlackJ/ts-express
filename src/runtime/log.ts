import * as fs from 'fs'
import * as path from 'path'
import * as config from 'config'

let logPath = path.join(__dirname, '/../logs')
if (!fs.existsSync(logPath)) {
  fs.mkdirSync(logPath)
}

const log4js = require('log4js')
log4js.configure(config.get('log'))

const log = {
  get: (name: string) => {
    let logger = log4js.getLogger(name)
    logger.setLevel('INFO')
    if (process.env.NODE_ENV === 'development') logger.setLevel('TRACE')
    return logger
  }
}

export {
	log
}