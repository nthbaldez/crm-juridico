import { Card } from '@/components/ui/card'
import { getClients } from '@/services/clients'
import Link from 'next/link'

export default async function ClientsPage() {
  const clients = await getClients()
  return (
    <div className="p-4 grid gap-6 overflow-y-auto">
      {clients.map(({ id, name }) => (
        <Link key={id} href={`/clients/${id}`}>
          <Card className="h-54 p-4">{name}</Card>
        </Link>
      ))}
    </div>
  )
}
