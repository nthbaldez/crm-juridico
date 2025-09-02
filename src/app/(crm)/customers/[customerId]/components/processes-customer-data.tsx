import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Customer } from '@/http/entities/entities'
import { formatCurrency, getStatusColor } from '@/lib/utils'
import { ArrowLeft, FileText, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function ProcessesCustomerData({
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
            <p className="text-gray-500 mb-4">
              Cliente não possui processos ativos.
            </p>
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
    <div className="lg:col-span-2 mt-8">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Processos ({customer.processes.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {customer.processes.length > 0 ? (
            <div className="space-y-4">
              {customer.processes.map((process) => (
                <div
                  key={process.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-900">
                      {process.title}
                    </h4>
                    <Badge className={getStatusColor(process.status)}>
                      {process.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <p>
                        <strong>Número:</strong> {process.number}
                      </p>
                      <p>
                        <strong>Tribunal:</strong> {process.court}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Valor:</strong> {formatCurrency(process.cost)}
                      </p>
                      <p>
                        <strong>Última atualização:</strong>{' '}
                        {new Date(process.last_update).toLocaleDateString(
                          'pt-BR',
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p>Nenhum processo encontrado para este cliente.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
