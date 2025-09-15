import Heading from '@/components/heading'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { DashboardIndicatorsModel } from './components/dashboard-indicators-model'
import LoadingListSkeleton from './loading-list-skeleton'
import LoadingDashboardSkeleton from './loading-dashboard'
import { ClientsListModel } from '@/app/(crm)/dashboard/components/clients-list-model'

export const metadata: Metadata = {
  title: 'CRM - Dashboard Home',
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
        <DashboardIndicatorsModel />
      </Suspense>
      <Suspense key="clients-list" fallback={<LoadingListSkeleton />}>
        <ClientsListModel />
      </Suspense>
    </div>
  )
}
