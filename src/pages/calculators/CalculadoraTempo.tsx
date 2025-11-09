import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function CalculadoraTempo() {
  const [dias, setDias] = useState("");
  const [horas, setHoras] = useState("");
  const [minutos, setMinutos] = useState("");
  const [result, setResult] = useState<{ dias: number; horas: number; minutos: number } | null>(null);

  const calculate = () => {
    const d = parseInt(dias) || 0;
    const h = parseInt(horas) || 0;
    const m = parseInt(minutos) || 0;
    
    const totalMinutos = d * 24 * 60 + h * 60 + m;
    const totalHoras = totalMinutos / 60;
    const totalDias = totalHoras / 24;
    
    setResult({
      dias: totalDias,
      horas: totalHoras,
      minutos: totalMinutos
    });
  };

  const clear = () => {
    setDias("");
    setHoras("");
    setMinutos("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Tempo"
      description="Calcule e converta dias, horas e minutos"
      currentPath="/calculadora/calculadora-tempo"
      category="education"
      explanation="Esta calculadora converte entre diferentes unidades de tempo. Ela soma os valores inseridos e mostra o total em dias, horas e minutos. Útil para calcular durações de projetos, viagens ou qualquer período de tempo."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dias">Dias</Label>
            <Input
              id="dias"
              type="number"
              placeholder="0"
              value={dias}
              onChange={(e) => setDias(e.target.value)}
              data-testid="input-dias"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="horas">Horas</Label>
            <Input
              id="horas"
              type="number"
              placeholder="0"
              value={horas}
              onChange={(e) => setHoras(e.target.value)}
              data-testid="input-horas"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="minutos">Minutos</Label>
            <Input
              id="minutos"
              type="number"
              placeholder="0"
              value={minutos}
              onChange={(e) => setMinutos(e.target.value)}
              data-testid="input-minutos"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResultDisplay
              label="Total em Dias"
              value={result.dias.toFixed(2)}
            />
            <ResultDisplay
              label="Total em Horas"
              value={result.horas.toFixed(2)}
            />
            <ResultDisplay
              label="Total em Minutos"
              value={result.minutos}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
