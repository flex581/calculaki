import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function Investimentos() {
  const [inicial, setInicial] = useState("");
  const [mensal, setMensal] = useState("");
  const [taxa, setTaxa] = useState("");
  const [meses, setMeses] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const i = parseFloat(inicial);
    const m = parseFloat(mensal);
    const t = parseFloat(taxa) / 100;
    const n = parseFloat(meses);
    
    if (!isNaN(i) && !isNaN(m) && !isNaN(t) && !isNaN(n)) {
      const montanteInicial = i * Math.pow(1 + t, n);
      const montanteMensal = m * ((Math.pow(1 + t, n) - 1) / t);
      const total = montanteInicial + montanteMensal;
      setResult(total);
    }
  };

  const clear = () => {
    setInicial("");
    setMensal("");
    setTaxa("");
    setMeses("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Simulador de Investimentos"
      description="Simule investimentos com aportes mensais"
      currentPath="/calculadora/investimentos"
      category="finance"
      explanation="O simulador calcula o valor final do investimento considerando um capital inicial e aportes mensais fixos, aplicando juros compostos. O montante final é a soma do capital inicial rendido mais os aportes mensais com seus respectivos rendimentos."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="inicial">Investimento Inicial (R$)</Label>
            <Input
              id="inicial"
              type="number"
              placeholder="5000"
              value={inicial}
              onChange={(e) => setInicial(e.target.value)}
              data-testid="input-inicial"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mensal">Aporte Mensal (R$)</Label>
            <Input
              id="mensal"
              type="number"
              placeholder="500"
              value={mensal}
              onChange={(e) => setMensal(e.target.value)}
              data-testid="input-mensal"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="taxa">Taxa de Juros (% ao mês)</Label>
            <Input
              id="taxa"
              type="number"
              placeholder="0.8"
              step="0.1"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
              data-testid="input-taxa"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="meses">Período (meses)</Label>
            <Input
              id="meses"
              type="number"
              placeholder="24"
              value={meses}
              onChange={(e) => setMeses(e.target.value)}
              data-testid="input-meses"
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
            label="Montante Final"
            value={result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
