import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
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

export const formatCurrency = (value: string | number): string => {
  const numericValue =
    typeof value === 'string' ? parseFloat(value.replace(/\./g, '')) : value

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue)
}

export function debounce<T extends (...args: string[]) => void>(
  fn: T,
  delay: number,
) {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
