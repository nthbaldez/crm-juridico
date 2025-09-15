import { Skeleton } from '@/components/skeleton'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function LoadingCustomer() {
  return (
    <div className="w-full space-x-4 flex flex-col md:flex-row">
      <aside className="mt-8 w-full md:w-[300px]">
        <Card className="p-6 grid gap-8 bg-white rounded-sm border border-gray-200 h-auto">
          <CardTitle className="flex items-center gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-6 w-48" />
          </CardTitle>

          <CardContent className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Skeleton className="h-4 w-4" />
              <div className="flex-1">
                <Skeleton className="h-3 w-12 mb-1" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Skeleton className="h-4 w-4" />
              <div className="flex-1">
                <Skeleton className="h-3 w-16 mb-1" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>

            {/* CPF */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Skeleton className="h-4 w-4" />
              <div className="flex-1">
                <Skeleton className="h-3 w-8 mb-1" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            {/* Data de cadastro */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Skeleton className="h-4 w-4" />
              <div className="flex-1">
                <Skeleton className="h-3 w-24 mb-1" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <div className="pt-4 border-t w-full">
              <div className="flex items-center justify-between text-sm">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-8" />
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </CardFooter>
        </Card>
      </aside>

      <div className="lg:col-span-2 mt-8 flex-1">
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-6 w-32" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Skeleton para lista de processos */}
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex justify-between items-start mb-3">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
