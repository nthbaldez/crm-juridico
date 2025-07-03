import { getCustomers } from '@/http/customers'
import z from 'zod'
import { CustomersList } from './customers-list'

export async function CustomersListData({
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

  const customers = await getCustomers(params)
  return <CustomersList data={customers} pageIndex={pageIndex} />
}
