'use server'

import z from 'zod'

const customerSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  cpf: z.string().min(1, 'CPF é obrigatório'),
})

export async function createCustomer(
  formData: FormData,
): Promise<{ error?: Record<string, string[]> } | { data: any }> {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    cpf: formData.get('cpf'),
  }

  const result = customerSchema.safeParse(data)

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors
    console.log(fieldErrors)
    return { error: fieldErrors }
  }

  return { data }
}
