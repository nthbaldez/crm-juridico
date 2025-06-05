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
          cost: '25.000',
          last_update: '24/05/2024',
        },
      ],
    },
    { id: 2, name: 'Cliente B', status: 'Inativo', email: '' },
    { id: 3, name: 'Cliente C', status: 'Ativo', email: '' },
    { id: 4, name: 'Cliente D', status: 'Ativo', email: '' },
    { id: 5, name: 'Cliente E', status: 'Suspenso', email: '' },
  ]

  return Response.json(clients)
}
