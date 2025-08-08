import Heading from '@/components/heading'
import SidebarCustomerData from './components/sidebar-customer-data'
import { getCustomer } from '@/http/customers'

export default async function UsersProcessesPage({
  params,
}: {
  params: Promise<{ customerId: string }>
}) {
  const { customerId } = await params

  const { customer } = await getCustomer(customerId)

  return (
    <div className="pt-6">
      <div className="w-full space-y-2">
        <Heading>{customer?.name}</Heading>
        <h2 className="text-gray-600">Detalhes do cliente e processos</h2>
      </div>

      <div>
        <SidebarCustomerData params={params} />
      </div>
    </div>
  )
}
