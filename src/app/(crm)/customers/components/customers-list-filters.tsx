'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export interface CustomersListFiltersProps {}

export function CustomersListFilters(props: CustomersListFiltersProps) {
  return (
    <div className="relative flex-1 sm:w-80">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        placeholder="Buscar clientes..."
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 bg-white py-4"
      />
    </div>
  )
}
