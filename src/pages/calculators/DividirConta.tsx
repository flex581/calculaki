import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function DividirConta() {
  const [total, setTotal] = useState("");
  const [pessoas, setPessoas] = useState("");
  const [gorjeta, setGorjeta] = useState("10");
  const [result, setResult] = useState<{ porPessoa: number; totalComGorjeta: number } | null>(null);

  const calculate = () => {
    const t = parseFloat(total);
    const p = parseInt(pessoas);
    const g = parseFloat(gorjeta);
    
    if (!isNaN(t) && !isNaN(p) && p > 0 && !isNaN(g)) {
      const valorGorjeta = t * (g / 100);
      const totalFinal = t + valorGorjeta;
      const porPessoa = totalFinal / p;
      
      setResult({
        porPessoa,
        totalComGorjeta: totalFinal
      });
    }
  };

  const clear = () => {
    setTotal("");
    setPessoas("");
    setGorjeta("10");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Divisão de Conta"
      description="Divida contas entre amigos facilmente"
      currentPath="/calculadora/dividir-conta"
      category="general"
      explanation="Esta calculadora divide o valor total da conta entre o número de pessoas, incluindo opcionalmente a gorjeta. Basta informar o valor total, quantas pessoas vão dividir e a porcentagem de gorjeta desejada. Perfeito para restaurantes e bares."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="total">Valor Total (R$)</Label>
            <Input
              id="total"
              type="number"
              placeholder="150"
              step="0.01"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              data-testid="input-total"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pessoas">Número de Pessoas</Label>
            <Input
              id="pessoas"
              type="number"
              placeholder="4"
              value={pessoas}
              onChange={(e) => setPessoas(e.target.value)}
              data-testid="input-pessoas"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gorjeta">Gorjeta (%)</Label>
            <Input
              id="gorjeta"
              type="number"
              placeholder="10"
              value={gorjeta}
              onChange={(e) => setGorjeta(e.target.value)}
              data-testid="input-gorjeta"
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
              label="Valor por Pessoa"
              value={result.porPessoa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            />
            <ResultDisplay
              label="Total com Gorjeta"
              value={result.totalComGorjeta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              className="bg-chart-1/10 border-chart-1/20"
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
