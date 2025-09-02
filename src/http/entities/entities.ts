export interface Process {
  id: string
  number: string
  title: string
  court: string
  cost: string
  last_update: string
  status: 'Em andamento' | 'Inativo' | 'Ativo' | 'Finalizado' | 'Suspenso'
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
