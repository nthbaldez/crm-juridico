import { Client } from '@/core/domain/entities/client'

export interface ClientService {
  getAll(): Promise<Client[]>
  // getById(id: string): Promise<Client>
  // create(data: { name: string; email: string }): Promise<Client>
  // update(id: string, data: { name?: string; email?: string }): Promise<Client>
  // delete(id: string): Promise<void>
}
