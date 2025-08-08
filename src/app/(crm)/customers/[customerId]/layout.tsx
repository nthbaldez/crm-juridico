import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'CRM Jurídico - Clientes',
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 m-auto space-y-6">{children}</div>
    </div>
  )
}
