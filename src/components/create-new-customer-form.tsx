'use client'

import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { toast } from 'sonner'

export interface CreateNewCustomerFormProps {
  action: (
    formData: FormData,
  ) => Promise<{ error?: Record<string, string[]> } | { data: any }>
}

export function CreateNewCustomerForm({ action }: CreateNewCustomerFormProps) {
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
  })

  function handleInputChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const fd = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value)
    })

    const result = await action(fd)

    if (result && 'error' in result) {
      setFieldErrors(result.error ?? {})
      return
    }
    setOpen(false)
    setFormData({ name: '', email: '', phone: '', cpf: '' })
    toast('Cadastro de cliente feito com sucesso!', {
      description: 'Acesse a lista de clientes para visualizar detalhes',
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Novo Cliente
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Adicionar Novo Cliente</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Ex: João Silva Santos"
            />
            {fieldErrors.name && (
              <span className="text-red-500 text-xs">{fieldErrors.name}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Ex: joao@email.com"
            />
            {fieldErrors.email && (
              <span className="text-red-500 text-xs">{fieldErrors.email}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Ex: (11) 99999-9999"
            />
            {fieldErrors.phone && (
              <span className="text-red-500 text-xs">{fieldErrors.phone}</span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={(e) => handleInputChange('cpf', e.target.value)}
              placeholder="Ex: 123.456.789-00"
            />
            {fieldErrors.cpf && (
              <span className="text-red-500 text-xs">{fieldErrors.cpf}</span>
            )}
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button type="submit">Adicionar Cliente</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
