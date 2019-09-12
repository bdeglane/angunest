import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Hero } from '@nest-nantejs/common'

@Entity({
  name: 'hero',
})
export class HeroEntity implements Hero {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  level: number

  @Column()
  note: number
}