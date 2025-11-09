import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function Inflacao() {
  const [valorInicial, setValorInicial] = useState("");
  const [valorFinal, setValorFinal] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const inicial = parseFloat(valorInicial);
    const final = parseFloat(valorFinal);
    
    if (!isNaN(inicial) && !isNaN(final) && inicial > 0) {
      const inflacao = ((final - inicial) / inicial) * 100;
      setResult(inflacao);
    }
  };

  const clear = () => {
    setValorInicial("");
    setValorFinal("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Inflação"
      description="Calcule a inflação acumulada em um período"
      currentPath="/calculadora/inflacao"
      category="finance"
      explanation="A inflação acumulada é calculada comparando o valor de um índice (como IPCA) no início e no fim de um período. A fórmula é: ((Valor Final - Valor Inicial) / Valor Inicial) × 100. O resultado indica o percentual de aumento dos preços no período."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="inicial">Índice Inicial</Label>
            <Input
              id="inicial"
              type="number"
              placeholder="100"
              step="0.01"
              value={valorInicial}
              onChange={(e) => setValorInicial(e.target.value)}
              data-testid="input-inicial"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="final">Índice Final</Label>
            <Input
              id="final"
              type="number"
              placeholder="110"
              step="0.01"
              value={valorFinal}
              onChange={(e) => setValorFinal(e.target.value)}
              data-testid="input-final"
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
            label="Inflação Acumulada"
            value={result.toFixed(2)}
            unit="%"
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
