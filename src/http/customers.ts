// import { env } from '@/lib/env'
// import { fetchAdapter } from './adapters/fetch-adapter'

import { sleep } from '@/lib/utils'
import {
  Customer,
  GetCustomerResponse,
  GetCustomersParams,
  GetCustomersResponse,
} from '@/types'

const customers = [
  {
    id: '1',
    name: 'Maria Silva Santos',
    status: 'Suspenso',
    email: 'maria.silva@email.com',
    phone: '11999991234',
    cpf: '12345678900',
    created_at: '14/01/2024',
    processes: [
      {
        number: '1',
        title: 'Ação Trabalhista',
        court: '2ª Vara do Trabalho',
        cost: '5.000',
        last_update: '24/05/2024',
      },
    ],
  },
  {
    id: '2',
    name: 'Antônia Silva Santos',
    status: 'Ativo',
    email: 'antonia.silva@email.com',
    phone: '11999991235',
    cpf: '12345678901',
    created_at: '15/01/2024',
    processes: [
      {
        number: '1',
        title: 'Ação Trabalhista',
        court: '2ª Vara do Trabalho',
        cost: '15.000',
        last_update: '25/05/2024',
      },
    ],
  },
  {
    id: '3',
    name: 'Joana Silva Santos',
    status: 'Inativo',
    email: 'joana.silva@email.com',
    phone: '11999991236',
    cpf: '12345678902',
    created_at: '16/01/2024',
    processes: [
      {
        number: '1',
        title: 'Ação Trabalhista',
        court: '3ª Vara do Trabalho',
        cost: '25.000',
        last_update: '26/05/2024',
      },
    ],
  },
  {
    id: '4',
    name: 'Tatiana Silva Santos',
    status: 'Suspenso',
    email: 'tatiana.silva@email.com',
    phone: '11999991237',
    cpf: '12345678903',
    created_at: '17/01/2024',
    processes: [
      {
        number: '1',
        title: 'Ação Previdenciária',
        court: '1ª Vara Federal',
        cost: '30.000',
        last_update: '27/05/2024',
      },
    ],
  },
  {
    id: '5',
    name: 'Carlos Souza',
    status: 'Ativo',
    email: 'carlos.souza@email.com',
    phone: '11999991238',
    cpf: '12345678904',
    created_at: '18/01/2024',
    processes: [
      {
        number: '2',
        title: 'Ação Civil',
        court: '4ª Vara Cível',
        cost: '10.000',
        last_update: '28/05/2024',
      },
    ],
  },
  {
    id: '6',
    name: 'Fernanda Lima',
    status: 'Inativo',
    email: 'fernanda.lima@email.com',
    phone: '11999991239',
    cpf: '12345678905',
    created_at: '19/01/2024',
    processes: [
      {
        number: '3',
        title: 'Ação de Família',
        court: '5ª Vara de Família',
        cost: '8.000',
        last_update: '29/05/2024',
      },
    ],
  },
  {
    id: '7',
    name: 'Bruno Oliveira',
    status: 'Ativo',
    email: 'bruno.oliveira@email.com',
    phone: '11999991240',
    cpf: '12345678906',
    created_at: '20/01/2024',
    processes: [
      {
        number: '4',
        title: 'Ação Penal',
        court: '6ª Vara Criminal',
        cost: '12.000',
        last_update: '30/05/2024',
      },
    ],
  },
  {
    id: '8',
    name: 'Patrícia Gomes',
    status: 'Suspenso',
    email: 'patricia.gomes@email.com',
    phone: '11999991241',
    cpf: '12345678907',
    created_at: '21/01/2024',
    processes: [
      {
        number: '5',
        title: 'Ação Trabalhista',
        court: '7ª Vara do Trabalho',
        cost: '7.000',
        last_update: '31/05/2024',
      },
    ],
  },
  {
    id: '9',
    name: 'Ricardo Alves',
    status: 'Ativo',
    email: 'ricardo.alves@email.com',
    phone: '11999991242',
    cpf: '12345678908',
    created_at: '22/01/2024',
    processes: [
      {
        number: '6',
        title: 'Ação Civil',
        court: '8ª Vara Cível',
        cost: '9.000',
        last_update: '01/06/2024',
      },
    ],
  },
  {
    id: '10',
    name: 'Sofia Martins',
    status: 'Inativo',
    email: 'sofia.martins@email.com',
    phone: '11999991243',
    cpf: '12345678909',
    created_at: '23/01/2024',
    processes: [
      {
        number: '7',
        title: 'Ação Previdenciária',
        court: '9ª Vara Federal',
        cost: '11.000',
        last_update: '02/06/2024',
      },
    ],
  },
  {
    id: '11',
    name: 'Gabriel Costa',
    status: 'Ativo',
    email: 'gabriel.costa@email.com',
    phone: '11999991244',
    cpf: '12345678910',
    created_at: '24/01/2024',
    processes: [
      {
        number: '8',
        title: 'Ação de Família',
        court: '10ª Vara de Família',
        cost: '13.000',
        last_update: '03/06/2024',
      },
    ],
  },
  {
    id: '12',
    name: 'Larissa Rocha',
    status: 'Suspenso',
    email: 'larissa.rocha@email.com',
    phone: '11999991245',
    cpf: '12345678911',
    created_at: '25/01/2024',
    processes: [
      {
        number: '9',
        title: 'Ação Penal',
        court: '11ª Vara Criminal',
        cost: '14.000',
        last_update: '04/06/2024',
      },
    ],
  },
  {
    id: '13',
    name: 'Eduardo Pires',
    status: 'Ativo',
    email: 'eduardo.pires@email.com',
    phone: '11999991246',
    cpf: '12345678912',
    created_at: '26/01/2024',
    processes: [
      {
        number: '10',
        title: 'Ação Trabalhista',
        court: '12ª Vara do Trabalho',
        cost: '16.000',
        last_update: '05/06/2024',
      },
    ],
  },
]

function filterCustomers(customers: Customer[], name?: string) {
  if (!name) return customers
  return customers.filter((customer) =>
    customer.name.toLowerCase().includes(name.toLowerCase()),
  )
}

function paginate<T>(items: T[], page: number, perPage: number) {
  const start = (page - 1) * perPage
  const end = start + perPage
  return items.slice(start, end)
}

export async function getCustomers(
  params?: GetCustomersParams,
): Promise<GetCustomersResponse> {
  await sleep(2000)

  const page = params?.page ? parseInt(params.page) : 1
  const perPage = params?.perPage ? parseInt(params.perPage) : 6
  const customerName = params?.customerName

  const filtered = filterCustomers(customers, customerName)
  const paginated = paginate(filtered, page, perPage)

  return {
    customers: paginated,
    meta: {
      totalCount: filtered.length,
      page,
      perPage,
      totalPages: Math.ceil(filtered.length / perPage),
    },
  }
}

export async function getCustomer(
  customerId: string,
): Promise<GetCustomerResponse> {
  const customer = customers.find((customer) => customer.id === customerId)

  return {
    customer,
  }
}
