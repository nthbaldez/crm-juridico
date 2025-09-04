import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Customer } from '@/http/entities/entities'
import { ArrowLeft, Calendar, Mail, Phone, User, Users } from 'lucide-react'
import Link from 'next/link'

export default function SidebarCustomerInfo({
  customer,
}: {
  customer?: Customer
}) {
  if (!customer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="bg-white shadow-sm">
          <CardContent className="text-center py-12">
            <Users className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500 mb-4">Cliente não encontrado.</p>
            <Button variant="outline" asChild>
              <Link href={'/'}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
  return (
    <aside className="mt-8 w-full md:w-[300px]">
      <Card className="p-6 grid gap-8 bg-white rounded-sm border border-gray-200 h-auto">
        <CardTitle className="flex items-center gap-2">
          <User size={20} />
          <h2 className="text-xl font-semibold">Informações do cliente</h2>
        </CardTitle>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Mail className="h-4 w-4 text-gray-600" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">
                Email
              </p>
              <p className="text-sm text-gray-900">{customer.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Phone className="h-4 w-4 text-gray-600" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">
                Telefone
              </p>
              <p className="text-sm text-gray-900">{customer.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <User className="h-4 w-4 text-gray-600" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">CPF</p>
              <p className="text-sm text-gray-900">{customer.cpf}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Calendar className="h-4 w-4 text-gray-600" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">
                Data de cadastro
              </p>
              <p className="text-sm text-gray-900">{customer.created_at}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="pt-4 border-t w-full">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total de Processos:</span>
              <span className="font-semibold text-gray-900">
                {customer.processes.length}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-600">Valor Total:</span>
              <span className="font-semibold text-gray-900"></span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </aside>
  )
}
