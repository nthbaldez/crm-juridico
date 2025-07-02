import { getClients } from '@/http/clients'
import { ClientsList } from './clients-list'
import z from 'zod'

export async function ClientsListData({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>
}) {
  const params = await searchParams
  const page = params.page
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(page ?? '1')

  const clients = await getClients({ page, perPage: '10' })
  return <ClientsList data={clients} pageIndex={pageIndex} />
}
