import Heading from '@/components/heading'
import { Metadata } from 'next'
import { CustomersListFilters } from './components/customers-list-filters'
import { CreateNewCustomerForm } from '@/components/create-new-customer-form'
import { createCustomer } from '@/app/actions/create-customer'
import z from 'zod'
import { CustomersListView } from './components/customers-list-view'
import { getCustomers } from '@/http/customers'

export const metadata: Metadata = {
  title: 'CRM - Listagem de Clientes',
}

interface CustomersPageProps {
  searchParams: {
    page: string
    customerName: string
  }
}

export default async function CustomersPage({
  searchParams,
}: CustomersPageProps) {
  const page = searchParams.page

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(page ?? '1')

  const data = await getCustomers(searchParams)

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
        <CustomersListView data={data} pageIndex={pageIndex} />
      </div>
    </div>
  )
}
