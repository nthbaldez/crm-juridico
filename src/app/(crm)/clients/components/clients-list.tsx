'use client'

import { Pagination } from '@/components/pagination'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getStatusColor } from '@/lib/utils'
import { Client } from '@/types'
import { Eye, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface GetClientsResponse {
  clients: Client[]
  meta: {
    totalCount: number
  }
}
export interface ClientsListProps {
  data: GetClientsResponse
  limit?: number
  title?: string
  pageIndex: number
}

export function ClientsList({
  data,
  pageIndex = 1,
  title = 'Listagem de Clientes',
}: ClientsListProps) {
  const router = useRouter()

  const searchParams = useSearchParams()
  const pathname = usePathname()

  function handlePaginate(pageIndex: number) {
    const params = new URLSearchParams(searchParams)
    params.set('page', (pageIndex + 1).toString())
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="space-y-6 mb-10">
      <Card className="bg-white shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.clients.map((client) => (
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
      <Pagination
        pageIndex={pageIndex}
        perPage={10}
        totalCount={data.meta.totalCount}
        onPageChange={handlePaginate}
      />
    </div>
  )
}
