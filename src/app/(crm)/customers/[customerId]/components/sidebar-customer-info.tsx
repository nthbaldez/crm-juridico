import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Customer } from '@/types'
import { Mail, Phone, User } from 'lucide-react'

export default function SidebarCustomerInfo({
  customer,
}: {
  customer: Customer
}) {
  return (
    <aside className="mt-8">
      <Card className="p-6 grid gap-8 bg-white rounded-sm border border-gray-200 h-auto w-[500px]">
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
        </CardContent>
      </Card>
    </aside>
  )
}
