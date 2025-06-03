import Heading from '@/app/components/ui/heading'
import { DashboardIndicators } from './dashboard-components/dashboard-indicators'
import { ClientsList } from './dashboard-components/clients-list'

export default function DashboardPage() {
  const clients = [
    { id: 1, name: 'Cliente A', status: 'Suspenso', email: '' },
    { id: 2, name: 'Cliente B', status: 'Inativo', email: '' },
    { id: 3, name: 'Cliente C', status: 'Ativo', email: '' },
    { id: 4, name: 'Cliente D', status: 'Ativo', email: '' },
  ]

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col gap-2 w-full">
        <Heading text="Dashboard" />

        <h2 className="text-gray-600">
          Visão geral dos seus clientes e processos
        </h2>
      </div>

      <DashboardIndicators clients={clients} />

      <ClientsList clients={clients} />
    </div>
  )
}
