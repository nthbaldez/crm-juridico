import { Skeleton } from '@/components/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function Loading() {
  return (
    <div className="w-full space-y-4">
      <div className="w-full space-y-2">
        <Skeleton className="h-8 w-1/4" />
        <Skeleton className="h-4 w-2/4" />
      </div>

      <Card className="bg-white shadow-sm border border-gray-200">
        <CardHeader>
          <Skeleton className="h-6 w-32" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
