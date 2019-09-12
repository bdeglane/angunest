import { Injectable } from '@nestjs/common'

export interface UserI {
  username: string
  password: string
  role: string
}

export type LoginI = Pick<UserI, 'username' | 'password'>

export type UserJwtI = Pick<UserI, 'username' | 'role'>

@Injectable()
export class LoginService {
  private readonly users: UserI[] = [
    {
      username: 'admin',
      password: 'admin',
      role: 'admin',
    },
    {
      username: 'user',
      password: 'user',
      role: 'user',
    },
  ]

  login(body: LoginI): UserJwtI {
    const verifiedUser = this.users.find(
      user =>
        user.username === body.username && user.password === body.password,
    )

    if (!verifiedUser) {
      return undefined
    }

    return {
      username: verifiedUser.username,
      role: verifiedUser.role,
    }
  }
}
