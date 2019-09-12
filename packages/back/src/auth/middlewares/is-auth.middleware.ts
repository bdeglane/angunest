import { Injectable, NestMiddleware } from '@nestjs/common'
import * as express from 'express'
import { JwtService } from '../services/jwt/jwt.service'

const { API_URL } = process.env


export function getRedirectUrl(req: express.Request): string {
  return `${req.protocol}://${req.header('host')}${req.path}`
}

export function getToken(req: express.Request): string {
  const cookies: { NEST_NANTES_JS_AUTH?: string } = req.cookies
  if (cookies.NEST_NANTES_JS_AUTH) {
    return cookies.NEST_NANTES_JS_AUTH
  }

  const bearer = req.header('authorization')
  if (!bearer) {
    return undefined
  }

  const isValidBearer = /^Berear [a-zA-Z0-9.]+$/gm.test(bearer)
  if (!isValidBearer) {
    return undefined
  }

  const [, token] = bearer.split(' ')

  return token
}


@Injectable()
export class IsAuthMiddleware implements NestMiddleware {
  constructor(readonly jwtService: JwtService) {
  }

  async use(req: express.Request, res: express.Response, next: express.NextFunction) {
    const token = getToken(req)
    const redirectUrl = getRedirectUrl(req)


    console.log({redirectUrl})

    if (!token) {
      return res.redirect(`${API_URL}/login?to=${redirectUrl}`)
    }

    const user = await this.jwtService.verify(token)

    if (!user) {
      return res.redirect(`${API_URL}/login?to=${redirectUrl}`)
    }

    next()
  }
}
