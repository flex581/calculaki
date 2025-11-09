import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function RentabilidadeReal() {
  const [rentabilidade, setRentabilidade] = useState("");
  const [inflacao, setInflacao] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const r = parseFloat(rentabilidade) / 100;
    const i = parseFloat(inflacao) / 100;
    
    if (!isNaN(r) && !isNaN(i)) {
      const real = ((1 + r) / (1 + i) - 1) * 100;
      setResult(real);
    }
  };

  const clear = () => {
    setRentabilidade("");
    setInflacao("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Rentabilidade Real"
      description="Calcule o rendimento real descontando a inflação"
      currentPath="/calculadora/rentabilidade-real"
      category="finance"
      explanation="A rentabilidade real é o ganho efetivo de um investimento após descontar a inflação do período. É calculada pela fórmula: ((1 + rentabilidade nominal) / (1 + inflação) - 1) × 100. Este cálculo mostra o verdadeiro poder de compra ganho com o investimento."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rentabilidade">Rentabilidade Nominal (%)</Label>
            <Input
              id="rentabilidade"
              type="number"
              placeholder="10"
              step="0.1"
              value={rentabilidade}
              onChange={(e) => setRentabilidade(e.target.value)}
              data-testid="input-rentabilidade"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inflacao">Inflação do Período (%)</Label>
            <Input
              id="inflacao"
              type="number"
              placeholder="4.5"
              step="0.1"
              value={inflacao}
              onChange={(e) => setInflacao(e.target.value)}
              data-testid="input-inflacao"
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
            label="Rentabilidade Real"
            value={result.toFixed(2)}
            unit="%"
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
