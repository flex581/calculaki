import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function HorasExtras() {
  const [salario, setSalario] = useState("");
  const [horas, setHoras] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const s = parseFloat(salario);
    const h = parseFloat(horas);
    
    if (!isNaN(s) && !isNaN(h)) {
      const valorHora = s / 220;
      const valorHoraExtra = valorHora * 1.5;
      const total = valorHoraExtra * h;
      setResult(total);
    }
  };

  const clear = () => {
    setSalario("");
    setHoras("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Horas Extras"
      description="Calcule o valor das suas horas extras"
      currentPath="/calculadora/horas-extras"
      category="finance"
      explanation="O valor da hora extra é calculado com base no salário mensal dividido por 220 horas (jornada padrão), multiplicado por 1,5 (acréscimo de 50% conforme CLT). O total é o valor da hora extra multiplicado pelo número de horas trabalhadas além da jornada normal."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="salario">Salário Mensal (R$)</Label>
            <Input
              id="salario"
              type="number"
              placeholder="3000"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
              data-testid="input-salario"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="horas">Horas Extras Trabalhadas</Label>
            <Input
              id="horas"
              type="number"
              placeholder="10"
              value={horas}
              onChange={(e) => setHoras(e.target.value)}
              data-testid="input-horas"
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
            label="Valor Total das Horas Extras"
            value={result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
