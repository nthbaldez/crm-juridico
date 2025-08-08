// import { Suspense } from 'react'
import SidebarCustomerInfo from './sidebar-customer-info'
import { getCustomer } from '@/http/customers'

export default async function SidebarCustomerData({
  params,
}: {
  params: Promise<{ customerId: string }>
}) {
  const { customerId } = await params
  const { customer } = await getCustomer(customerId)

  try {
    // Validação com verificação de propriedades obrigatórias
    if (customer) {
      return <SidebarCustomerInfo customer={customer} />
    }

    // Cliente não encontrado ou dados incompletos
    return (
      <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
        <h2 className="text-lg font-semibold text-yellow-800 mb-2">
          Cliente não encontrado
        </h2>
        <p className="text-yellow-700">
          Não foi possível carregar as informações do cliente com ID:{' '}
          {customerId}
        </p>
      </div>
    )
  } catch (error) {
    // Tratamento de erro na requisição
    console.error('Erro ao carregar dados do cliente:', error)

    return (
      <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
        <h2 className="text-lg font-semibold text-red-800 mb-2">
          Erro ao carregar dados
        </h2>
        <p className="text-red-700">
          Ocorreu um erro ao tentar carregar as informações do cliente.
        </p>
      </div>
    )
  }
}
