'use client'

import { Pagination } from '@/components/pagination'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GetCustomersResponse } from '@/http/entities/entities'
import { getStatusColor } from '@/lib/utils'
import { Eye, FileText } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export interface CustomersListProps {
  data: GetCustomersResponse
  pageIndex: number
}

export function CustomersList({ data, pageIndex = 1 }: CustomersListProps) {
  const router = useRouter()
  const PAGE_SIZE = 6
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const { customers } = data

  function handlePaginate(pageIndex: number) {
    const params = new URLSearchParams(searchParams)
    params.set('page', (pageIndex + 1).toString())
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="space-y-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {customers.map((customer) => (
          <Card
            key={customer.id}
            className="bg-white rounded-sm border border-gray-200"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 flex justify-between items-center">
                {customer.name}
                <Badge className={getStatusColor(customer.status)}>
                  {customer.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-500">
                <div>
                  <span className="font-semibold">Email: </span>
                  {customer.email}
                </div>
                <div>
                  <span className="font-semibold">Telefone: </span>(11)
                  {customer.phone}
                </div>
                <div>
                  <span className="font-semibold">CPF: </span>123.456.789-00
                </div>
                <div className="text-[14px]">
                  <span className="font-semibold">Cadastrado em: </span>
                  {customer.created_at}
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-0 border-t-2 border-gray-200 mx-6 ">
              <div className="w-full flex items-center justify-between mt-6">
                <span className="flex items-center gap-1 text-gray-500">
                  <FileText className="h-4 w-4" />
                  {customer.processes.length} processo(s)
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  onClick={() => router.push(`/customers/${1}`)}
                >
                  <Link href={`/customers/${1}`}>
                    <Eye className="h-4 w-4 mr-1" />
                    Ver detalhes
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      {customers && (
        <Pagination
          pageIndex={pageIndex}
          perPage={PAGE_SIZE}
          totalCount={data.meta.totalCount}
          onPageChange={handlePaginate}
        />
      )}
    </div>
  )
}
