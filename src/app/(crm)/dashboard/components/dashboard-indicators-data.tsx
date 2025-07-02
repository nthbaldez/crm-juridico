import { DashboardIndicators } from './dashboard-indicators'
import { getClients } from '@/http/customers'

export async function DashboardIndicatorsData() {
  const clients = await getClients()
  return <DashboardIndicators data={clients} />
}
