import Heading from '@/components/heading'
import { Metadata } from 'next'
import { DashboardIndicatorsView } from './components/dashboard-indicators-view'
import { getCustomers } from '@/http/customers'
import { getProcesses } from '@/http/processes'
import { ClientsListView } from './components/clients-list-view'

export const metadata: Metadata = {
  title: 'CRM - Dashboard Home',
}

export default async function DashboardPage() {
  const customers = await getCustomers()
  const processes = await getProcesses()

  const clients = await getCustomers({ perPage: '3' })
  return (
    <div className="w-full space-y-6">
      <div className="w-full space-y-2">
        <Heading>Dashboard</Heading>

        <h2 className="text-gray-600">
          Visão geral dos seus clientes e processos
        </h2>
      </div>
      <DashboardIndicatorsView
        customersData={customers}
        processes={processes}
      />
      <ClientsListView data={clients} />
    </div>
  )
}
