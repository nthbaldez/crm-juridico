'use client'

import { useParams } from 'next/navigation'

export default function UsersProcesses() {
  const params = useParams()

  return (
    <div className="p-6">
      <h1>Processos do cliente de id {params.clientId}</h1>

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
