'use client'

import { FileText } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathName = usePathname()

  const isActive = (path: string) =>
    pathName === path
      ? 'bg-black py-2 px-4 text-white rounded-lg'
      : 'py-2 px-4 text-gray-900 hover:bg-gray-200 rounded-lg transition-colors duration-200'

  return (
    <header className="bg-white shadow-sm border-b-border">
      <div className="flex max-w-7xl mx-auto justify-between items-center px-4 h-16">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-600 p-2 rounded-lg">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold">CRM Jurídico</h1>
        </div>

        <nav className="flex space-x-6">
          <Link href="/dashboard" className={`${isActive('/dashboard')}`}>
            Dashboard
          </Link>
          <Link href="/clients" className={`${isActive('/clients')}`}>
            Clientes
          </Link>
        </nav>
      </div>
    </header>
  )
}
