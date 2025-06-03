'use client'

import { Badge } from '@/app/components/ui/badge'
import { Button } from '@/app/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card'
import Heading from '@/app/components/ui/heading'
import { Eye, Users } from 'lucide-react'

export default function DashboardPage() {
  const clients = [
    { id: 1, name: 'Cliente A', status: 'Suspenso', email: '' },
    { id: 2, name: 'Cliente B', status: 'Inativo', email: '' },
    { id: 3, name: 'Cliente C', status: 'Ativo', email: '' },
    { id: 4, name: 'Cliente D', status: 'Ativo', email: '' },
  ]

  function getStatusColor(status: string) {
    switch (status) {
      case 'Ativo':
      case 'Em andamento':
        return 'bg-green-100 text-green-800'
      case 'Finalizado':
        return 'bg-blue-100 text-blue-800'
      case 'Inativo':
      case 'Suspenso':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // function formatCurrency(value: number) {
  //   return new Intl.NumberFormat('pt-BR', {
  //     style: 'currency',
  //     currency: 'BRL',
  //   }).format(value)
  // }

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col gap-2 w-full">
        <Heading text="Dashboard" />

        <h2 className="text-gray-600">
          Visão geral dos seus clientes e processos
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 w-full">
        <Card className="bg-white shadow-sm hover:shadow-md cursor-pointer transition-shadow border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total de Clientes
            </CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {clients.length}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {clients.filter((c) => c.status === 'Ativo').length} ativos
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm hover:shadow-md cursor-pointer transition-shadow border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total de Clientes
            </CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {clients.length}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {clients.filter((c) => c.status === 'Ativo').length} ativos
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm hover:shadow-md cursor-pointer transition-shadow border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total de Clientes
            </CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {clients.length}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {clients.filter((c) => c.status === 'Ativo').length} ativos
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm hover:shadow-md cursor-pointer transition-shadow border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total de Clientes
            </CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {clients.length}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {clients.filter((c) => c.status === 'Ativo').length} ativos
            </p>
          </CardContent>
        </Card>
      </div>

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
    </div>
  )
}
