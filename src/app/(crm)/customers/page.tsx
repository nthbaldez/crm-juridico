import Heading from '@/components/heading'
import { Suspense } from 'react'
import { Metadata } from 'next'
import CustomersListSkeleton from './components/customers-list-skeleton'
import { CustomersListFilters } from './components/customers-list-filters'
import { CreateNewCustomerForm } from '@/components/create-new-customer-form'
import { createCustomer } from '@/app/actions/create-customer'
import { CustomersListData } from './components/customers-list-data'

export const metadata: Metadata = {
  title: 'CRM - Listagem de Clientes',
}

export default async function CustomersPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string; customerName: string }>
}) {
  return (
    <div className="space-y-6">
      <div className="w-full flex items-center justify-between">
        <div className="space-y-2">
          <Heading>Clientes</Heading>
          <h2 className="text-gray-600">Lista geral dos seus clientes</h2>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <CustomersListFilters />
            <CreateNewCustomerForm action={createCustomer} />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto">
        <Suspense key="clients-list" fallback={<CustomersListSkeleton />}>
          <CustomersListData searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}
