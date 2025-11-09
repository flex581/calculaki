# Calculaki - Calculadoras Online Gratuitas

## Visão Geral
Calculaki é um site moderno e responsivo que oferece mais de 40 calculadoras e ferramentas online gratuitas. O site é focado em ser leve, rápido, útil e otimizado para SEO.

## Tecnologias
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn UI
- **Routing**: Wouter
- **Backend**: Express.js (minimal - serve aplicação)
- **State Management**: TanStack Query

## Estrutura do Projeto

### Páginas Principais
- `/` - Homepage com busca e categorias
- `/sobre` - Sobre o Calculaki
- `/contato` - Informações de contato
- `/privacidade` - Política de privacidade

### Categorias de Calculadoras

#### 💰 Finanças e Investimentos (10 calculadoras)
1. Juros Compostos
2. Financiamento (prestação mensal)
3. Salário Líquido
4. Desconto (%)
5. Horas Extras
6. Simulador de Investimentos
7. Meta Financeira
8. Rentabilidade Real
9. Conversor de Dólar/Real
10. Inflação Acumulada

#### 🧠 Estudos e Matemática (8 calculadoras)
1. Regra de 3
2. Porcentagem
3. Fração para Decimal
4. Média (simples e ponderada)
5. Conversor de Unidades
6. Gerador de Números Aleatórios
7. Calculadora de Tempo
8. Conversor de Bases (binário/decimal/hex)

#### ⚖️ Saúde e Bem-Estar (6 calculadoras)
1. IMC
2. Gasto Calórico (TMB)
3. Frequência Cardíaca Máxima
4. Gordura Corporal
5. Cronômetro de Treino
6. Água Diária

#### 📅 Tempo e Produtividade (5 ferramentas)
1. Contador Regressivo
2. Cronômetro Online
3. Diferença entre Datas
4. Planejador de Rotina
5. Calculadora de Idade

#### 🧾 Ferramentas Gerais (7 ferramentas)
1. Contador de Palavras
2. Gerador de Senhas
3. Conversor de Texto
4. Calculadora de Proporções
5. Inverter Texto
6. Divisão de Conta
7. Conversor de Temperatura

## Design
- **Cores**: Azul e branco (minimalista)
- **Tipografia**: Inter (sans-serif moderna)
- **Layout**: Responsivo mobile-first
- **Dark Mode**: Suporte completo com toggle no header
- **Componentes**: Shadcn UI para consistência visual

## Características
- ✅ 40+ calculadoras funcionais
- ✅ Busca em tempo real
- ✅ SEO otimizado (meta tags, títulos únicos)
- ✅ 100% client-side (sem necessidade de backend para cálculos)
- ✅ Modo escuro
- ✅ Totalmente responsivo
- ✅ Performance otimizada

## Estrutura de Arquivos

```
client/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx (navegação + theme toggle)
│   │   │   └── Footer.tsx
│   │   ├── ui/ (Shadcn components)
│   │   ├── CalculatorCard.tsx
│   │   ├── CalculatorLayout.tsx
│   │   └── ResultDisplay.tsx
│   ├── pages/
│   │   ├── Home.tsx (homepage com busca)
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   └── calculators/ (40+ calculator pages)
│   ├── App.tsx (routing)
│   └── index.css (design tokens)
shared/
└── calculators.ts (data structure)
```

## Como Executar
```bash
npm run dev
```

O aplicativo estará disponível em http://localhost:5000

## SEO
Cada calculadora possui:
- Título único descritivo
- Meta description otimizada
- Open Graph tags
- URLs amigáveis (/calculadora/nome-da-ferramenta)

## Próximos Passos
- [ ] Integração Google Analytics
- [ ] Possível monetização com AdSense
- [ ] Adicionar mais calculadoras conforme demanda

## Data de Criação
Janeiro 2025
