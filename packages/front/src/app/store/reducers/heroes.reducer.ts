import { Action, createReducer, on } from '@ngrx/store'
import { addHero, getHeroes } from '../actions/heroes.action'

export const initialState: unknown[] = []

export const heroesReducer = createReducer(
  initialState,
  on(getHeroes, state => []),
  on(addHero, state => []),
)

export const reducer = (state: unknown[] | undefined, action: Action) => heroesReducer(state, action)
