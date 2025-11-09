import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function MetaFinanceira() {
  const [meta, setMeta] = useState("");
  const [meses, setMeses] = useState("");
  const [taxa, setTaxa] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const m = parseFloat(meta);
    const n = parseFloat(meses);
    const t = parseFloat(taxa) / 100;
    
    if (!isNaN(m) && !isNaN(n) && !isNaN(t)) {
      if (t === 0) {
        setResult(m / n);
      } else {
        const aporteMensal = m * t / (Math.pow(1 + t, n) - 1);
        setResult(aporteMensal);
      }
    }
  };

  const clear = () => {
    setMeta("");
    setMeses("");
    setTaxa("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Meta Financeira"
      description="Descubra quanto guardar por mês para atingir sua meta"
      currentPath="/calculadora/meta-financeira"
      category="finance"
      explanation="Esta calculadora determina quanto você precisa investir mensalmente para atingir um objetivo financeiro específico em um determinado prazo, considerando uma taxa de rendimento mensal. Ela utiliza a fórmula de valor futuro de uma série de pagamentos."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="meta">Meta Financeira (R$)</Label>
            <Input
              id="meta"
              type="number"
              placeholder="50000"
              value={meta}
              onChange={(e) => setMeta(e.target.value)}
              data-testid="input-meta"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="meses">Prazo (meses)</Label>
            <Input
              id="meses"
              type="number"
              placeholder="24"
              value={meses}
              onChange={(e) => setMeses(e.target.value)}
              data-testid="input-meses"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="taxa">Taxa de Rendimento (% ao mês)</Label>
            <Input
              id="taxa"
              type="number"
              placeholder="0.5"
              step="0.1"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
              data-testid="input-taxa"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={calculate} className="flex-1" data-testid="button-calculate">
            Calcular
          </Button>
          <Button onClick={clear} variant="outline" data-testid="button-clear">
            Limpar
          </Button>
        </div>

        {result !== null && (
          <ResultDisplay
            label="Aporte Mensal Necessário"
            value={result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
