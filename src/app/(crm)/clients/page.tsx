import Heading from '@/components/heading'
import { List } from './components/list'

export default async function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="w-full space-y-2">
        <Heading>Clientes</Heading>
        <h2 className="text-gray-600">Lista geral dos seus clientes</h2>
      </div>
      <div className="grid grid-cols-1 m-auto space-y-6">
        <div className="grid gap-6 overflow-y-auto">
          <List />
        </div>
      </div>
    </div>
  )
}
