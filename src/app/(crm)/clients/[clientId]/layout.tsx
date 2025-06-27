import type { Metadata } from 'next'
import Heading from '@/components/heading'

export const metadata: Metadata = {
  title: 'CRM Jurídico - Clientes',
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="space-y-6">
      <div className="w-full space-y-2">
        <Heading>Maria da Silva</Heading>
        <h2 className="text-gray-600">Detalhes do cliente e processos</h2>
      </div>
      <div className="grid grid-cols-1 m-auto space-y-6">{children}</div>
    </div>
  )
}
