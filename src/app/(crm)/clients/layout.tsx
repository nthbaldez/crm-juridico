import type { Metadata } from 'next'
import Heading from '@/components/heading'
import { Card, CardHeader } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'CRM Jurídico - Clientes',
}

export default function ClientsLayout({
  children,
  processes,
}: Readonly<{
  children: React.ReactNode
  processes: React.ReactNode
}>) {
  return (
    <div className="space-y-6">
      <div className="w-full space-y-2">
        <Heading>Clientes</Heading>
        <h2 className="text-gray-600">
          Visão geral dos seus clientes e processos
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-8 m-auto space-y-6">
        <Card className="h-[calc(100vh-20rem)] max-md:w-full">
          <CardHeader className="text-lg font-semibold text-gray-900">
            Lista de Clientes (4)
          </CardHeader>
          {children}
        </Card>
        <Card className="h-[calc(100vh-20rem)]">
          <CardHeader className="text-lg font-semibold text-gray-900">
            Detalhes dos clientes
          </CardHeader>
          {processes}
        </Card>
      </div>
    </div>
  )
}
