import Heading from '@/components/heading'
import { Card, CardHeader } from '@/components/ui/card'

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="w-full space-y-2">
        <Heading>Clientes</Heading>
        <h2 className="text-gray-600">
          Visão geral dos seus clientes e processos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 space-x-8">
        <Card>
          <CardHeader>Lista de clientes(4)</CardHeader>
        </Card>
        <Card></Card>
      </div>
    </div>
  )
}
