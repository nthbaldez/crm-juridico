import { HttpClientService } from '@/core/infrastructure/services/clients'
import { DashboardIndicators } from './dashboard-indicators'

export async function DashboardIndicatorsData() {
  const clientsService = new HttpClientService()
  const clients = await clientsService.getAll()

  return <DashboardIndicators clients={clients} />
}
