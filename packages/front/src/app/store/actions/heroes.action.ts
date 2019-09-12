import { createAction, props } from '@ngrx/store'
import { Hero } from '@nest-nantejs/common'

export const getHeroes = createAction('[Heroes module] Get', props<{}>())
export const addHero = createAction('[Heroes module] Add', props<Hero>())
