import { DashboardIndicators } from './dashboard-indicators'
import { getClients } from '@/http/clients'

export async function DashboardIndicatorsData() {
  const clients = await getClients()
  return <DashboardIndicators data={clients} />
}
