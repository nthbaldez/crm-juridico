export async function GET() {
  const clients = [
    {
      id: 1,
      name: 'Maria Silva Santos',
      status: 'Suspenso',
      email: 'maria.silva@email.com',
      phone: '11999991234',
      cpf: '12345678900',
      created_at: '14/01/2024',
      processes: [
        {
          number: 1,
          title: 'Ação Trabalhista',
          court: '2² Vara do Trabalho',
          cost: '5.000',
          last_update: '24/05/2024',
        },
      ],
    },
    {
      id: 2,
      name: 'Antônia Silva Santos',
      status: 'Ativo',
      email: 'antonia.silva@email.com',
      phone: '11999991234',
      cpf: '12345678900',
      created_at: '14/01/2024',
      processes: [
        {
          number: 1,
          title: 'Ação Trabalhista',
          court: '2² Vara do Trabalho',
          cost: '15.000',
          last_update: '24/05/2024',
        },
      ],
    },
    {
      id: 3,
      name: 'Joana Silva Santos',
      status: 'Inativo',
      email: 'joana.silva@email.com',
      phone: '11999991234',
      cpf: '12345678900',
      created_at: '14/01/2024',
      processes: [
        {
          number: 1,
          title: 'Ação Trabalhista',
          court: '2² Vara do Trabalho',
          cost: '25.000',
          last_update: '24/05/2024',
        },
      ],
    },
    {
      id: 4,
      name: 'Tatiana Silva Santos',
      status: 'Suspenso',
      email: 'joana.silva@email.com',
      phone: '11999991234',
      cpf: '12345678900',
      created_at: '14/01/2024',
      processes: [
        {
          number: 1,
          title: 'Ação Trabalhista',
          court: '2² Vara do Trabalho',
          cost: '25.000',
          last_update: '24/05/2024',
        },
      ],
    },
  ]

  return Response.json(clients)
}
