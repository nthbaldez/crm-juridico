'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ClientProps } from '@/core/infrastructure/services/clients'
import { getStatusColor } from '@/lib/utils'
import { Eye, Users } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export interface ClientsListProps {
  clients: ClientProps[]
}

export function ClientsList({ clients }: ClientsListProps) {
  const router = useRouter()

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
                  asChild
                  onClick={() => router.push(`/clients/${client.id}`)}
                >
                  <Link href={`/clients/${client.id}`}>
                    <Eye className="h-4 w-4 mr-1" />
                    Ver
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
