import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function DiferencaDatas() {
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [result, setResult] = useState<{ dias: number; meses: number; anos: number } | null>(null);

  const calculate = () => {
    if (dataInicial && dataFinal) {
      const d1 = new Date(dataInicial);
      const d2 = new Date(dataFinal);
      
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const diffMonths = Math.floor(diffDays / 30.44);
      const diffYears = Math.floor(diffDays / 365.25);
      
      setResult({
        dias: diffDays,
        meses: diffMonths,
        anos: diffYears
      });
    }
  };

  const clear = () => {
    setDataInicial("");
    setDataFinal("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Diferença entre Datas"
      description="Calcule a diferença entre duas datas"
      currentPath="/calculadora/diferenca-datas"
      category="time"
      explanation="Esta ferramenta calcula o período entre duas datas, mostrando o resultado em dias, meses e anos. É útil para calcular prazos, idade de documentos, tempo de relacionamento ou qualquer intervalo de tempo entre duas datas."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="inicial">Data Inicial</Label>
            <Input
              id="inicial"
              type="date"
              value={dataInicial}
              onChange={(e) => setDataInicial(e.target.value)}
              data-testid="input-data-inicial"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="final">Data Final</Label>
            <Input
              id="final"
              type="date"
              value={dataFinal}
              onChange={(e) => setDataFinal(e.target.value)}
              data-testid="input-data-final"
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
              label="Diferença em Dias"
              value={result.dias}
            />
            <ResultDisplay
              label="Diferença em Meses"
              value={result.meses}
            />
            <ResultDisplay
              label="Diferença em Anos"
              value={result.anos}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
