import { sleep } from '@/lib/utils'

export type FetchAdapterOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, string>
  body?: any
  params?: Record<string, string | number>
  signal?: AbortSignal
}

export async function fetchAdapter<T = any>(
  url: string,
  options: FetchAdapterOptions = {},
): Promise<T> {
  await sleep(2000)
  let finalUrl = url
  if (options.params) {
    const query = new URLSearchParams(
      Object.entries(options.params).map(([k, v]) => [k, String(v)]),
    ).toString()
    finalUrl += (url.includes('?') ? '&' : '?') + query
  }

  // Fetch options
  const fetchOptions: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    signal: options.signal,
  }

  if (options.body !== undefined && options.method !== 'GET') {
    fetchOptions.body = JSON.stringify(options.body)
  }

  const response = await fetch(finalUrl, fetchOptions)

  if (!response.ok) {
    // You can customize error handling here
    const errorText = await response.text()
    throw new Error(
      `Fetch error: ${response.status} ${response.statusText} - ${errorText}`,
    )
  }

  // Try to parse JSON, fallback to text
  const contentType = response.headers.get('content-type')
  if (contentType && contentType.includes('application/json')) {
    return response.json() as Promise<T>
  }
  return response.text() as unknown as T
}
