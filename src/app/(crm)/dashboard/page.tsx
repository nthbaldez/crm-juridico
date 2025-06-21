import Heading from '@/components/heading'
import { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'
import { ClientsListData } from './components/clients-list-data'
import { DashboardIndicatorsData } from './components/dashboard-indicators-data'

export const metadata: Metadata = {
  title: 'Dashboard Home',
}

export default function DashboardPage() {
  return (
    <div className="w-full space-y-6">
      <div className="w-full space-y-2">
        <Heading>Dashboard</Heading>

        <h2 className="text-gray-600">
          Visão geral dos seus clientes e processos
        </h2>
      </div>
      <Suspense key="indicators" fallback={<h1>Carregando...</h1>}>
        <DashboardIndicatorsData />
      </Suspense>
      <Suspense key="clients-list" fallback={<Loading />}>
        <ClientsListData />
      </Suspense>
    </div>
  )
}
