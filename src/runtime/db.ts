import * as fs from 'fs'
import * as path from 'path'
import * as config from 'config'
import * as mongoose from 'mongoose'
import * as log from './log'

// :(
const logger = log.log.get('app')

let connectionStr = `mongodb://${config.db.options.host}/${config.db.database}`
mongoose.connect(connectionStr,
  {
    user: config.db.options.user,
    pass: config.db.options.pass
  })
mongoose.connection.on('error', (err) => {
  logger.error('mongodb connect error:' + err)
})

console.log(`数据库连接：${connectionStr}`)

let modelsPath = path.join(process.cwd(), '/models')

let models = fs.readdirSync(modelsPath)

let db = {}

for (let model of models) {
  if (model.startsWith('.')) {
    continue
  }
  let modelName = model.match(/^[^.]+/)[0]
  let modelSchema = require(path.join(modelsPath, model))
  db[ modelName ] = mongoose.model(modelName, modelSchema)
}

module.exports = db
