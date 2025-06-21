'use client'

import { Card, CardHeader } from '@/components/ui/card'
import { getClient } from '@/services/clients'
import { useParams } from 'next/navigation'
import { use } from 'react'

export default function UsersProcesses() {
  const params = useParams()

  // const { name, processes } = use(getClient(params.clientId as string))

  return (
    <div className="p-6">
      {/* <h1>Processos de {name}</h1> */}

      <div>
        {/* {processes.map((process) => (
          <Card key={process.number}>
            <CardHeader>
              <p>{process.number}</p>
            </CardHeader>
          </Card>
        ))} */}
      </div>
    </div>
  )
}
