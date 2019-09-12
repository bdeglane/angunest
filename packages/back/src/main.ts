import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { join } from 'path'
import * as erv from 'express-react-views'
import * as session from 'express-session'
import * as cookieParser from 'cookie-parser'
import { NestExpressApplication } from '@nestjs/platform-express'
import { knexMiddleware } from './knex'

const { API_PORT } = process.env

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true })

  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  app.set('view engine', 'jsx')
  app.engine('jsx', erv.createEngine())

  app.use(cookieParser())
  app.use(
    session({
      secret: 'nestjs-nantesjs',
      resave: false,
    }),
  )
  app.use(knexMiddleware)

  await app.listen(API_PORT)
}

bootstrap()
