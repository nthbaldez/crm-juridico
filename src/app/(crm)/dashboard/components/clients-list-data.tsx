import { getClients } from '@/http/customers'
import { ClientsList } from './clients-list'

export async function ClientsListData() {
  const clients = await getClients({ perPage: '3' })
  return <ClientsList data={clients} />
}
