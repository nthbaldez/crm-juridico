'use server'

import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  console.log(`email: ${email} e password: ${password}`)

  if (email === 'nthbaldez@gmail.com') {
    redirect('/dashboard')
  }

  // try {
  //   const cookiesStore = await cookies()
  //   cookiesStore.set('session', JSON.stringify({ id: '123456', email }), {
  //     httpOnly: true,
  //     path: '/',
  //   })

  //   return { success: true }
  // } catch (err) {
  //   if (err instanceof InvalidCredentialsError) {
  //     return { error: err.message }
  //   }
  // }
}
