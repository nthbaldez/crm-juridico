# CRM Jurídico

O **CRM Jurídico** é uma aplicação desenvolvida para auxiliar advogados na gestão do seu dia a dia, proporcionando uma visão clara e organizada dos processos, clientes e faturamento.

## Funcionalidades

- **Autenticação de Usuário:**  
  Sistema de login para garantir a segurança e privacidade dos dados.

- **Dashboard Interativo:**  
  Visualize rapidamente o status dos processos, quantidade de clientes e o faturamento atualizado.

- **Gestão de Clientes:**  
  Consulte a lista de clientes cadastrados, acesse detalhes individuais e veja todos os processos em aberto relacionados a cada cliente.

- **Cadastro de Novos Clientes:**  
  Adicione novos clientes ao sistema e relacione processos a eles de forma simples e intuitiva.

- **Acompanhamento de Processos:**  
  Veja o andamento dos processos de cada cliente, com informações detalhadas e atualizadas.

## Principais Tecnologias Utilizadas até o momento

- **Next.js** (React 19)
- **TailwindCSS** para estilização
- **Radix UI** para componentes de interface
- **Zod** para validação de dados
- **TypeScript** para tipagem estática

## Instalação e Uso

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd crm-juridico
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env.local` na raiz do projeto e defina a variável:
     ```
     NEXT_PUBLIC_API_BASE_URL=<url-da-api>
     ```

4. **Execute o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**  
   Abra [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

- `src/app/` — Páginas e rotas principais (auth, dashboard, clientes)
- `src/components/` — Componentes reutilizáveis de UI
- `src/http/` — Lógica de comunicação com API e entidades
- `src/lib/` — Utilitários e validações
- `src/types/` — Tipos globais

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests com sugestões, correções ou melhorias!
