import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function CalculadoraIdade() {
  const [dataNascimento, setDataNascimento] = useState("");
  const [result, setResult] = useState<{ anos: number; meses: number; dias: number } | null>(null);

  const calculate = () => {
    if (dataNascimento) {
      const nascimento = new Date(dataNascimento);
      const hoje = new Date();
      
      const diffTime = hoje.getTime() - nascimento.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffMonths = Math.floor(diffDays / 30.44);
      const diffYears = Math.floor(diffDays / 365.25);
      
      setResult({
        anos: diffYears,
        meses: diffMonths,
        dias: diffDays
      });
    }
  };

  const clear = () => {
    setDataNascimento("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Idade"
      description="Calcule sua idade em dias, meses e anos"
      currentPath="/calculadora/calculadora-idade"
      category="time"
      explanation="Esta calculadora determina sua idade exata em diferentes unidades de tempo a partir da data de nascimento. Mostra quantos anos, meses e dias você viveu, oferecendo uma perspectiva diferente sobre o tempo de vida."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="nascimento">Data de Nascimento</Label>
          <Input
            id="nascimento"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            data-testid="input-data-nascimento"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResultDisplay
              label="Sua Idade em Anos"
              value={result.anos}
            />
            <ResultDisplay
              label="Sua Idade em Meses"
              value={result.meses}
            />
            <ResultDisplay
              label="Sua Idade em Dias"
              value={result.dias}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
