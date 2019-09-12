import { Injectable, NotFoundException } from '@nestjs/common'
import { HeroesDaoService } from '../heroes-dao/heroes-dao.service'
import { Hero } from '@nest-nantejs/common'

@Injectable()
export class HeroesService {
  constructor(readonly heroesDao: HeroesDaoService) {
  }

  async getAll(): Promise<Hero[]> {
    return this.heroesDao.getAll()
  }

  async getById(id: number): Promise<Hero> {
    const hero = await this.heroesDao.getById(id)

    if (!hero) {
      throw   new NotFoundException()
    }

    return hero
  }
}
