'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getStatusColor } from '@/lib/utils'
import { Eye, FileText } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function List() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="bg-white rounded-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex justify-between items-center">
            Maria da Silva
            <Badge className={getStatusColor('Ativo')}>Ativo</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-500">
            <div>
              <span className="font-semibold">Email: </span>
              maria.silva@email.com
            </div>
            <div>
              <span className="font-semibold">Telefone: </span>(11) 99999-1234
            </div>
            <div>
              <span className="font-semibold">CPF: </span>123.456.789-00
            </div>
            <div className="text-[14px]">
              <span className="font-semibold">Cadastrado em: </span>14/01/2024
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-0 border-t-2 border-gray-200 mx-6 ">
          <div className="w-full flex items-center justify-between mt-6">
            <span className="flex items-center gap-1 text-gray-500">
              <FileText className="h-4 w-4" />2 processo(s)
            </span>
            <Button
              variant="outline"
              size="sm"
              asChild
              onClick={() => router.push(`/clients/${1}`)}
            >
              <Link href={`/clients/${1}`}>
                <Eye className="h-4 w-4 mr-1" />
                Ver detalhes
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="bg-white rounded-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex justify-between items-center">
            Maria da Silva
            <Badge className={getStatusColor('Ativo')}>Ativo</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-500">
            <div>
              <span className="font-semibold">Email: </span>
              maria.silva@email.com
            </div>
            <div>
              <span className="font-semibold">Telefone: </span>(11) 99999-1234
            </div>
            <div>
              <span className="font-semibold">CPF: </span>123.456.789-00
            </div>
            <div className="text-[14px]">
              <span className="font-semibold">Cadastrado em: </span>14/01/2024
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-0 border-t-2 border-gray-200 mx-6">
          <div className="w-full flex items-center justify-between mt-6">
            <span className="flex items-center gap-1 text-gray-500">
              <FileText className="h-4 w-4" />2 processo(s)
            </span>
            <Button
              variant="outline"
              size="sm"
              asChild
              onClick={() => router.push(`/clients/${1}`)}
            >
              <Link href={`/clients/${1}`}>
                <Eye className="h-4 w-4 mr-1" />
                Ver detalhes
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="bg-white rounded-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex justify-between items-center">
            Maria da Silva
            <Badge className={getStatusColor('Ativo')}>Ativo</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-500">
            <div>
              <span className="font-semibold">Email: </span>
              maria.silva@email.com
            </div>
            <div>
              <span className="font-semibold">Telefone: </span>(11) 99999-1234
            </div>
            <div>
              <span className="font-semibold">CPF: </span>123.456.789-00
            </div>
            <div className="text-[14px]">
              <span className="font-semibold">Cadastrado em: </span>14/01/2024
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-0 border-t-2 border-gray-200 mx-6">
          <div className="w-full flex items-center justify-between mt-6">
            <span className="flex items-center gap-1 text-gray-500">
              <FileText className="h-4 w-4" />2 processo(s)
            </span>
            <Button
              variant="outline"
              size="sm"
              asChild
              onClick={() => router.push(`/clients/${1}`)}
            >
              <Link href={`/clients/${1}`}>
                <Eye className="h-4 w-4 mr-1" />
                Ver detalhes
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
