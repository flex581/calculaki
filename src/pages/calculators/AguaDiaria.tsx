import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function AguaDiaria() {
  const [peso, setPeso] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(peso);
    
    if (!isNaN(p) && p > 0) {
      const litros = (p * 35) / 1000;
      setResult(litros);
    }
  };

  const clear = () => {
    setPeso("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Água Diária"
      description="Descubra quanto de água você deve beber por dia"
      currentPath="/calculadora/agua-diaria"
      category="health"
      explanation="A quantidade recomendada de água diária é calculada multiplicando seu peso em kg por 35ml. Essa é uma fórmula geral - fatores como clima, atividade física e saúde podem exigir ajustes. Manter-se hidratado é essencial para o bom funcionamento do organismo."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="peso">Seu Peso (kg)</Label>
          <Input
            id="peso"
            type="number"
            placeholder="70"
            step="0.1"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            data-testid="input-peso"
          />
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
            label="Água Recomendada por Dia"
            value={result.toFixed(2)}
            unit="litros"
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
