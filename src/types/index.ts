// Arquivos para tipos globais
export interface Process {
  number: string
  title: string
  court: string
  cost: string
  last_update: string
}

export interface Customer {
  id: string
  name: string
  status: string
  email: string
  phone: string
  cpf: string
  created_at: string
  processes: Process[]
}

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
  }
}

export interface GetCustomerResponse {
  customer: Customer | undefined
}
