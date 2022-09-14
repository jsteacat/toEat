import { defineStore } from 'pinia'
import { DISH_LIST } from '@/stubs'
import type { Dish } from '@/types'

type StateShape = {
  list: Dish[]
}

export const useDishStore = defineStore('DishStore', {
  state: (): StateShape => ({
    list: DISH_LIST,
  }),
  getters: {
    numberOfDishes: (state): number => {
      return state.list.length
    },
  },
  actions: {
    addDish(payload: Dish) {
      this.list.push(payload)
    },
    deleteDish(payload: Dish) {
      this.list = this.list.filter(({ id }: Dish) => id !== payload.id)
    },
  },
})
