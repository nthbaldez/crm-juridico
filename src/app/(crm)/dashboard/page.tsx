import Heading from '@/components/heading'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { DashboardIndicatorsData } from './components/dashboard-indicators-data'
import LoadingListSkeleton from './loading-list-skeleton'
import LoadingDashboardSkeleton from './loading-dashboard'
import { ClientsListData } from '@/components/clients-list-data'

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
      <Suspense key="indicators" fallback={<LoadingDashboardSkeleton />}>
        <DashboardIndicatorsData />
      </Suspense>
      <Suspense key="clients-list" fallback={<LoadingListSkeleton />}>
        <ClientsListData />
      </Suspense>
    </div>
  )
}
