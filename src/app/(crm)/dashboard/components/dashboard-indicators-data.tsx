import { getClients } from '@/services/clients'
import { DashboardIndicators } from './dashboard-indicators'

export async function DashboardIndicatorsData() {
  const clients = await getClients()

  return <DashboardIndicators clients={clients} />
}
