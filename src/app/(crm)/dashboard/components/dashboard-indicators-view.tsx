'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GetCustomersResponse, GetProcessesResponse } from '@/types'
import { Clock4, FileText, Users } from 'lucide-react'

export interface DashboardIndicatorsProps {
  customersData: GetCustomersResponse
  processes: GetProcessesResponse
}

export function DashboardIndicatorsView({
  customersData,
  processes,
}: DashboardIndicatorsProps) {
  const { meta, customers } = customersData
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
            {meta.totalCount}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {meta.activeCustomers} ativos
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
            {processes.totalCountProcessesInProgress} em andamento
          </p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-sm hover:shadow-md cursor-pointer transition-shadow border border-gray-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Processos Ativos
          </CardTitle>
          <Clock4 className="h-5 w-5 text-orange-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {processes.totalCountProcessesInProgress}
          </div>
          <p className="text-xs text-gray-500 mt-1">Requerem atenção</p>
        </CardContent>
      </Card>
      <Card className="bg-white shadow-sm hover:shadow-md cursor-pointer transition-shadow border border-gray-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Valor total receita
          </CardTitle>
          <FileText className="h-5 w-5 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {processes.totalCost}
          </div>
          <p className="text-xs text-gray-500 mt-1">Todos os processos</p>
        </CardContent>
      </Card>
    </div>
  )
}
