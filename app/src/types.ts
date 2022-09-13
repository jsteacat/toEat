import type { RESTAURANT_STATUS_LIST, DIET_LIST } from '@/constants'

export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: Status
  diet?: Diet
}

export type Dish = {
  id: string
  name: string
  status: Status
  diet?: Diet
}

type Status = typeof RESTAURANT_STATUS_LIST[number]
type Diet = typeof DIET_LIST[number]
