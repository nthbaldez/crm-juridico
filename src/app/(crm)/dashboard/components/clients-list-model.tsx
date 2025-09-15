import { getCustomers } from '@/http/customers'
import { ClientsList } from './clients-list-view'

export async function ClientsListModel() {
  const clients = await getCustomers({ perPage: '3' })
  return <ClientsList data={clients} />
}
