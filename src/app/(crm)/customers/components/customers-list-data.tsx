import { getCustomers } from '@/http/customers'
import { CustomersList } from './customers-list'
import z from 'zod'

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

  const data = await getCustomers(params)
  return <CustomersList data={data} pageIndex={pageIndex} />
}
