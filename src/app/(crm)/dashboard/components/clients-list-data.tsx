import { getCustomers } from '@/http/customers'
import { ClientsList } from './clients-list'

export async function ClientsListData() {
  const clients = await getCustomers({ perPage: '3' })
  return <ClientsList data={clients} />
}
