# Lexis Intelligence - OAB Coach Waitlist

A plataforma em português para preparação da OAB com IA, revisão de erros, peças, dissertativas e simulados.

## 🎯 Sobre

**Lexis Intelligence** é um assistente de estudos especializado em preparação para o exame da OAB (Ordem dos Advogados do Brasil). A plataforma oferece:

- 📊 **Mapa de alto rendimento por especialidade** - Saiba exatamente o que cai na sua área com padrões das últimas provas e previsão do próximo exame
- 📝 **Log de erros com repetição espaçada** - Seus erros categorizados e convertidos em revisão inteligente. Estude menos, retenha mais
- 📋 **Framework de peças e dissertativas** - Templates estruturados com rubrica OAB ponto a ponto. Saiba como pontuar antes de escrever
- 🧠 **Questões e simulados com gabarito comentado** - Prática com questões reais da 1ª fase e simulados completos da 2ª fase por especialidade

## 📋 Cobertura

- ✅ **20 disciplinas obrigatórias** na 1ª fase
- ✅ **7 áreas de especialidade** na 2ª fase (Direito Administrativo, Civil, Constitucional, Trabalho, Empresarial, Penal, Tributário)
- ✅ **Provas oficiais indexadas**
- ✅ **Método comprovado**: Questões → Revisão → Simulado

## 🚀 Primeiros 20 Inscritos

Os 20 primeiros a se inscreverem na lista de espera ganharão:
- ✨ Acesso antecipado à plataforma
- 🎁 Trial gratuito por tempo limitado quando o lançamento acontecer
- 🔔 Notificação exclusiva do lançamento

## 🛠 Stack Tecnológico

- **Frontend**: [Next.js 16](https://nextjs.org) + [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Database**: [MongoDB](https://www.mongodb.com)
- **Validation**: [Zod](https://zod.dev)
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Getting Started

### Pré-requisitos
- Node.js 20+
- npm ou yarn

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 📦 Variáveis de Ambiente

Crie um arquivo `.env.local` com:

```env
MONGODB_URI=your_mongodb_connection_string
```

## 📝 Estrutura do Projeto

```
├── app/
│   ├── api/
│   │   └── waitlist/       # Endpoint para registrar emails
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Página inicial
│   └── waitlist/
│       └── page.tsx        # Página de lista de espera
├── components/
│   └── shared/             # Componentes reutilizáveis
├── lib/
│   └── mongodb.ts          # Conexão com MongoDB
├── public/                 # Assets estáticos
├── next.config.ts          # Configuração Next.js
├── tailwind.config.ts      # Configuração Tailwind
└── tsconfig.json           # Configuração TypeScript
```

## 🌐 Deployment

A aplicação está hospedada em [Vercel](https://vercel.com).

**Deploy automático**: Cada push para a branch `main` dispara um novo deploy.

## 📄 Licença

Todos os direitos reservados © 2026 Lexis Intelligence.

---

Quer passar na OAB? Inscreva-se agora em nossa [lista de espera](/)!

