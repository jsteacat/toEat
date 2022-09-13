import type { Restaurant, Dish } from '@/types'

export const RESTAURANT_LIST: Restaurant[] = [
  {
    id: '9f995ce4-d2fc-4d00-af1d-6cb1647c6bd3',
    name: 'Quiche From a Rose',
    address: '283 Thisisnota St.',
    website: 'www.quichefromarose.com',
    status: 'Want to Try',
  },
  {
    id: 'ae62a3da-791b-4f44-99a1-4be1b0ec30b8',
    name: 'Tamago Never Dies',
    address: '529 Letsgofora Dr.',
    website: 'www.tamagoneverdies.com',
    status: 'Recommended',
  },
  {
    id: '9b361dae-2d44-4499-9940-97e188d41a32',
    name: 'Penne For Your Thoughts',
    address: '870 Thisisa St.',
    website: 'www.penneforyourthoughts.com',
    status: 'Do Not Recommend',
  },
]

export const DISH_LIST: Dish[] = [
  {
    id: '7d9f3f17-964a-4e82-98e5-ecbba4d709a1',
    name: 'Ghost Pepper Poppers',
    status: 'Want to Try',
  },
  {
    id: '5c986b74-fa02-4a22-98f2-b1ff3559e85e',
    name: 'A Little More Chowder Now',
    status: 'Recommended',
  },
  {
    id: 'c113411d-1589-414f-a283-daf7eedb631e',
    name: 'Full Laptop Battery',
    status: 'Do Not Recommend',
  },
]
