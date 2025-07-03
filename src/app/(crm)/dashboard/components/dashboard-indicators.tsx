'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GetCustomersResponse } from '@/http/customers'
import { FileText, Users } from 'lucide-react'

export interface DashboardIndicatorsProps {
  data: GetCustomersResponse
}

export function DashboardIndicators({ data }: DashboardIndicatorsProps) {
  const { customers } = data
  return (
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
            {customers.length}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {customers.filter((c) => c.status === 'Ativo').length} ativos
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-sm hover:shadow-md cursor-pointer transition-shadow border border-gray-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Total de Procesos
          </CardTitle>
          <FileText className="h-5 w-5 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {customers.length}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {customers.filter((c) => c.status === 'Ativo').length} em andamento
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
            {customers.length}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {customers.filter((c) => c.status === 'Ativo').length} ativos
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
            {customers.length}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {customers.filter((c) => c.status === 'Ativo').length} ativos
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
