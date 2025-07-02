import Heading from '@/components/heading'
import { Suspense } from 'react'
import LoadingListSkeleton from '../dashboard/loading-list-skeleton'
import { Metadata } from 'next'
import { ClientsListData } from './components/clients-list-data'
// import z from 'zod'

export const metadata: Metadata = {
  title: 'CRM - Listagem de Clientes',
}

export default function ClientsPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>
}) {
  return (
    <div className="space-y-6">
      <div className="w-full space-y-2">
        <Heading>Clientes</Heading>
        <h2 className="text-gray-600">Lista geral dos seus clientes</h2>
      </div>
      <div className="grid grid-cols-1 m-auto space-y-6">
        <div className="grid gap-6 overflow-y-auto">
          <Suspense key="clients-list" fallback={<LoadingListSkeleton />}>
            <ClientsListData searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
