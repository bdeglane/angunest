import { Controller, Get, Param } from '@nestjs/common'
import { Hero } from '@nest-nantejs/common'
import { HeroesService } from '../../services/heroes/heroes.service'

@Controller('heroes')
export class HeroesController {

  constructor(readonly heroesServices: HeroesService) {
  }

  @Get()
  async getAll(): Promise<Hero[]> {
    return this.heroesServices.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Hero> {
    return this.heroesServices.getById(parseInt(id, 10))
  }
}
