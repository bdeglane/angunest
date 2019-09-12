import { Injectable } from '@nestjs/common'
import { sign, verify } from 'jsonwebtoken'
import { UserJwtI } from '../login/login.service'

@Injectable()
export class JwtService {
  private secret = 'shhh-secret'

  sign(user: UserJwtI): string {
    return sign(user, this.secret, { expiresIn: 86400 })
  }

  async verify(jwt: string): Promise<UserJwtI> {
    return verify(jwt, this.secret) as Promise<UserJwtI>
  }
}
