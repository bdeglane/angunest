import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from '../auth/auth.module'
import { HeroesController } from './controllers/heroes/heroes.controller'
import { HeroesService } from './services/heroes/heroes.service'
import { HeroesDaoService } from './services/heroes-dao/heroes-dao.service'
import { IsAuthMiddleware } from '../auth/middlewares/is-auth.middleware'
import { HeroEntity } from './entities/hero.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([HeroEntity]),
    AuthModule,
  ],
  controllers: [
    HeroesController,
  ],
  providers: [
    HeroesService,
    HeroesDaoService,
  ],
})
export class HeroesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsAuthMiddleware)
      .forRoutes({ path: 'heroes', method: RequestMethod.ALL })
  }
}
