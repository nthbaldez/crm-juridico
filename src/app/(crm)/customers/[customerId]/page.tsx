import Heading from '@/components/heading'
import SidebarCustomerInfo from './components/sidebar-customer-info'
import { getCustomer } from '@/http/customers'
import ProcessesCustomerData from './components/processes-customer-data'

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

      <div className="w-full space-x-4 flex flex-col md:flex-row">
        <SidebarCustomerInfo customer={customer} />

        <ProcessesCustomerData customer={customer} />
      </div>
    </div>
  )
}
