import { DashboardIndicators } from './components/dashboard-indicators'
import { ClientsList } from './components/clients-list'
import Heading from '@/components/heading'
import { api } from '@/services/api'
import { Metadata } from 'next'
import { Suspense, use } from 'react'
import Loading from './loading'

async function getClients() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await api('/clients', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const clients = await response.json()

  return clients
}

export const metadata: Metadata = {
  title: 'Dashboard Home',
}

export default function DashboardPage() {
  const clients = use(getClients())

  console.log(clients)

  return (
    <div className="w-full space-y-6">
      <div className="w-full space-y-2">
        <Heading>Dashboard</Heading>

        <h2 className="text-gray-600">
          Visão geral dos seus clientes e processos
        </h2>
      </div>

      <Suspense fallback={<Loading />}>
        <DashboardIndicators clients={clients} />
      </Suspense>

      <ClientsList clients={clients} />
    </div>
  )
}
