import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function NumeroAleatorio() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const generate = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);
    
    if (!isNaN(minNum) && !isNaN(maxNum) && minNum <= maxNum) {
      const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setResult(random);
    }
  };

  const clear = () => {
    setMin("");
    setMax("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Gerador de Números Aleatórios"
      description="Gere números aleatórios em um intervalo"
      currentPath="/calculadora/numero-aleatorio"
      category="education"
      explanation="O gerador utiliza a função de randomização do sistema para criar números aleatórios dentro de um intervalo específico. O valor mínimo e máximo são incluídos nas possibilidades. É útil para sorteios, jogos e simulações."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="min">Valor Mínimo</Label>
            <Input
              id="min"
              type="number"
              placeholder="1"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              data-testid="input-min"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="max">Valor Máximo</Label>
            <Input
              id="max"
              type="number"
              placeholder="100"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              data-testid="input-max"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={generate} className="flex-1" data-testid="button-generate">
            Gerar Número
          </Button>
          <Button onClick={clear} variant="outline" data-testid="button-clear">
            Limpar
          </Button>
        </div>

        {result !== null && (
          <ResultDisplay
            label="Número Aleatório"
            value={result}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
