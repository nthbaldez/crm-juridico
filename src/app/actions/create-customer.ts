'use server'

import { CreateNewCustomerResponse } from '@/http/entities/entities'
import { sleep } from '@/lib/utils'
import { customerSchema } from '@/lib/zod'

export async function createCustomer(
  formData: FormData,
): Promise<
  { error?: Record<string, string[]> } | { data: CreateNewCustomerResponse }
> {
  await sleep(2000)

  const data = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    cpf: String(formData.get('cpf') ?? ''),
  }

  const result = customerSchema.safeParse(data)

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors
    return { error: fieldErrors }
  }

  // TODO: Chamada para persistir cliente no banco, chamando o service
  return { data }
}
