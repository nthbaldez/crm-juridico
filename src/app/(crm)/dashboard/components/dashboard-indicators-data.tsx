import { getProcesses } from '@/http/processes'
import { DashboardIndicators } from './dashboard-indicators'
import { getCustomers } from '@/http/customers'

export async function DashboardIndicatorsData() {
  const customers = await getCustomers()
  const processes = await getProcesses()
  return <DashboardIndicators customersData={customers} processes={processes} />
}
