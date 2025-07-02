import { getClients } from '@/http/clients'
import { ClientsList } from './clients-list'

export async function ClientsListData() {
  const clients = await getClients({ page: '0', perPage: '3' })
  return <ClientsList data={clients} />
}
