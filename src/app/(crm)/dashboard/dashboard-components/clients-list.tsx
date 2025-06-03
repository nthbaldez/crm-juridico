'use client'

import { Badge } from '@/app/components/ui/badge'
import { Button } from '@/app/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import { Eye, Users } from 'lucide-react'

export function ClientsList({
  clients,
}: {
  clients: { id: number; name: string; status: string; email: string }[]
}) {
  function getStatusColor(status: string) {
    switch (status) {
      case 'Ativo':
      case 'Em andamento':
        return 'bg-green-100 text-green-800'
      case 'Finalizado':
        return 'bg-blue-100 text-blue-800'
      case 'Inativo':
        return 'bg-red-100 text-red-800'
      case 'Suspenso':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // function formatCurrency(value: number) {
  //   return new Intl.NumberFormat('pt-BR', {
  //     style: 'currency',
  //     currency: 'BRL',
  //   }
  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Clientes Recentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {clients.slice(0, 3).map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-between p-4 border border-gray-200 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className={getStatusColor(client.status)}>
                  {client.status}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // setSelectedClient(client)
                    // setCurrentView('clients')
                    console.log('Ver detalhes do cliente', client)
                  }}
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Ver
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
