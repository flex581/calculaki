import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function Porcentagem() {
  const [valor, setValor] = useState("");
  const [porcentagem, setPorcentagem] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const v = parseFloat(valor);
    const p = parseFloat(porcentagem);
    
    if (!isNaN(v) && !isNaN(p)) {
      const resultado = (v * p) / 100;
      setResult(resultado);
    }
  };

  const clear = () => {
    setValor("");
    setPorcentagem("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Porcentagem"
      description="Calcule porcentagens de forma rápida"
      currentPath="/calculadora/porcentagem"
      category="education"
      explanation="O cálculo de porcentagem multiplica o valor total pela porcentagem desejada e divide por 100. Por exemplo, 20% de 100 é calculado como (100 × 20) / 100 = 20. É fundamental para cálculos financeiros, descontos e aumentos."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="valor">Valor Total</Label>
            <Input
              id="valor"
              type="number"
              placeholder="100"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              data-testid="input-valor"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="porcentagem">Porcentagem (%)</Label>
            <Input
              id="porcentagem"
              type="number"
              placeholder="15"
              value={porcentagem}
              onChange={(e) => setPorcentagem(e.target.value)}
              data-testid="input-porcentagem"
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
            label="Resultado"
            value={result.toFixed(2)}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
