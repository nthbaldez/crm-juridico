import Heading from '@/components/heading'
import { Suspense } from 'react'
import { Metadata } from 'next'
import CustomersListSkeleton from './components/customers-list-skeleton'
// import { CustomersListData } from './components/customers-list-data'
import { CustomersListFilters } from './components/customers-list-filters'
import { CreateNewCustomerForm } from '@/components/create-new-customer-form'
import { createCustomer } from '@/app/actions/create-customer'
import { getCustomers } from '@/http/customers'
import { CustomersList } from './components/customers-list'
import z from 'zod'

export const metadata: Metadata = {
  title: 'CRM - Listagem de Clientes',
}

export default async function CustomersPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string; customerName: string }>
}) {
  const params = await searchParams
  const page = params.page

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(page ?? '1')

  const data = await getCustomers(params)

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
          <CustomersList data={data} pageIndex={pageIndex} />
        </Suspense>
      </div>
    </div>
  )
}
