import { formatCurrency, sleep } from '@/lib/utils'

const processes = [
  {
    number: '1',
    title: 'Ação Trabalhista',
    court: '2ª Vara do Trabalho',
    cost: '5.000',
    last_update: '24/05/2024',
    status: 'Em andamento',
  },
  {
    number: '1',
    title: 'Ação Trabalhista',
    court: '2ª Vara do Trabalho',
    cost: '15.000',
    last_update: '25/05/2024',
    status: 'Concluído',
  },
  {
    number: '1',
    title: 'Ação Trabalhista',
    court: '3ª Vara do Trabalho',
    cost: '25.000',
    last_update: '26/05/2024',
    status: 'Iniciado',
  },
  {
    number: '1',
    title: 'Ação Previdenciária',
    court: '1ª Vara Federal',
    cost: '30.000',
    last_update: '27/05/2024',
    status: 'Em andamento',
  },
  {
    number: '2',
    title: 'Ação Civil',
    court: '4ª Vara Cível',
    cost: '10.000',
    last_update: '28/05/2024',
    status: 'Concluído',
  },
  {
    number: '3',
    title: 'Ação de Família',
    court: '5ª Vara de Família',
    cost: '8.000',
    last_update: '29/05/2024',
    status: 'Iniciado',
  },
  {
    number: '4',
    title: 'Ação Penal',
    court: '6ª Vara Criminal',
    cost: '12.000',
    last_update: '30/05/2024',
    status: 'Em andamento',
  },
  {
    number: '5',
    title: 'Ação Trabalhista',
    court: '7ª Vara do Trabalho',
    cost: '7.000',
    last_update: '31/05/2024',
    status: 'Concluído',
  },
  {
    number: '6',
    title: 'Ação Civil',
    court: '8ª Vara Cível',
    cost: '9.000',
    last_update: '01/06/2024',
    status: 'Iniciado',
  },
  {
    number: '7',
    title: 'Ação Previdenciária',
    court: '9ª Vara Federal',
    cost: '11.000',
    last_update: '02/06/2024',
    status: 'Em andamento',
  },
  {
    number: '8',
    title: 'Ação de Família',
    court: '10ª Vara de Família',
    cost: '13.000',
    last_update: '03/06/2024',
    status: 'Concluído',
  },
  {
    number: '9',
    title: 'Ação Penal',
    court: '11ª Vara Criminal',
    cost: '14.000',
    last_update: '04/06/2024',
    status: 'Iniciado',
  },
  {
    number: '10',
    title: 'Ação Trabalhista',
    court: '12ª Vara do Trabalho',
    cost: '16.000',
    last_update: '05/06/2024',
    status: 'Em andamento',
  },
]

export async function getProcesses() {
  await sleep(2000)
  const processesInProgress = await getInProgresseProcesses()
  const totalCost = await getTotalCost()
  return {
    processes,
    processesInProgress,
    totalCountProcesses: processes.length,
    totalCountProcessesInProgress: processesInProgress.length,
    totalCost,
  }
}

export async function getInProgresseProcesses() {
  const res = processes.filter((process) => process.status === 'Em andamento')
  return res
}

export async function getTotalCost() {
  const totalCost = processes.reduce((total, item) => {
    const valorNumerico = Number(item.cost.replace(/\./g, ''))
    return total + valorNumerico
  }, 0)

  const totalCostFormatted = formatCurrency(totalCost)

  return totalCostFormatted
}
