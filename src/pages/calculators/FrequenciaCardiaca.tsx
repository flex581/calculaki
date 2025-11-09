import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function FrequenciaCardiaca() {
  const [idade, setIdade] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const i = parseFloat(idade);
    
    if (!isNaN(i) && i > 0) {
      const fcm = 220 - i;
      setResult(fcm);
    }
  };

  const clear = () => {
    setIdade("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Frequência Cardíaca"
      description="Descubra sua frequência cardíaca máxima"
      currentPath="/calculadora/frequencia-cardiaca"
      category="health"
      explanation="A Frequência Cardíaca Máxima (FCM) é calculada pela fórmula simplificada: 220 - idade. Representa o número máximo de batimentos por minuto que seu coração pode atingir durante exercício físico intenso. É usada para definir zonas de treinamento adequadas."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="idade">Idade (anos)</Label>
          <Input
            id="idade"
            type="number"
            placeholder="30"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            data-testid="input-idade"
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
            label="Frequência Cardíaca Máxima"
            value={result}
            unit="bpm"
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
