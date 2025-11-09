import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function RegraDeTres() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const valA = parseFloat(a);
    const valB = parseFloat(b);
    const valC = parseFloat(c);
    
    if (!isNaN(valA) && !isNaN(valB) && !isNaN(valC) && valA !== 0) {
      const x = (valB * valC) / valA;
      setResult(x);
    }
  };

  const clear = () => {
    setA("");
    setB("");
    setC("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Regra de 3"
      description="Resolva problemas de proporção com regra de três"
      currentPath="/calculadora/regra-de-tres"
      category="education"
      explanation="A regra de três simples resolve problemas de proporcionalidade entre grandezas. Se A está para B, assim como C está para X, então X = (B × C) / A. É amplamente utilizada para resolver problemas do dia a dia envolvendo proporções."
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Se <strong>A</strong> está para <strong>B</strong>, assim como <strong>C</strong> está para <strong>X</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="a">Valor A</Label>
              <Input
                id="a"
                type="number"
                placeholder="5"
                value={a}
                onChange={(e) => setA(e.target.value)}
                data-testid="input-a"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="b">Valor B</Label>
              <Input
                id="b"
                type="number"
                placeholder="10"
                value={b}
                onChange={(e) => setB(e.target.value)}
                data-testid="input-b"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="c">Valor C</Label>
              <Input
                id="c"
                type="number"
                placeholder="15"
                value={c}
                onChange={(e) => setC(e.target.value)}
                data-testid="input-c"
              />
            </div>
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
            label="Valor de X"
            value={result.toFixed(2)}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
