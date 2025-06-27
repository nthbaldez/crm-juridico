// import { api } from '../http/api'

import { api } from '../http/api'

export type ClientProps = {
  id: number
  name: string
  status: string
  email: string
  phone: string
  cpf: string
  created_at: string
  processes: {
    number: number
    title: string
    court: string
    cost: string
    last_update: string
  }[]
}

export async function getClients(): Promise<ClientProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await api('/clients')

  const clients = await response.json()

  return clients
}

export async function getClient(
  clientId: string,
): Promise<Pick<ClientProps, 'name' | 'processes'>> {
  console.log('clientId', clientId)

  return {
    name: 'Angela Maria',
    processes: [
      {
        number: 123456,
        title: 'Processo 1',
        court: 'TJSP',
        cost: '1000',
        last_update: '2025-01-01',
      },
    ],
  }
}
