import { Customer, Process } from '@/http/entities/entities'

// Arquivos para tipos globais
export interface GetCustomersParams {
  page?: string
  perPage?: string
  customerName?: string
}

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
    activeCustomers: number
  }
}

export interface GetProcessesResponse {
  processes: Process[]
  processesInProgress: Process[]
  totalCountProcesses: number
  totalCountProcessesInProgress: number
  totalCost: string
}

export interface GetCustomerResponse {
  customer: Customer | undefined
}
