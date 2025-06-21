import { getClients } from '@/services/clients'
import { ClientsList } from './clients-list'

export async function ClientsListData() {
  const clients = await getClients()

  return <ClientsList clients={clients} />
}
