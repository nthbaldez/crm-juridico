import { Skeleton } from '@/components/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function LoadingDashboardSkeleton() {
  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 w-full">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <Skeleton className="w-12 h-3" />
            <Skeleton className="w-4 h-3 rounded-full" />
          </CardHeader>

          <CardContent className="space-y-1">
            <Skeleton className="w-4 h-3" />
            <Skeleton className="w-8 h-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <Skeleton className="w-12 h-3" />
            <Skeleton className="w-4 h-3 rounded-full" />
          </CardHeader>

          <CardContent className="space-y-1">
            <Skeleton className="w-4 h-3" />
            <Skeleton className="w-8 h-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <Skeleton className="w-12 h-3" />
            <Skeleton className="w-4 h-3 rounded-full" />
          </CardHeader>

          <CardContent className="space-y-1">
            <Skeleton className="w-4 h-3" />
            <Skeleton className="w-8 h-3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <Skeleton className="w-12 h-3" />
            <Skeleton className="w-4 h-3 rounded-full" />
          </CardHeader>

          <CardContent className="space-y-1">
            <Skeleton className="w-4 h-3" />
            <Skeleton className="w-8 h-3" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
