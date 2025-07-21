import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GetCustomersResponse } from '@/http/customers'
import { getStatusColor } from '@/lib/utils'
import { Eye, Users } from 'lucide-react'
import Link from 'next/link'

export interface ClientsListProps {
  data: GetCustomersResponse
  limit?: number
  title?: string
}

export function ClientsList({
  data,
  title = 'Clientes recentes',
}: ClientsListProps) {
  const { customers } = data
  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {customers.map((client) => (
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
                  // onClick={() => router.push(`/customers/${client.id}`)}
                >
                  <Link href={`/customers/${client.id}`}>
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
