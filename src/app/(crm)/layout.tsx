import type { Metadata } from 'next'
import Header from '../../components/header'
import Container from '@/components/container'

export const metadata: Metadata = {
  title: 'CRM Jurídico',
}

export default function LayoutCRM({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}
