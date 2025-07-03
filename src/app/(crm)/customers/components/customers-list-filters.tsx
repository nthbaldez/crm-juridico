'use client'

import { Input } from '@/components/ui/input'
import { debounce } from '@/lib/utils'
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

// export interface CustomersListFiltersProps {}

export function CustomersListFilters() {
  const [inputSearch, setInputSearch] = useState('')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setInputSearch(searchParams.get('customerName') || '')
  }, [searchParams])

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      handleSearch(value)
    }, 500),
    [handleSearch],
  )
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    params.set('customerName', term)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative flex-1 sm:w-80">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        placeholder="Buscar clientes..."
        defaultValue={inputSearch}
        onChange={(e) => debouncedSearch(e.target.value)}
        className="pl-10 bg-white py-4"
      />
    </div>
  )
}
