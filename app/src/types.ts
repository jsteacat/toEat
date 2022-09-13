type Status = 'Want to Try' | 'Recommended' | 'Do Not Recommend'

export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: Status
}

export type Dish = {
  id: string
  name: string
  status: Status
}
