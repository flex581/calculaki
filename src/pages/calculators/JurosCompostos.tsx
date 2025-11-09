import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function JurosCompostos() {
  const [capital, setCapital] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const c = parseFloat(capital);
    const t = parseFloat(taxa) / 100;
    const n = parseFloat(tempo);
    
    if (!isNaN(c) && !isNaN(t) && !isNaN(n)) {
      const montante = c * Math.pow(1 + t, n);
      setResult(montante);
    }
  };

  const clear = () => {
    setCapital("");
    setTaxa("");
    setTempo("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Juros Compostos"
      description="Calcule o rendimento de investimentos com juros compostos"
      currentPath="/calculadora/juros-compostos"
      category="finance"
      explanation="Os juros compostos são calculados sobre o capital inicial acrescido dos juros acumulados de períodos anteriores. A fórmula utilizada é: M = C × (1 + i)^t, onde M é o montante final, C é o capital inicial, i é a taxa de juros por período e t é o número de períodos."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="capital">Capital Inicial (R$)</Label>
            <Input
              id="capital"
              type="number"
              placeholder="10000"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              data-testid="input-capital"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="taxa">Taxa de Juros (% ao mês)</Label>
            <Input
              id="taxa"
              type="number"
              placeholder="1.5"
              step="0.1"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
              data-testid="input-taxa"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tempo">Período (meses)</Label>
            <Input
              id="tempo"
              type="number"
              placeholder="12"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
              data-testid="input-tempo"
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
            label="Montante Final"
            value={result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
