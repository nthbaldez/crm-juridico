import { Skeleton } from '@/components/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function LoadingListSkeleton() {
  return (
    <div className="w-full space-y-4">
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
