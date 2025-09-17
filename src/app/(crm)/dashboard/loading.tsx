import Heading from '@/components/heading'
import LoadingListSkeleton from './components/loading-list-skeleton'
import LoadingDashboardSkeleton from './components/loading-dashboard'

export default function LoadingDashboard() {
  return (
    <div className="w-full space-y-6">
      <div className="w-full space-y-2">
        <Heading>Dashboard</Heading>

        <h2 className="text-gray-600">
          Visão geral dos seus clientes e processos
        </h2>
      </div>
      <LoadingDashboardSkeleton />
      <LoadingListSkeleton />
    </div>
  )
}
