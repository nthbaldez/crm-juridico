import { ClientService } from '@/core/application/ports/client-service'
import { Client } from '@/core/domain/entities/client'
import { api } from '../http/api'

export class HttpClientService implements ClientService {
  async getAll(): Promise<Client[]> {
    const res = await api(`/clients`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()

    return data
  }

  // async getById(id: string): Promise<Client> {
  //   const res = await api(`${this.API_URL}/clients/${id}`)
  //   const data = await res.json()

  //   return new Client(data.id, data.name, data.email, data.cpf)
  // }

  // async create(data: { name: string; email: string }): Promise<Client> {
  //   const res = await api(`${this.API_URL}/clients`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data),
  //   })
  //   const created = await res.json()

  //   return new Client(created.id, created.name, created.email)
  // }

  // async update(
  //   id: string,
  //   data: { name?: string; email?: string },
  // ): Promise<Client> {
  //   const res = await api(`${this.API_URL}/clients/${id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data),
  //   })
  //   const updated = await res.json()

  //   return new Client(updated.id, updated.name, updated.email)
  // }

  // async delete(id: string): Promise<void> {
  //   await api(`${this.API_URL}/clients/${id}`, {
  //     method: 'DELETE',
  //   })
  // }
}
