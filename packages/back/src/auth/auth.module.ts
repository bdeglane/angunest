import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LoginController } from './controllers/login/login.controller'
import { LoginService } from './services/login/login.service'
import { JwtService } from './services/jwt/jwt.service'
import { UserEntity } from './entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [LoginController],
  providers: [LoginService, JwtService],
  exports: [JwtService],
})
export class AuthModule {
}
