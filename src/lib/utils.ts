import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatusColor(status: string) {
  switch (status) {
    case 'Ativo':
    case 'Em andamento':
      return 'bg-green-100 text-green-800'
    case 'Finalizado':
      return 'bg-blue-100 text-blue-800'
    case 'Inativo':
      return 'bg-red-100 text-red-800'
    case 'Suspenso':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
