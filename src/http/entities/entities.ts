import { Customer } from '@/types'

export interface CreateNewCustomerResponse {
  name: string
  cpf: string
  phone: string
  email: string
}

export interface GetCustomersResponse {
  customers: Customer[]
  meta: {
    totalCount: number
    page: number
    perPage: number
    totalPages: number
  }
}
