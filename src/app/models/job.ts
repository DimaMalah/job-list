export interface IJob  {
  id: string
  name: string
  email: string
  phone: string
  title: string
  salary: string
  address: string
  benefits: string[]
  location: {
    lat: number
    long: number
  },
  pictures: string[]
  createdAt: string
  updatedAt: string
  description: string
  employment_type: string[]
}
