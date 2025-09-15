export interface Process {
  id: string
  title: string
  court: string
  cost: string
  last_update: string
  status: Status
}

export type Status =
  | 'Em andamento'
  | 'Inativo'
  | 'Ativo'
  | 'Finalizado'
  | 'Suspenso'

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
