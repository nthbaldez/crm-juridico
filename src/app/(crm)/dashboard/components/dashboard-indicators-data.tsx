import { DashboardIndicators } from './dashboard-indicators'
import { getCustomers } from '@/http/customers'

export async function DashboardIndicatorsData() {
  const clients = await getCustomers()
  return <DashboardIndicators data={clients} />
}
