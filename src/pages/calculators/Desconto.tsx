import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function Desconto() {
  const [preco, setPreco] = useState("");
  const [desconto, setDesconto] = useState("");
  const [result, setResult] = useState<{ final: number; economia: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(preco);
    const d = parseFloat(desconto);
    
    if (!isNaN(p) && !isNaN(d)) {
      const economia = p * (d / 100);
      const final = p - economia;
      setResult({ final, economia });
    }
  };

  const clear = () => {
    setPreco("");
    setDesconto("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Desconto"
      description="Calcule descontos percentuais rapidamente"
      currentPath="/calculadora/desconto"
      category="finance"
      explanation="O cálculo de desconto multiplica o valor original pela porcentagem de desconto para encontrar o valor da redução. O preço final é obtido subtraindo o valor do desconto do preço original."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="preco">Preço Original (R$)</Label>
            <Input
              id="preco"
              type="number"
              placeholder="100"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              data-testid="input-preco"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="desconto">Desconto (%)</Label>
            <Input
              id="desconto"
              type="number"
              placeholder="20"
              value={desconto}
              onChange={(e) => setDesconto(e.target.value)}
              data-testid="input-desconto"
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
          <div className="space-y-4">
            <ResultDisplay
              label="Preço Final"
              value={result.final.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            />
            <ResultDisplay
              label="Você Economiza"
              value={result.economia.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              className="bg-chart-1/10 border-chart-1/20"
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
