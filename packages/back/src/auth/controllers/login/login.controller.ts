import {
  Body,
  Controller,
  Get, HttpException, HttpStatus,
  Post,
  Query,
  Render, Request,
  Response,
  Session,
} from '@nestjs/common'
import * as express from 'express'
import { get } from 'lodash'
import { LoginI, LoginService, UserJwtI } from '../../services/login/login.service'
import { JwtService } from '../../services/jwt/jwt.service'

const { API_URL } = process.env

@Controller('login')
export class LoginController {
  constructor(
    readonly loginService: LoginService,
    readonly jwtService: JwtService,
  ) {
  }

  @Get()
  @Render('login')
  root(@Session() session: any, @Query('to') to: string) {
    if (!to) {
      throw new HttpException('', HttpStatus.FORBIDDEN)
    }

    const error = get(session, 'error', false)
    if (!error) {
      delete session.error
    }

    return {
      error,
      to,
    }
  }

  @Post()
  login(
    @Body() body: LoginI,
    @Request() req: express.Request,
    @Response() res: express.Response,
    @Session() session: any,
    @Query('to') to: string,
  ) {
    const user = this.loginService.login(body)

    if (!user) {
      session.error = 'Incorrect username or password'
      return res.redirect(`${API_URL}/login?to=${to}`)
    }

    const jwt = this.jwtService.sign(user)
    return res
      .cookie('NEST_NANTES_JS_AUTH', jwt, { maxAge: 86400 })
      .redirect(to)
  }

  @Post('verify')
  async verify(@Body() body: { token: string }): Promise<UserJwtI> {
    return await this.jwtService.verify(body.token)
  }
}
