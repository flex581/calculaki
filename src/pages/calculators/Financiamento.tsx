import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function Financiamento() {
  const [valor, setValor] = useState("");
  const [taxa, setTaxa] = useState("");
  const [parcelas, setParcelas] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const v = parseFloat(valor);
    const t = parseFloat(taxa) / 100;
    const n = parseFloat(parcelas);
    
    if (!isNaN(v) && !isNaN(t) && !isNaN(n) && t > 0) {
      const prestacao = v * (t * Math.pow(1 + t, n)) / (Math.pow(1 + t, n) - 1);
      setResult(prestacao);
    }
  };

  const clear = () => {
    setValor("");
    setTaxa("");
    setParcelas("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Financiamento"
      description="Calcule a prestação mensal do seu financiamento"
      currentPath="/calculadora/financiamento"
      category="finance"
      explanation="O cálculo do financiamento utiliza a Tabela Price, que divide o valor financiado em parcelas fixas mensais. A fórmula considera o valor financiado, a taxa de juros mensal e o número de parcelas para determinar o valor de cada prestação."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="valor">Valor Financiado (R$)</Label>
            <Input
              id="valor"
              type="number"
              placeholder="100000"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              data-testid="input-valor"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="taxa">Taxa de Juros (% ao mês)</Label>
            <Input
              id="taxa"
              type="number"
              placeholder="0.8"
              step="0.1"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
              data-testid="input-taxa"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="parcelas">Número de Parcelas</Label>
            <Input
              id="parcelas"
              type="number"
              placeholder="120"
              value={parcelas}
              onChange={(e) => setParcelas(e.target.value)}
              data-testid="input-parcelas"
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
            label="Prestação Mensal"
            value={result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
