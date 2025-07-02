// Arquivos para tipos globais
export interface Process {
  number: string
  title: string
  court: string
  cost: string
  last_update: string
}

export interface Client {
  id: string
  name: string
  status: string
  email: string
  phone: string
  cpf: string
  created_at: string
  processes: Process[]
}
