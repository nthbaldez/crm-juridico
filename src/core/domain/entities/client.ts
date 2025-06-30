export interface Process {
  number: string
  title: string
  court: string
  cost: string
  lastUpdate: string
}

export interface Client {
  id: string
  name: string
  email: string
  cpf: string
  phone: string
  createdAt: string
  processes: Process[]
  status: string
}
