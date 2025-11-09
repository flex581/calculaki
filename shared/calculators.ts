export interface Calculator {
  id: string;
  name: string;
  description: string;
  category: 'finance' | 'education' | 'health' | 'time' | 'general';
  path: string;
  keywords: string[];
}

export const calculators: Calculator[] = [
  // Finance
  {
    id: 'juros-compostos',
    name: 'Calculadora de Juros Compostos',
    description: 'Calcule o rendimento de investimentos com juros compostos',
    category: 'finance',
    path: '/calculadora/juros-compostos',
    keywords: ['juros', 'compostos', 'investimento', 'rendimento', 'financeiro']
  },
  {
    id: 'financiamento',
    name: 'Calculadora de Financiamento',
    description: 'Calcule a prestação mensal do seu financiamento',
    category: 'finance',
    path: '/calculadora/financiamento',
    keywords: ['financiamento', 'prestação', 'mensal', 'empréstimo', 'parcela']
  },
  {
    id: 'salario-liquido',
    name: 'Calculadora de Salário Líquido',
    description: 'Descubra quanto você recebe após os descontos',
    category: 'finance',
    path: '/calculadora/salario-liquido',
    keywords: ['salário', 'líquido', 'desconto', 'inss', 'irrf']
  },
  {
    id: 'desconto',
    name: 'Calculadora de Desconto',
    description: 'Calcule descontos percentuais rapidamente',
    category: 'finance',
    path: '/calculadora/desconto',
    keywords: ['desconto', 'percentual', 'porcentagem', 'preço']
  },
  {
    id: 'horas-extras',
    name: 'Calculadora de Horas Extras',
    description: 'Calcule o valor das suas horas extras',
    category: 'finance',
    path: '/calculadora/horas-extras',
    keywords: ['horas', 'extras', 'trabalho', 'salário']
  },
  {
    id: 'investimentos',
    name: 'Simulador de Investimentos',
    description: 'Simule investimentos com aportes mensais',
    category: 'finance',
    path: '/calculadora/investimentos',
    keywords: ['investimento', 'aporte', 'mensal', 'simulador']
  },
  {
    id: 'meta-financeira',
    name: 'Calculadora de Meta Financeira',
    description: 'Descubra quanto guardar por mês para atingir sua meta',
    category: 'finance',
    path: '/calculadora/meta-financeira',
    keywords: ['meta', 'objetivo', 'guardar', 'poupar']
  },
  {
    id: 'rentabilidade-real',
    name: 'Calculadora de Rentabilidade Real',
    description: 'Calcule o rendimento real descontando a inflação',
    category: 'finance',
    path: '/calculadora/rentabilidade-real',
    keywords: ['rentabilidade', 'real', 'inflação', 'rendimento']
  },
  {
    id: 'conversor-moedas',
    name: 'Conversor de Dólar para Real',
    description: 'Converta valores entre dólar e real',
    category: 'finance',
    path: '/calculadora/conversor-moedas',
    keywords: ['dólar', 'real', 'conversor', 'moeda', 'câmbio']
  },
  {
    id: 'inflacao',
    name: 'Calculadora de Inflação',
    description: 'Calcule a inflação acumulada em um período',
    category: 'finance',
    path: '/calculadora/inflacao',
    keywords: ['inflação', 'acumulada', 'período', 'ipca']
  },
  
  // Education
  {
    id: 'regra-de-tres',
    name: 'Calculadora de Regra de 3',
    description: 'Resolva problemas de proporção com regra de três',
    category: 'education',
    path: '/calculadora/regra-de-tres',
    keywords: ['regra', 'três', 'proporção', 'matemática']
  },
  {
    id: 'porcentagem',
    name: 'Calculadora de Porcentagem',
    description: 'Calcule porcentagens de forma rápida',
    category: 'education',
    path: '/calculadora/porcentagem',
    keywords: ['porcentagem', 'percentual', 'matemática']
  },
  {
    id: 'fracao-decimal',
    name: 'Conversor de Fração para Decimal',
    description: 'Converta frações em números decimais',
    category: 'education',
    path: '/calculadora/fracao-decimal',
    keywords: ['fração', 'decimal', 'conversão', 'matemática']
  },
  {
    id: 'media',
    name: 'Calculadora de Média',
    description: 'Calcule média simples e ponderada',
    category: 'education',
    path: '/calculadora/media',
    keywords: ['média', 'simples', 'ponderada', 'nota']
  },
  {
    id: 'conversor-unidades',
    name: 'Conversor de Unidades',
    description: 'Converta entre diferentes unidades de medida',
    category: 'education',
    path: '/calculadora/conversor-unidades',
    keywords: ['conversor', 'unidades', 'km', 'metro', 'litro']
  },
  {
    id: 'numero-aleatorio',
    name: 'Gerador de Números Aleatórios',
    description: 'Gere números aleatórios em um intervalo',
    category: 'education',
    path: '/calculadora/numero-aleatorio',
    keywords: ['aleatório', 'random', 'número', 'sorteio']
  },
  {
    id: 'calculadora-tempo',
    name: 'Calculadora de Tempo',
    description: 'Calcule e converta dias, horas e minutos',
    category: 'education',
    path: '/calculadora/calculadora-tempo',
    keywords: ['tempo', 'dias', 'horas', 'minutos']
  },
  {
    id: 'conversor-bases',
    name: 'Conversor de Bases Numéricas',
    description: 'Converta entre binário, decimal e hexadecimal',
    category: 'education',
    path: '/calculadora/conversor-bases',
    keywords: ['binário', 'decimal', 'hexadecimal', 'conversão']
  },
  
  // Health
  {
    id: 'imc',
    name: 'Calculadora de IMC',
    description: 'Calcule seu Índice de Massa Corporal',
    category: 'health',
    path: '/calculadora/imc',
    keywords: ['imc', 'peso', 'altura', 'saúde', 'massa']
  },
  {
    id: 'gasto-calorico',
    name: 'Calculadora de Gasto Calórico',
    description: 'Calcule sua Taxa Metabólica Basal (TMB)',
    category: 'health',
    path: '/calculadora/gasto-calorico',
    keywords: ['caloria', 'tmb', 'gasto', 'metabolismo']
  },
  {
    id: 'frequencia-cardiaca',
    name: 'Calculadora de Frequência Cardíaca',
    description: 'Descubra sua frequência cardíaca máxima',
    category: 'health',
    path: '/calculadora/frequencia-cardiaca',
    keywords: ['frequência', 'cardíaca', 'coração', 'batimento']
  },
  {
    id: 'gordura-corporal',
    name: 'Calculadora de Gordura Corporal',
    description: 'Estime seu percentual de gordura corporal',
    category: 'health',
    path: '/calculadora/gordura-corporal',
    keywords: ['gordura', 'corporal', 'percentual', 'bf']
  },
  {
    id: 'cronometro-treino',
    name: 'Cronômetro de Treino',
    description: 'Cronometre seus exercícios e treinos',
    category: 'health',
    path: '/calculadora/cronometro-treino',
    keywords: ['cronômetro', 'treino', 'exercício', 'tempo']
  },
  {
    id: 'agua-diaria',
    name: 'Calculadora de Água Diária',
    description: 'Descubra quanto de água você deve beber por dia',
    category: 'health',
    path: '/calculadora/agua-diaria',
    keywords: ['água', 'hidratação', 'diária', 'litros']
  },
  
  // Time & Productivity
  {
    id: 'contador-regressivo',
    name: 'Contador Regressivo',
    description: 'Crie um timer de contagem regressiva',
    category: 'time',
    path: '/calculadora/contador-regressivo',
    keywords: ['contador', 'regressivo', 'timer', 'tempo']
  },
  {
    id: 'cronometro',
    name: 'Cronômetro Online',
    description: 'Cronômetro simples e preciso',
    category: 'time',
    path: '/calculadora/cronometro',
    keywords: ['cronômetro', 'tempo', 'contagem']
  },
  {
    id: 'diferenca-datas',
    name: 'Calculadora de Diferença entre Datas',
    description: 'Calcule a diferença entre duas datas',
    category: 'time',
    path: '/calculadora/diferenca-datas',
    keywords: ['data', 'diferença', 'dias', 'período']
  },
  {
    id: 'planejador-rotina',
    name: 'Planejador de Rotina',
    description: 'Organize sua rotina com checklist e horários',
    category: 'time',
    path: '/calculadora/planejador-rotina',
    keywords: ['rotina', 'planejador', 'checklist', 'tarefa']
  },
  {
    id: 'calculadora-idade',
    name: 'Calculadora de Idade',
    description: 'Calcule sua idade em dias, meses e anos',
    category: 'time',
    path: '/calculadora/calculadora-idade',
    keywords: ['idade', 'anos', 'meses', 'dias']
  },
  
  // General
  {
    id: 'contador-palavras',
    name: 'Contador de Palavras',
    description: 'Conte palavras e caracteres em um texto',
    category: 'general',
    path: '/calculadora/contador-palavras',
    keywords: ['palavras', 'caracteres', 'texto', 'contador']
  },
  {
    id: 'gerador-senhas',
    name: 'Gerador de Senhas',
    description: 'Gere senhas seguras e aleatórias',
    category: 'general',
    path: '/calculadora/gerador-senhas',
    keywords: ['senha', 'gerador', 'segurança', 'password']
  },
  {
    id: 'conversor-texto',
    name: 'Conversor de Texto',
    description: 'Converta texto entre maiúsculas e minúsculas',
    category: 'general',
    path: '/calculadora/conversor-texto',
    keywords: ['texto', 'maiúscula', 'minúscula', 'converter']
  },
  {
    id: 'calculadora-proporcoes',
    name: 'Calculadora de Proporções',
    description: 'Calcule proporções para receitas e medidas',
    category: 'general',
    path: '/calculadora/calculadora-proporcoes',
    keywords: ['proporção', 'receita', 'medida', 'escala']
  },
  {
    id: 'inverter-texto',
    name: 'Inverter Texto',
    description: 'Inverta a ordem dos caracteres do texto',
    category: 'general',
    path: '/calculadora/inverter-texto',
    keywords: ['inverter', 'reverso', 'texto']
  },
  {
    id: 'dividir-conta',
    name: 'Divisão de Conta',
    description: 'Divida contas entre amigos facilmente',
    category: 'general',
    path: '/calculadora/dividir-conta',
    keywords: ['conta', 'dividir', 'rachadinha', 'split']
  },
  {
    id: 'conversor-temperatura',
    name: 'Conversor de Temperatura',
    description: 'Converta entre Celsius, Fahrenheit e Kelvin',
    category: 'general',
    path: '/calculadora/conversor-temperatura',
    keywords: ['temperatura', 'celsius', 'fahrenheit', 'kelvin']
  }
];

export const categories = {
  finance: {
    name: 'Finanças e Investimentos',
    icon: 'DollarSign',
    description: 'Ferramentas para cálculos financeiros e investimentos'
  },
  education: {
    name: 'Estudos e Matemática',
    description: 'Calculadoras para resolver problemas matemáticos',
    icon: 'BookOpen'
  },
  health: {
    name: 'Saúde e Bem-Estar',
    description: 'Ferramentas para cuidar da sua saúde',
    icon: 'Heart'
  },
  time: {
    name: 'Tempo e Produtividade',
    description: 'Organize seu tempo e aumente sua produtividade',
    icon: 'Clock'
  },
  general: {
    name: 'Ferramentas Gerais',
    description: 'Utilitários diversos para o dia a dia',
    icon: 'Wrench'
  }
} as const;
