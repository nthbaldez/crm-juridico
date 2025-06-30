import { HttpClientService } from '@/core/infrastructure/services/clients'
import { ClientsList } from './clients-list'

export async function ClientsListData() {
  const clientsService = new HttpClientService()
  const clients = await clientsService.getAll()

  return <ClientsList clients={clients} />
}
