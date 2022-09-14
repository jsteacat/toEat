import { defineStore } from 'pinia'
import { RESTAURANT_LIST } from '@/stubs'
import type { Restaurant } from '@/types'

type StateShape = {
  list: Restaurant[]
}

export const useRestaurantStore = defineStore('RestaurantStore', {
  state: (): StateShape => ({
    list: RESTAURANT_LIST,
  }),
  getters: {
    numberOfRestaurants: (state): number => {
      return state.list.length
    },
  },
  actions: {
    addRestaurant(payload: Restaurant) {
      this.list.push(payload)
    },
    deleteRestaurant(payload: Restaurant) {
      this.list = this.list.filter(({ id }: Restaurant) => id !== payload.id)
    },
  },
})
