import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function FracaoDecimal() {
  const [numerador, setNumerador] = useState("");
  const [denominador, setDenominador] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const n = parseFloat(numerador);
    const d = parseFloat(denominador);
    
    if (!isNaN(n) && !isNaN(d) && d !== 0) {
      const decimal = n / d;
      setResult(decimal);
    }
  };

  const clear = () => {
    setNumerador("");
    setDenominador("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Conversor de Fração para Decimal"
      description="Converta frações em números decimais"
      currentPath="/calculadora/fracao-decimal"
      category="education"
      explanation="Para converter uma fração em decimal, basta dividir o numerador (número de cima) pelo denominador (número de baixo). Por exemplo, 3/4 = 3 ÷ 4 = 0,75. Esta conversão é útil para facilitar cálculos e comparações numéricas."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="numerador">Numerador</Label>
            <Input
              id="numerador"
              type="number"
              placeholder="3"
              value={numerador}
              onChange={(e) => setNumerador(e.target.value)}
              data-testid="input-numerador"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="denominador">Denominador</Label>
            <Input
              id="denominador"
              type="number"
              placeholder="4"
              value={denominador}
              onChange={(e) => setDenominador(e.target.value)}
              data-testid="input-denominador"
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
            label="Valor Decimal"
            value={result.toFixed(4)}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
