import { Users } from 'lucide-react'

export default function NoSelectedProcess() {
  return (
    <div className="m-auto text-gray-500">
      <Users className="h-16 w-16 mx-auto mb-4 text-gray-300" />
      <p>Selecione um cliente na lista ao lado para ver seus processos.</p>
    </div>
  )
}
