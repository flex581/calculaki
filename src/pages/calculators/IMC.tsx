import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";
import { Card } from "@/components/ui/card";

export default function IMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, setResult] = useState<{ imc: number; classificacao: string } | null>(null);

  const calculate = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    
    if (!isNaN(p) && !isNaN(a) && a > 0) {
      const imc = p / (a * a);
      let classificacao = "";
      
      if (imc < 18.5) classificacao = "Abaixo do peso";
      else if (imc < 25) classificacao = "Peso normal";
      else if (imc < 30) classificacao = "Sobrepeso";
      else if (imc < 35) classificacao = "Obesidade Grau I";
      else if (imc < 40) classificacao = "Obesidade Grau II";
      else classificacao = "Obesidade Grau III";
      
      setResult({ imc, classificacao });
    }
  };

  const clear = () => {
    setPeso("");
    setAltura("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de IMC"
      description="Calcule seu Índice de Massa Corporal"
      currentPath="/calculadora/imc"
      category="health"
      explanation="O IMC (Índice de Massa Corporal) é calculado dividindo o peso (em kg) pela altura ao quadrado (em metros). É um indicador simples de obesidade e riscos à saúde. Valores entre 18,5 e 24,9 são considerados ideais para adultos."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="peso">Peso (kg)</Label>
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
          <div className="space-y-2">
            <Label htmlFor="altura">Altura (cm)</Label>
            <Input
              id="altura"
              type="number"
              placeholder="170"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              data-testid="input-altura"
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
              label="Seu IMC"
              value={result.imc.toFixed(1)}
            />
            <Card className="p-4 bg-chart-1/10 border-chart-1/20">
              <p className="text-center font-semibold text-foreground">
                Classificação: {result.classificacao}
              </p>
            </Card>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
