import { Injectable } from '@nestjs/common'
import { Hero } from '@nest-nantejs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { HeroEntity } from '../../entities/hero.entity'
import { Repository } from 'typeorm'

@Injectable()
export class HeroesDaoService {

  constructor(
    @InjectRepository(HeroEntity)
    readonly heroRepository: Repository<HeroEntity>,
  ) {
  }

  async getAll(): Promise<Hero[]> {
    return this.heroRepository.find()
  }

  async getById(id: number): Promise<Hero> {
    return this.heroRepository.findOne({ id })
  }
}
