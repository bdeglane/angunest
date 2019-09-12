import * as Knex from 'knex'
import { Request, Response, NextFunction } from 'express'
import * as config from '../ormconfig.json'

export const knexConn = Knex({
  client: 'pg',
  connection: {
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database,
    port: config.port,
  },
})

export const knexMiddleware = (req: Request, res: Response, next: NextFunction) => {
  (req as any).conn = knexConn

  next()
}